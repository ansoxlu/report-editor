import { StyleDefinition } from './types'
import { rem } from './utils'
import { SizeInputStyle, SizeInputValue } from './components/size-input-style'

const MaxHeight: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render (value: SizeInputValue) {
    return { maxHeight: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'none' }
  },
  title: '最大高',
  description: '',
  key: 'MaxHeight'
}
export default MaxHeight
