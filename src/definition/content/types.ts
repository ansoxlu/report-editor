import { CSSProperties, ReactElement } from 'react'
import { StyleDefinition, Style } from '../styles/types'
import { Layout, LayoutDefinition } from '../layout/types'
import Text from './text'
/**
 * T: string | string[]
 * R: getData(T) => R<undefined | object | object[]>
 */
export interface ContentDefinition<T, R> {
  key: string
  title: string
  description: string
  defaultValue: T
  layout?: LayoutDefinition
  styles: StyleDefinition<any>[]
  Render: (props: { result?: R, style: CSSProperties }) => ReactElement
  Blueprint: (props: { value: T, onChange: (value: T) => void }) => ReactElement,
  Building: (props: { result?: R, style: CSSProperties, onChangeActive: () => void }) => ReactElement
}

export interface ContentSerialize {
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
