import { Style } from './index'
import { BaseSizeInputStyle, SizeInputValue } from './constants'

const MaxWidth: Style<SizeInputValue> = {
  ...BaseSizeInputStyle,
  title: '最大宽',
  describe: '',
  key: 'MaxWidth'
}
export default MaxWidth
