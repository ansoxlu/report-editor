import { Layout } from '../layout/types'
import { createStyle } from '../styles/utils'
import { Content, ContentDefinition } from './types'
import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'

export const createContent = (layout: Layout, definition: ContentDefinition<any, any>): Content<any, any> => {
  return {
    id: uuid4(),
    layout: layout,
    definition: definition,
    styles: definition.styles.map(it => createStyle(it)),
    toJSON () {
      return {
        ...this,
        definition: this.definition.key,
        layout: this.layout.id
      }
    },
    value: cloneDeep(definition.defaultValue)
  }
}
