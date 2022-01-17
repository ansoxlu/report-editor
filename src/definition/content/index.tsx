import { CSSProperties, ReactElement } from 'react'
import { createStyle, StyleDefinition, Style } from '../styles'
import { Layout } from '../layout'
import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'
import Text from './text'
/**
 * T 获取解析 value 获取渲染数据的内容
 */
export interface ContentDefinition<T, R> {
  key: string
  title: string
  describe: string
  defaultValue: T
  styles: StyleDefinition<any>[]
  Render: (props: { result?: R, style: CSSProperties }) => ReactElement
  Blueprint: (props: { value: T, onChange: (value: T) => void }) => ReactElement,
  Building: (props: { result?: R, style: CSSProperties, onChangeActive: () => void }) => ReactElement
}

export interface ContentDeserialize {
  id: string
  styles: StyleDefinition<any>[]
  value: any
  definition: string
  layout: string
}

export interface Content<T, R> {
  id: string
  styles: Style<any>[]
  value: T
  definition: ContentDefinition<T, R>
  layout: Layout
  toJSON: () => any
}

export const CONTENT_DEFINITIONS: ContentDefinition<any, any>[] = [Text]

export const createContent = (layout: Layout, content: ContentDefinition<any, any>): Content<any, any> => {
  return {
    id: uuid4(),
    layout: layout,
    definition: content,
    styles: content.styles.map(it => createStyle(it)),
    toJSON () {
      return {
        ...this,
        definition: this.definition.key,
        layout: this.layout.id
      }
    },
    value: cloneDeep(content.defaultValue)
  }
}
