import { v4 as uuid4 } from 'uuid'
import styleUtils from '../style/utils'
import { ContentDefinition, ContentSerialize } from '../content/types'
import { Layout, LayoutDefinition, LayoutSerialize } from './types'
import { Style } from '../style/types'
import Many from './many'
import contentUtils from '../content/utils'
import definition from '../definition'

const createByLayoutSerialize = (serialize: LayoutSerialize): Layout => {
  const layout: Layout = {
    id: serialize.id,
    styles: serialize.styles.map((it) => styleUtils.createStyle(definition.styles, it)),
    definition: definition.layouts.find((it) => it.key === serialize.definition)!,
    contents: [],
    toJSON() {
      const value: LayoutSerialize = {
        contents: this.contents.map((it) => it.toJSON()),
        id: this.id,
        styles: this.styles.map((it) => it.toJSON()),
        definition: this.definition.key,
      }
      return value
    },
  }
  layout.contents = serialize.contents.map((it) => ({
    id: it.id,
    styles: it.styles.map((it) => styleUtils.createStyle(definition.styles, it)),
    value: it.value,
    definition: definition.contents.find((item) => item.key === it.definition)!,
    layout,
    toJSON() {
      const value: ContentSerialize = {
        value: this.value,
        id: this.id,
        styles: this.styles.map((it) => it.toJSON()),
        layout: this.layout.id,
        definition: this.definition.key,
      }
      return value
    },
  }))
  return layout
}

const createByLayoutDefinition = (
  definition: LayoutDefinition,
  defaultStyles: Style<any>[],
): Layout => ({
  id: uuid4(),
  styles: definition.styles.map(
    (it) => styleUtils.createStyle(
      definition.styles,
      it,
      defaultStyles.find((dit) => it.key === dit.definition.key)?.value,
    ),
  ),
  contents: [],
  definition,
  toJSON() {
    return {
      ...this,
      definition: this.definition.key,
    }
  },
})

const createByContentDefinition = (
  definition: ContentDefinition<any, any>,
  defaultStyles: Style<any>[],
): Layout => {
  const layout = createByLayoutDefinition(definition?.layout ?? Many, defaultStyles)
  const content = contentUtils.createContent(layout, definition, defaultStyles)
  layout.contents.push(content)
  return layout
}

const createLayout = (
  target: LayoutDefinition | LayoutSerialize | ContentDefinition<any, any>,
  defaultStyles?: Style<any>[],
): Layout => {
  if ((target as ContentDefinition<any, any>).Blueprint) {
    return createByContentDefinition(target as ContentDefinition<any, any>, defaultStyles!)
  }

  if ((target as LayoutSerialize).definition) {
    return createByLayoutSerialize(target as LayoutSerialize)
  }
  return createByLayoutDefinition(target as LayoutDefinition, defaultStyles!)
}

export default {
  createLayout,
}
