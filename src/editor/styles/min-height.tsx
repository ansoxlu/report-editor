import { Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MinHeight: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  title: '最小高',
  describe: '',
  key: 'MinHeight'
}
export default MinHeight
