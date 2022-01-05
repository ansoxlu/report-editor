import { CSSProperties, ReactElement } from 'react'
import { createActive as createStyleActive, Style, StyleActive } from '../styles'
import { LayoutActive } from '../layout'
import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'
import Text from './text'
/**
 * T 获取解析 value 获取渲染数据的内容
 */
export interface Content<T, R> {
  key: string
  title: string
  describe: string
  defaultValue: T
  styles: Style<any>[]
  Render: (props: { result?: R, style: CSSProperties }) => ReactElement
  Blueprint: (props: { value: T, onChange: (value: T) => void }) => ReactElement,
  Building: (props: { result?: R, style: CSSProperties, onChangeActive: () => void }) => ReactElement
}

export interface ContentDeserialize {
  id: string
  styles: Style<any>[]
  value: any
  source: string
  layout: string
}

export interface ContentActive<T, R> {
  id: string
  styles: StyleActive<any>[]
  value: T
  source: Content<T, R>
  layout: LayoutActive<any>
  toJSON: () => any
}

export const ContentAll: Content<any, any>[] = [Text]

export const createActive = (layout: LayoutActive<any>, content: Content<any, any>): ContentActive<any, any> => {
  return {
    id: uuid4(),
    layout: layout,
    source: content,
    styles: content.styles.map(it => createStyleActive(it)),
    toJSON () {
      return {
        ...this,
        source: this.source.key,
        layout: this.layout.id
      }
    },
    value: cloneDeep(content.defaultValue)
  }
}
