import React from 'react'
import styled from 'styled-components'
import { LayoutBuildingProps, LayoutDefinition, LayoutRenderProps } from './types'
import styleUtils from '../style/style-utils'

const Container = styled.div<{ isActive: boolean}>`
  width: 100%;
  ${(props) => (props.isActive ? 'background-color: springgreen' : '')}
`

const Single: LayoutDefinition = {
  Building(props: LayoutBuildingProps) {
    const it = props.contents[0]
    const isActive = props.active?.id === it.id || props.active?.id === props.id

    const onChangeActive = () => {
      props.onChangeActive(it.id)
    }

    return (
      <Container
        isActive={isActive}
        style={styleUtils.renderLayout(it.styles)}
        onClick={() => onChangeActive()}
      >
        <it.definition.Building
          style={styleUtils.render(it.styles)}
          value={it.value}
          result={props.getData(it.value) || it.value}
          onChangeActive={onChangeActive}
        />
      </Container>
    )
  },
  Render(props: LayoutRenderProps) {
    const it = props.contents[0]
    return (
      <it.definition.Render
        style={styleUtils.render(it.styles)}
        result={props.getData(it.value)}
      />
    )
  },
  description: '内容列表只有一个，且不允许为空',
  key: 'Single',
  styles: [],
}

export default Single
