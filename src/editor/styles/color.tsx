import React, { useState } from 'react'
import { Style } from './index'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  position: relative;
`

const Swatch = styled.div<{color: string}>`
  background-color: ${props => props.color};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
  width: 190px;
  height: 24px;
  position: absolute;
  top: -17px;
`

const Popover = styled.div`
  position: absolute;
  z-index: 2;
  left: -100px;
`

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Color: Style<string> = {
  Blueprint (props: { value: string; onChange: (value: string) => void }) {
    const [display, setDisplay] = useState(false)

    return (
      <Container>
        <Swatch color={props.value} onClick={() => setDisplay(true)}/>
        {display && (
          <Popover>
            <Cover onClick={() => setDisplay(false)}/>
            <SketchPicker color={props.value} onChange={(v) => props.onChange(v.hex)} />
          </Popover>
        )}
      </Container>
    )
  },
  render (value: string) {
    return { color: value }
  },
  defaultValue: '#000',
  describe: '',
  title: '字体颜色',
  key: 'Color'
}
export default Color
