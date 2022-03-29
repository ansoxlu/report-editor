import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { jsPDF as JsPDF } from 'jspdf'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Metadata, Page } from '../../definition/types'
import utils from '../../definition/utils'
import styleUtils from '../../definition/style/utils'

const Container = styled.div<{width: number}>`
  width: ${(props) => props.width}mm;
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
  width: ${(props) => props.width}mm;
  height: ${(props) => (props.height ? `${props.height}mm` : 'auto')};
  overflow: auto;
  background-color: antiquewhite;
  visibility: hidden;
  position: absolute;
  top: 0;
`

const PageImg = styled.img<{width: number, height: number}>`
  width: ${(props) => props.width}mm;
  height: ${(props) => (props.height ? `${props.height}mm` : 'auto')};
  margin: 15px 0;
`

const SCALE = 3

function Render(props: {
  page: Page
  metadata: Metadata
  data: object
}) {
  const navigate = useNavigate()
  const data = utils.flattenData(props.data)
  const ref = useRef<HTMLDivElement | null>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement[]>([])

  const download = () => {
    if (canvas.length === 0) {
      return
    }
    const doc = new JsPDF({
      unit: 'mm', // 毫米
      format: [props.page.width, props.page.height],
    })
    for (let i = 0; i < canvas.length; i += 1) {
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
    if (!ref.current) {
      return
    }
    // 计算分页并渲染成 canvas
    utils.elementToCanvas(ref.current, props.page.width, props.page.height).then((value) => {
      setCanvas(value)
    })
  }, [props.data])

  const getData = (tests: string | string[]) => utils.getRenderData(tests, props.metadata, data)

  const print = () => {
    const wind = window.open('', 'print')!
    const width = `${props.page.width}mm`
    wind.document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; overflow: auto; }
          html { font-size: ${SCALE * 100}px }
          body { width: ${width}; height: ${props.page.height * canvas.length}mm; overflow: hidden; display: flex; flex-direction: column; }
          img { width: ${width}; height: ${props.page.height ? `${props.page.height}mm` : 'auto'}; }
          </style>
        </head>
        <body>
          ${canvas.map((it) => `<img src="${it.toDataURL('image/jpeg')}" alt="" />`).join('')}
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
        <Button type="primary" onClick={() => navigate('/')}>返回首页</Button>
      </Header>
      {canvas.map((it, index) => (<PageImg key={index} src={it.toDataURL('image/jpeg', 1 / SCALE)} alt="" width={props.page.width} height={props.page.height} />))}
      <RenderContainer
        ref={(value) => { ref.current = value }}
        width={props.page.width}
        height={props.page.height}
      >
        {props.page.layouts.map((it, index) => (
          <it.definition.Render
            key={index}
            style={styleUtils.render(it.styles)}
            contents={it.contents}
            getData={getData}
          />
        ))}
      </RenderContainer>
    </Container>
  )
}

export default Render
