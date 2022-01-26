import { createStyle } from '../styles/utils'
import { CONTENT_DEFINITIONS, ContentDefinition } from '../content/types'
import { Layout, LAYOUT_DEFINITIONS, LayoutDefinition, LayoutSerialize } from './types'
import { v4 as uuid4 } from 'uuid'
import { Style } from '../styles/types'
import Many from './many'
import { createContent } from '../content/utils'

const createByLayoutDeserialize = (serialize: LayoutSerialize): Layout => {
  const layout: Layout = {
    id: serialize.id,
    styles: serialize.styles.map(it => createStyle(it)),
    definition: LAYOUT_DEFINITIONS.find(it => it.key === serialize.definition)!,
    contents: [],
    type: serialize.type,
    toJSON () {
      return {
        ...this,
        definition: this.definition.key
      }
    }
  }
  layout.contents = serialize.contents.map(it => {
    return {
      id: it.id,
      styles: it.styles.map(it => createStyle(it)),
      value: it.value,
      definition: CONTENT_DEFINITIONS.find(item => item.key === it.definition)!,
      layout: layout,
      toJSON () {
        return {
          ...this,
          source: this.definition.key
        }
      }
    }
  })
  return layout
}

const createByLayoutDefinition = (definition: LayoutDefinition, defaultStyles: Style<any>[]): Layout => {
  return {
    id: uuid4(),
    styles: definition.styles.map(it => createStyle(it, defaultStyles.find(dit => it.key === dit.definition.key)?.value)),
    contents: [],
    definition: definition,
    type: definition?.type ?? 'normal',
    toJSON () {
      return {
        ...this,
        source: this.definition.key
      }
    }
  }
}

const createByContentDefinition = (definition: ContentDefinition<any, any>, defaultStyles: Style<any>[]): Layout => {
  const layout = createByLayoutDefinition(definition?.layout ?? Many, defaultStyles)
  const content = createContent(layout, definition)
  layout.contents.push(content)
  return layout
}

export const createLayout = (target: LayoutDefinition | LayoutSerialize | ContentDefinition<any, any>, defaultStyles?: Style<any>[]): Layout => {
  if ((target as ContentDefinition<any, any>).Blueprint) {
    return createByContentDefinition(target as ContentDefinition<any, any>, defaultStyles ?? [])
  }

  if ((target as LayoutSerialize).definition) {
    return createByLayoutDeserialize(target as LayoutSerialize)
  }
  return createByLayoutDefinition(target as LayoutDefinition, defaultStyles ?? [])
}
