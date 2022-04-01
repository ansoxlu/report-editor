import { CSSProperties, ReactElement } from 'react'
import { Style, StyleDefinition, StyleSerialize } from '../style/types'
// eslint-disable-next-line import/no-cycle
import { Layout, LayoutDefinition } from '../layout/types'
// eslint-disable-next-line import/no-cycle
import { Metadata } from '../types'

export type ContentDefinitionBlueprintProps<T> = {
  value: T,
  onChange: (value: T) => void,
  metadata: Metadata,
  getData: (value: string | string[]) => any
}

export type ContentDefinitionBuildingProps<T, R> = {
  value: T,
  result?: R,
  style: CSSProperties,
  onChangeActive: () => void
}

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
  styles?: StyleDefinition<any>[]
  Render: (props: { result?: R, style: CSSProperties }) => ReactElement
  Blueprint: (props: ContentDefinitionBlueprintProps<T>) => ReactElement,
  Building: (props: ContentDefinitionBuildingProps<T, R>) => ReactElement
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
