import { StyleDefinition } from './types'
import { rem } from './utils'
import { SizeInputStyle, SizeInputValue } from './components/size-input-style'

const MinWidth: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render (value: SizeInputValue) {
    return { minWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'auto' }
  },
  title: '最小宽',
  description: '',
  key: 'MinWidth'
}
export default MinWidth
