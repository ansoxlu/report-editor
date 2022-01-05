import { Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MinWidth: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  title: '最小宽',
  describe: '',
  key: 'MinWidth'
}
export default MinWidth
