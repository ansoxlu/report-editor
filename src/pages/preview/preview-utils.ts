import html2Canvas from 'html2canvas'
import { jsPDF as JsPDF } from 'jspdf'

const IFRAME_ID = 're-iframe'
const SCALE = 3
const htmlToCanvas = async (
  html: string,
  width: number,
  height: number,
): Promise<HTMLCanvasElement> => {
  const o1 = document.getElementById(IFRAME_ID)
  if (o1) {
    document.body.removeChild(o1)
  }
  const iframe = document.createElement('iframe')
  iframe.id = IFRAME_ID
  iframe.style.visibility = 'hidden'
  iframe.style.position = 'absolute'
  iframe.style.top = '0px'
  iframe.srcdoc = `<!DOCTYPE html>
      <html lang="en" style="font-size: ${SCALE * 100}px">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style> * { padding: 0; margin: 0; } </style>
        </head>
        <body>
          <div id="app" style="width: ${width * SCALE}mm; height: ${height * SCALE}mm">${html}</div>
        </body>
      </html>
    `
  document.body.appendChild(iframe)
  // 等待渲染完成后获取 element
  await new Promise((resolve) => {
    const timer = setInterval(() => {
      if (iframe.contentDocument && iframe.contentDocument.getElementById('app')) {
        clearInterval(timer)
        resolve(undefined)
      }
    }, 100)
  })
  const canvas = await html2Canvas(iframe.contentDocument!.getElementById('app')!)
  const o2 = document.getElementById(IFRAME_ID)
  if (o2) {
    document.body.removeChild(o2)
  }
  return Promise.resolve(canvas)
}

const elementToCanvas = async (
  target: HTMLDivElement,
  width: number,
  height: number,
): Promise<HTMLCanvasElement[]> => {
  // 单页高度
  const pageHeight = target.offsetHeight
  // 单页
  if (pageHeight >= target.scrollHeight || height === 0) {
    return htmlToCanvas(target.innerHTML, width, height).then((canvas) => ([canvas]))
  }

  const pages: string[] = ['']
  // 可用高度
  let usableHeight = pageHeight
  for (let i = 0; i < target.children.length; i += 1) {
    const it = target.children[i]
    const itHeight = it.scrollHeight
    if (it.nodeName === 'BR') {
      const index = pages.length - 1
      const html = `${pages[index]}<div style="page-break-after:always;">`
      pages.splice(index, 1, html)
      pages.push('')
    } else if (it.nodeName === 'TABLE') {
      // 表格单页保留表头和表尾
      // todo 分页未完成表头和表尾处理
    } else {
      // 可用高度不满足，进行换页
      // eslint-disable-next-line no-lonely-if
      if (itHeight > usableHeight || itHeight >= pageHeight) {
        usableHeight = pageHeight - itHeight
        pages.push(it.innerHTML)
      } else {
        // 将当前页内容取出，合并后再添加
        usableHeight -= itHeight
        const index = pages.length - 1
        const html = `${pages[index]}${it.outerHTML}<div style="page-break-after:always;">`
        pages.splice(index, 1, html)
      }
    }
  }
  const canvas = []
  // eslint-disable-next-line no-restricted-syntax
  for (const it of pages.filter((it) => it)) {
    // eslint-disable-next-line no-await-in-loop
    const cv = await htmlToCanvas(it, width, height)
    canvas.push(cv)
  }
  return canvas
}

const downloadPDF = (canvas: HTMLCanvasElement[], width: number, height: number) => {
  if (canvas.length === 0) {
    return
  }
  const doc = new JsPDF({
    unit: 'mm', // 毫米
    format: [width, height],
  })
  for (let i = 0; i < canvas.length; i += 1) {
    const it = canvas[i]
    const dataURL = it.toDataURL('image/jpeg', 1)
    if (i !== 0) {
      doc.addPage()
    }
    doc.setPage(i + 1)
    doc.addImage(dataURL, 'JPEG', 0, 0, width, height)
  }
  doc.save('report.pdf')
}

const print = (canvas: HTMLCanvasElement[], width: number, height: number) => {
  const wind = window.open('', 'print')!
  const wid = `${width}mm`
  wind.document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; overflow: auto; }
          html { font-size: ${SCALE * 100}px }
          body { width: ${wid}; height: ${(height) * canvas.length}mm; overflow: hidden; display: flex; flex-direction: column; }
          img { width: ${wid}; height: ${height ? `${height}mm` : 'auto'}; }
          </style>
        </head>
        <body>
          ${canvas.map((it) => `<img src="${it.toDataURL('image/jpeg')}" alt="" />`).join('')}
        </body>
      </html>
    `)
  setTimeout(() => {
    wind.print()
    // wind.close()
  }, 200)
}

export default {
  htmlToCanvas,
  elementToCanvas,
  downloadPDF,
  print,
}
