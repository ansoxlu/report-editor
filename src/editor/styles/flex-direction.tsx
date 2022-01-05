import React from 'react'
import { Style } from './index'
import { Switch } from 'antd'

type Direction = 'row' | 'column'
const FlexDirection: Style<Direction> = {
  title: '方向',
  defaultValue: 'row',
  describe: '',
  Blueprint (props: { value: Direction; onChange: (value: Direction) => void }) {
    return (
      <Switch checked={props.value === 'row'} checkedChildren="行" unCheckedChildren="列" onChange={(v) => props.onChange(v ? 'row' : 'column')} />
    )
  },
  render (value: Direction) {
    return { flexDirection: value }
  },
  key: 'FlexDirection'
}
export default FlexDirection
