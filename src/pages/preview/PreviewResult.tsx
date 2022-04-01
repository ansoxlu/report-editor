import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Metadata, Page } from '../../definition/types'
import utils from '../../definition/definition-utils'
import styleUtils from '../../definition/style/style-utils'
import previewUtils from './preview-utils'

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

  useEffect(() => {
    if (!ref.current) {
      return
    }
    // 计算分页并渲染成 canvas
    previewUtils.elementToCanvas(ref.current, props.page.width, props.page.height).then((value) => {
      setCanvas(value)
    })
  }, [props.data])

  const getData = (tests: string | string[]) => utils.getRenderData(tests, props.metadata, data)

  const onDownload = () => {
    previewUtils.downloadPDF(canvas, props.page.width, props.page.height)
  }

  const onPrint = () => {
    previewUtils.print(canvas, props.page.width, props.page.height)
  }

  return (
    <Container width={props.page.width}>
      <Header>
        <Button type="primary" onClick={() => onDownload()}>PDF下载</Button>
        <Button type="primary" onClick={() => onPrint()}>打印</Button>
        <Button type="primary" onClick={() => navigate('/preview')}>返回首页</Button>
      </Header>
      {canvas.map((it, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PageImg key={index} src={it.toDataURL('image/jpeg', 1 / SCALE)} alt="" width={props.page.width} height={props.page.height} />
      ))}
      <RenderContainer
        ref={(value) => { ref.current = value }}
        width={props.page.width}
        height={props.page.height}
      >
        {props.page.layouts.map((it) => (
          <it.definition.Render
            key={it.id}
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
