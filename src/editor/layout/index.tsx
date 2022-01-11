import { createActive as createStyleActive, Style, StyleActive, StyleDeserialize } from '../styles'
import { ContentActive, ContentAll, ContentDeserialize } from '../content'
import { CSSProperties, ReactElement } from 'react'
import { v4 as uuid4 } from 'uuid'
import Row from './row'
import Wrap from './wrap'

export interface LayoutRenderProps {
  contents: ContentActive<any, any>[],
  style: CSSProperties,
  getData: (texts: string | string[]) => any | undefined,
}

export interface LayoutBuildingProps extends LayoutRenderProps{
  id: string,
  onChangeActive: (contentId: string) => void
}

export interface LayoutBlueprintProps {
  contents: ContentActive<any, any>[]
  onChangeContents: (contents: ContentActive<any, any>[]) => void
}

export interface Layout {
  key: string
  title: string
  describe: string
  styles: Style<any>[]
  Render: (props: LayoutRenderProps) => ReactElement
  Blueprint: (props: LayoutBlueprintProps) => ReactElement
  Building: (props: LayoutBuildingProps) => ReactElement
}

export interface LayoutDeserialize {
  id: string
  styles: StyleDeserialize[]
  value: any
  contents: ContentDeserialize[]
  source: string
}

export interface LayoutActive {
  id: string
  styles: StyleActive<any>[]
  contents: ContentActive<any, any>[]
  source: Layout
  toJSON: () => any
}

export const LayoutAll: Layout[] = [Row, Wrap]

export const createActive = (layout: Layout | LayoutDeserialize): LayoutActive => {
  if ((layout as LayoutDeserialize).source) {
    const dv = layout as LayoutDeserialize
    const l: LayoutActive = {
      id: dv.id,
      styles: dv.styles.map(it => createStyleActive(it)),
      source: LayoutAll.find(it => it.key === dv.source)!,
      contents: [],
      toJSON () {
        return {
          ...this,
          source: this.source.key
        }
      }
    }
    l.contents = dv.contents.map(it => {
      return {
        id: it.id,
        styles: it.styles.map(it => createStyleActive(it)),
        value: it.value,
        source: ContentAll.find(item => item.key === it.source)!,
        layout: l,
        toJSON () {
          return {
            ...this,
            source: this.source.key
          }
        }
      }
    })
    return l
  }
  const lv = layout as Layout
  return {
    id: uuid4(),
    styles: lv.styles.map(it => createStyleActive(it)),
    contents: [],
    source: lv,
    toJSON () {
      return {
        ...this,
        source: this.source.key
      }
    }
  }
}
