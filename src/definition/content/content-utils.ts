import { v4 as uuid4 } from 'uuid'
import { cloneDeep } from 'lodash'
import { Layout } from '../layout/types'
import styleUtil from '../style/style-utils'
import { Content, ContentDefinition, ContentSerialize } from './types'
import definition from '../definition'
import { Style } from '../style/types'

const createContent = (
  layout: Layout,
  contentDefinition: ContentDefinition<any, any>,
  defaultStyles: Style<any>[],
): Content<any, any> => {
  const styles = !contentDefinition.styles ? definition.styles : contentDefinition.styles
  return {
    id: uuid4(),
    layout,
    definition: contentDefinition,
    // STYLE_DEFINITIONS 由于循环依赖问题，只能创建时选择
    styles: styles.map((it) => styleUtil.createStyle(
      definition.styles,
      it,
      defaultStyles.find((dit) => it.key === dit.definition.key)?.value,
    )),
    toJSON() {
      const value: ContentSerialize = {
        id: this.id,
        styles: this.styles.map((it) => it.toJSON()),
        value: this.value,
        definition: this.definition.key,
        layout: this.layout.id,
      }
      return value
    },
    value: cloneDeep(contentDefinition.defaultValue),
  }
}

export default {
  createContent,
}
