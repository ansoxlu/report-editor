import { StyleDefinition } from './types'
import { rem } from './utils'
import { SizeInputStyle, SizeInputValue } from './components/size-input-style'

const MaxWidth: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render (value: SizeInputValue) {
    return { maxWidth: value.size ? (value.unit === 'px' ? rem(value.size) : `${value.size}${value.unit}`) : 'none' }
  },
  title: '最大宽',
  description: '',
  key: 'MaxWidth'
}
export default MaxWidth
