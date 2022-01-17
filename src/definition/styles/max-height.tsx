import { rem, StyleDefinition } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MaxHeight: StyleDefinition<SizeInputValue> = {
  ...BaseSizeInputStyle,
  render (value: SizeInputValue) {
    return { maxHeight: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'none' }
  },
  title: '最大高',
  describe: '',
  key: 'MaxHeight'
}
export default MaxHeight