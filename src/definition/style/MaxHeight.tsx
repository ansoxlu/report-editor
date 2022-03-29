import { StyleDefinition } from './types'
import utils from './utils'
import { SizeInputStyle, SizeInputValue } from './components/SizeInputStyle'

const MaxHeight: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render(value: SizeInputValue) {
    const size = value.unit === 'px' ? utils.rem(value.size) : `${value.size}${value.unit}`
    return { maxHeight: value.size ? size : 'none' }
  },
  title: '最大高',
  description: '',
  key: 'MaxHeight',
}
export default MaxHeight
