import { createStyle, StyleDefinition, Style, StyleDeserialize } from '../styles'
import { Content, CONTENT_DEFINITIONS, ContentDeserialize } from '../content'
import { CSSProperties, ReactElement } from 'react'
import { v4 as uuid4 } from 'uuid'
import Row from './row'
import Wrap from './wrap'

export interface LayoutRenderProps {
  contents: Content<any, any>[],
  style: CSSProperties,
  getData: (texts: string | string[]) => any | undefined,
}

export interface LayoutBuildingProps extends LayoutRenderProps{
  id: string,
  onChangeActive: (contentId: string) => void
}

export interface LayoutBlueprintProps {
  contents: Content<any, any>[]
  onChangeContents: (contents: Content<any, any>[]) => void
}

export interface LayoutDefinition {
  key: string
  title: string
  describe: string
  styles: StyleDefinition<any>[]
  Render: (props: LayoutRenderProps) => ReactElement
  Blueprint: (props: LayoutBlueprintProps) => ReactElement
  Building: (props: LayoutBuildingProps) => ReactElement
}

export interface LayoutDeserialize {
  id: string
  styles: StyleDeserialize[]
  value: any
  contents: ContentDeserialize[]
  definition: string
}

export interface Layout {
  id: string
  styles: Style<any>[]
  contents: Content<any, any>[]
  definition: LayoutDefinition
  toJSON: () => any
}

export const LAYOUT_DEFINITIONS: LayoutDefinition[] = [Row, Wrap]

export const createLayout = (layout: LayoutDefinition | LayoutDeserialize): Layout => {
  if ((layout as LayoutDeserialize).definition) {
    const dv = layout as LayoutDeserialize
    const l: Layout = {
      id: dv.id,
      styles: dv.styles.map(it => createStyle(it)),
      definition: LAYOUT_DEFINITIONS.find(it => it.key === dv.definition)!,
      contents: [],
      toJSON () {
        return {
          ...this,
          definition: this.definition.key
        }
      }
    }
    l.contents = dv.contents.map(it => {
      return {
        id: it.id,
        styles: it.styles.map(it => createStyle(it)),
        value: it.value,
        definition: CONTENT_DEFINITIONS.find(item => item.key === it.definition)!,
        layout: l,
        toJSON () {
          return {
            ...this,
            source: this.definition.key
          }
        }
      }
    })
    return l
  }
  const definition = layout as LayoutDefinition
  return {
    id: uuid4(),
    styles: definition.styles.map(it => createStyle(it)),
    contents: [],
    definition: definition,
    toJSON () {
      return {
        ...this,
        source: this.definition.key
      }
    }
  }
}
