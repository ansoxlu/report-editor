import { Layout } from '../layout/types'
import { createStyle } from '../styles/utils'
import { Content, ContentDefinition, ContentSerialize } from './types'
import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'
import { STYLE_DEFINITIONS } from '../index'

export const createContent = (layout: Layout, definition: ContentDefinition<any, any>): Content<any, any> => {
  return {
    id: uuid4(),
    layout: layout,
    definition: definition,
    styles: (definition.styles.length !== 0 ? definition.styles : STYLE_DEFINITIONS).map(it => createStyle(it)),
    toJSON () {
      const value: ContentSerialize = {
        id: this.id,
        styles: this.styles.map(it => it.toJSON()),
        value: this.value,
        definition: this.definition.key,
        layout: this.layout.id
      }
      return value
    },
    value: cloneDeep(definition.defaultValue)
  }
}

export const getContentDefinitions = async () => {
  return [
    await import('./text')
  ]
}
