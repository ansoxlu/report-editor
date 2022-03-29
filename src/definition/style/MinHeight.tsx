import { StyleDefinition } from './types'
import utils from './utils'
import { SizeInputStyle, SizeInputValue } from './components/SizeInputStyle'

const MinHeight: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render(value: SizeInputValue) {
    const size = value.unit === 'px' ? utils.rem(value.size) : `${value.size}${value.unit}`
    return { minHeight: value.size ? size : 'auto' }
  },
  title: '最小高',
  description: '',
  key: 'MinHeight',
}
export default MinHeight
