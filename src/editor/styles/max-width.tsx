import { rem, Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MaxWidth: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  render (value: SizeInputValue) {
    return { maxWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'none' }
  },
  title: '最大宽',
  describe: '',
  key: 'MaxWidth'
}
export default MaxWidth
