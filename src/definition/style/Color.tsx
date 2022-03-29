import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
import { StyleDefinition } from './types'

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 190px;
  height: 30px;
`

const Swatch = styled.div<{color: string}>`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
`

const Popover = styled.div`
  position: absolute;
  z-index: 2;
  left: -80px;
  top: -271px
`

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Color: StyleDefinition<string> = {
  Blueprint(props: { value: string; onChange: (value: string) => void }) {
    const [display, setDisplay] = useState(false)

    return (
      <Container>
        <Swatch color={props.value} onClick={() => setDisplay(true)} />
        {display && (
          <Popover>
            <Cover onClick={() => setDisplay(false)} />
            <SketchPicker color={props.value} onChange={(v) => props.onChange(v.hex)} />
          </Popover>
        )}
      </Container>
    )
  },
  render(value: string) {
    return { color: value }
  },
  defaultValue: '#000',
  description: '',
  title: '字体颜色',
  key: 'Color',
}
export default Color
