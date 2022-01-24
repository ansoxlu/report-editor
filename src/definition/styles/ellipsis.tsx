import React from 'react'
import { Switch } from 'antd'
import { StyleDefinition } from './index'

const Ellipsis: StyleDefinition<boolean> = {
  Blueprint (props: { value: boolean; onChange: (value: boolean) => void }) {
    return (
      <Switch checked={props.value} checkedChildren="开启" unCheckedChildren="关闭" onChange={(v) => props.onChange(v)} />
    )
  },
  render (value: boolean) {
    return { overflow: value ? 'hidden' : 'unset', textOverflow: value ? 'ellipsis' : 'unset', whiteSpace: 'nowrap' }
  },
  defaultValue: false,
  describe: '配置最大宽/高使用',
  title: '超出省略',
  key: 'Ellipsis'
}

export default Ellipsis
