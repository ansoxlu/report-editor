import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Metadata, Page } from '../../definition/types'
import { render } from '../../definition/styles/utils'
import { flattenData, getRenderData } from '../../definition/utils'
import html2Canvas from 'html2canvas'
import { jsPDF as JsPDF } from 'jspdf'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Container = styled.div<{width: number}>`
  width: ${props => props.width}mm;
  border-right: 1px solid #ebe0e0;
  background-color: beige;
  box-sizing: content-box;
`

const Header = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
`

const RenderContainer = styled.div<{width: number, height: number}>`
  width: ${props => props.width}mm;
  min-height: ${props => props.height ? `${props.height}mm` : 'auto'};
  background-color: antiquewhite;
  visibility: hidden;
  position: absolute;
  top: 0;
`

const PageImg = styled.img<{width: number, height: number}>`
  width: ${props => props.width}mm;
  height: ${props => props.height ? `${props.height}mm` : 'auto'};
  margin: 15px 0;
`

const IFRAME_ID = 're-iframe'
const SCALE = 3

const Render = (props: {
  page: Page
  metadata: Metadata
  data: object
}) => {
  const navigate = useNavigate()
  const data = flattenData(props.data)
  const ref = useRef<HTMLDivElement | null>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement[]>([])

  const toCanvas = async (html: string): Promise<HTMLCanvasElement> => {
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
          <div id="app" style="width: ${props.page.width * SCALE}mm; height: ${props.page.height * SCALE}mm">${html}</div>
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

  const renderCanvas = async (): Promise<HTMLCanvasElement[]> => {
    const canvas: HTMLCanvasElement[] = []

    if (!ref.current) {
      return Promise.resolve([])
    }
    const pageable: { start: number; end: number }[] = []
    // 不分页或单页
    if (props.page.height === 0 || ref.current.offsetHeight === ref.current.scrollHeight) {
      pageable.push({ start: 0, end: props.page.layouts.length })
    } else {
      // TODO 待完善多页处理
      return canvas
    }

    if (!ref.current) {
      return canvas
    }
    const children = ref.current.children as unknown as HTMLDivElement[]

    for (const it of pageable) {
      // 根据分页计算结果获取 html
      let html = ''
      for (let i = it.start; i < it.end; i++) {
        html += children[i].outerHTML
      }
      const value = await toCanvas(html)
      canvas.push(value)
    }
    const oldIframe = document.getElementById(IFRAME_ID)
    if (oldIframe) {
      document.body.removeChild(oldIframe)
    }
    return canvas
  }

  const download = () => {
    if (canvas.length === 0) {
      return
    }
    const doc = new JsPDF({
      unit: 'mm', // 毫米
      format: [props.page.width, props.page.height]
    })
    for (let i = 0; i < canvas.length; i++) {
      const it = canvas[i]
      const dataURL = it.toDataURL('image/jpeg', 1)
      if (i !== 0) {
        doc.addPage()
      }
      doc.setPage(i + 1)
      doc.addImage(dataURL, 'JPEG', 0, 0, props.page.width, props.page.height)
    }
    doc.save('report.pdf')
  }

  useEffect(() => {
    // 计算分页并渲染成 canvas
    renderCanvas().then(value => {
      setCanvas(value)
    })
  }, [props.data])

  const getData = (tests: string | string[]) => {
    return getRenderData(tests, props.metadata, data)
  }

  const print = () => {
    const wind = window.open('', 'print')!
    wind.document.write(`<!DOCTYPE html>
      <html lang="en" style="font-size: ${SCALE * 100}px">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; }
          body { width: ${props.page.width}mm; }
          img { width: ${props.page.width}mm; height: ${props.page.height ? `${props.page.height}mm` : 'auto'}; }
          </style>
        </head>
        <body>
          ${canvas.map(it => `<img src="${it.toDataURL('image/jpeg')}" alt="" />`)}
        </body>
      </html>
    `)
    setTimeout(() => {
      wind.print()
      wind.close()
    }, 200)
  }

  return (
    <Container width={props.page.width}>
      <Header>
        <Button type="primary" onClick={() => download()}>PDF下载</Button>
        <Button type="primary" onClick={() => print()}>打印</Button>
        <Button type="primary" onClick={() => navigate('/preview')}>返回</Button>
      </Header>
      {canvas.map((it, index) => (<PageImg key={index} src={it.toDataURL('image/jpeg', 1 / SCALE)} alt="" width={props.page.width} height={props.page.height}/>))}
      <RenderContainer ref={value => { ref.current = value }} width={props.page.width} height={props.page.height}>
        {props.page.layouts.map((it, index) => (
          <it.definition.Render
            key={index}
            style={render(it.styles)}
            contents={it.contents}
            getData={getData}
          />
        ))}
      </RenderContainer>
    </Container>
  )
}

export default Render
