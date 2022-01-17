import React from 'react'
import { StyleDefinition } from './index'
import { Select } from 'antd'

type Category = 'center' | 'flex-start' | 'flex-end'

const Categories: {title: string, value: Category}[] = [
  {
    title: '开始',
    value: 'flex-start'
  },
  {
    title: '结束',
    value: 'flex-end'
  },
  {
    title: '居中',
    value: 'center'
  }
]

const AlignItems: StyleDefinition<Category> = {
  Blueprint (props: { value: Category; onChange: (value: Category) => void }) {
    return (
      <Select
        value={props.value}
        onChange={props.onChange}
        style={{ width: 190 }}
      >
        {Categories.map((it, index) => {
          return (<Select.Option key={index} value={it.value}>{it.title}</Select.Option>)
        })}
      </Select>
    )
  },
  render (value: Category) {
    return { alignItems: value }
  },
  title: '副方向排列',
  defaultValue: 'center',
  describe: '',
  key: 'AlignItems'
}

export default AlignItems
