import { createActive as createStyleActive, Style, StyleActive, StyleDeserialize } from '../styles'
import { ContentActive, ContentAll, ContentDeserialize } from '../content'
import { CSSProperties, ReactElement } from 'react'
import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'
import Row from './row'
import Wrap from './wrap'

export interface Layout<T> {
  key: string
  title: string
  describe: string
  styles: Style<any>[]
  defaultValue: T
  Render: (props: { value: T, contents: ContentActive<any, any>[], style: CSSProperties, getData: (texts: string | string[]) => any }) => ReactElement
  Blueprint: (props: { value: T, onChange: (value: T) => void }) => ReactElement
  Building: (props: {
    id: string,
    value: T,
    contents: ContentActive<any, any>[],
    style: CSSProperties,
    getData: (texts: string | string[]) => any | undefined,
    onChangeActive: (contentId: string) => void
  }) => ReactElement
}

export interface LayoutDeserialize {
  id: string
  styles: StyleDeserialize[]
  value: any
  contents: ContentDeserialize[]
  source: string
}

export interface LayoutActive<T> {
  id: string
  styles: StyleActive<any>[]
  value: T
  contents: ContentActive<any, any>[]
  source: Layout<T>
  toJSON: () => any
}

export const LayoutAll: Layout<any>[] = [Row, Wrap]

export const createActive = (layout: Layout<any> | LayoutDeserialize): LayoutActive<any> => {
  if ((layout as LayoutDeserialize).source) {
    const dv = layout as LayoutDeserialize
    const l: LayoutActive<any> = {
      id: dv.id,
      styles: dv.styles.map(it => createStyleActive(it)),
      value: dv.value,
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
  const lv = layout as Layout<any>
  return {
    id: uuid4(),
    value: cloneDeep(lv.defaultValue),
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
