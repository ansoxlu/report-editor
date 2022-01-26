import React from 'react'
import { StyleDefinition } from './types'
import { Select } from 'antd'

type Category = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'

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
  },
  {
    title: '间距相等',
    value: 'space-between'
  },
  {
    title: '围绕间隔',
    value: 'space-around'
  },
  {
    title: '边距相等',
    value: 'space-evenly'
  }
]

const JustifyContent: StyleDefinition<Category> = {
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
    return { justifyContent: value }
  },
  title: '主方向排列',
  defaultValue: 'flex-start',
  description: '',
  key: 'JustifyContent'
}

export default JustifyContent
