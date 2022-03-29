import React from 'react'
import { Select } from 'antd'
import { StyleDefinition } from './types'

type Category = 'center' | 'flex-start' | 'flex-end'

const Categories: { title: string, value: Category }[] = [
  {
    title: '开始',
    value: 'flex-start',
  },
  {
    title: '居中',
    value: 'center',
  },
  {
    title: '结束',
    value: 'flex-end',
  },
]

const AlignItems: StyleDefinition<Category> = {
  Blueprint(props: { value: Category; onChange: (value: Category) => void }) {
    return (
      <Select
        value={props.value}
        onChange={(v) => props.onChange(v)}
        style={{ width: 190 }}
      >
        {Categories.map((it) => (
          <Select.Option key={it.value} value={it.value}>{it.title}</Select.Option>
        ))}
      </Select>
    )
  },
  render(value: Category) {
    return { alignItems: value }
  },
  title: '副方向排列',
  defaultValue: 'center',
  description: '',
  key: 'AlignItems',
}

export default AlignItems
