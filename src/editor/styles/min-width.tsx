import { rem, Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MinWidth: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  render (value: SizeInputValue) {
    return { minWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'auto' }
  },
  title: '最小宽',
  describe: '',
  key: 'MinWidth'
}
export default MinWidth
