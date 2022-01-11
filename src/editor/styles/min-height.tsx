import { rem, Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MinHeight: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  render (value: SizeInputValue) {
    return { minHeight: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'auto' }
  },
  title: '最小高',
  describe: '',
  key: 'MinHeight'
}
export default MinHeight
