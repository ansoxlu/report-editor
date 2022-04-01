import { CSSProperties, ReactElement } from 'react'
import { Style, StyleDefinition, StyleSerialize } from '../style/types'
// eslint-disable-next-line import/no-cycle
import { Content, ContentSerialize } from '../content/types'

export interface LayoutRenderProps {
  contents: Content<any, any>[],
  style: CSSProperties,
  // arg0 = Content.value
  getData: (texts: string | string[]) => any | undefined,
}

export interface LayoutBuildingProps extends LayoutRenderProps{
  id: string,
  onChangeActive: (contentId: string) => void
  // eslint-disable-next-line no-use-before-define
  active: Layout | Content<any, any> | undefined
}

export interface LayoutDefinition {
  key: string
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
