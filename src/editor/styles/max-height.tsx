import { Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MaxHeight: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  title: '最大高',
  describe: '',
  key: 'MaxHeight'
}
export default MaxHeight
