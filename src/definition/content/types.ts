import { CSSProperties, ReactElement } from 'react'
import { StyleDefinition, Style, StyleSerialize } from '../styles/types'
import { Layout, LayoutDefinition } from '../layout/types'
import { Metadata } from '../types'
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
  Blueprint: (props: { value: T, onChange: (value: T) => void, metadata: Metadata, getData: (value: string | string[]) => any }) => ReactElement,
  Building: (props: { value: T, result?: R, style: CSSProperties, onChangeActive: () => void }) => ReactElement
}

export interface ContentSerialize {
  id: string
  styles: StyleSerialize[]
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
