import { StyleDefinition, Style, StyleSerialize } from '../styles/types'
import { Content, ContentSerialize } from '../content/types'
import { CSSProperties, ReactElement } from 'react'

export interface LayoutRenderProps {
  contents: Content<any, any>[],
  style: CSSProperties,
  // arg0 = Content.value
  getData: (texts: string | string[]) => any | undefined,
}

export interface LayoutBuildingProps extends LayoutRenderProps{
  id: string,
  onChangeActive: (contentId: string) => void
}

export interface LayoutDefinition {
  key: string
  title: string
  description: string
  styles: StyleDefinition<any>[]
  Render: (props: LayoutRenderProps) => ReactElement
  Building: (props: LayoutBuildingProps) => ReactElement
}

export interface LayoutSerialize {
  id: string
  styles: StyleSerialize[]
  contents: ContentSerialize[]
  definition: string
}

export interface Layout {
  id: string
  styles: Style<any>[]
  contents: Content<any, any>[]
  definition: LayoutDefinition
  toJSON: () => any,
}
