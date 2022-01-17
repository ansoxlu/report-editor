import { rem, StyleDefinition } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MinWidth: StyleDefinition<SizeInputValue> = {
  ...BaseSizeInputStyle,
  render (value: SizeInputValue) {
    return { minWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'auto' }
  },
  title: '最小宽',
  describe: '',
  key: 'MinWidth'
}
export default MinWidth
