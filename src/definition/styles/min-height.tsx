import { StyleDefinition } from './types'
import { rem } from './utils'
import { SizeInputStyle, SizeInputValue } from './components/size-input-style'

const MinHeight: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render (value: SizeInputValue) {
    return { minHeight: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'auto' }
  },
  title: '最小高',
  description: '',
  key: 'MinHeight'
}
export default MinHeight
