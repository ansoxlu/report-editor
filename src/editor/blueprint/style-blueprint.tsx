import React from 'react'
import config from '../config.json'
import { Typography, Slider } from '@material-ui/core'
import { Content, DefaultStyle, DIMENSION_STYLE, Layout, SIMPLE_STYLE, Style } from '../enum'
import styled from 'styled-components'

type ConfigStyle = string | {
  label: string,
  default?: DefaultStyle
  isMulti?: boolean,
  min?: number
  max?: number
  step?: number
  value?: ConfigStyle[]
}

const SliderBox = styled.div`
`

function StyleBlueprint (props: {
  value: Layout | Content,
  onChange: (style: Style) => void
}) {
  const changeStyle = (key: string, value: string | {[key: string]: string | string[]}) => {
    const style = props.value.style
    style[key] = value
    props.onChange(style)
  }

  const items = []
  for (const key in props.value.style) {
    if (Object.prototype.hasOwnProperty.call(props.value.style, key)) {
      const value = props.value.style[key]
      // @ts-ignore
      const configStyle = config.style[key] as ConfigStyle
      const min = typeof configStyle === 'string' ? 0 : configStyle?.min ?? 0
      const max = typeof configStyle === 'string' ? 100 : configStyle?.max ?? 100
      const step = typeof configStyle === 'string' ? 100 : configStyle?.step ?? 100
      if (SIMPLE_STYLE.includes(key) || DIMENSION_STYLE.includes(key)) {
        items.push(
         <SliderBox key={key}>
           <Typography id="discrete-slider-small-steps" gutterBottom>
             Small steps
           </Typography>
           <Slider
             value={parseInt(value as string) || min}
             onChange={(event: any, val: number | number []) => changeStyle(key, val.toString())}
             getAriaValueText={() => value as string}
             aria-labelledby="discrete-slider-small-steps"
             step={step}
             marks
             min={min}
             max={max}
             valueLabelDisplay="auto"
           />
         </SliderBox>
        )
      }
    }
  }

  return (
    <div className="Style">
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default StyleBlueprint
