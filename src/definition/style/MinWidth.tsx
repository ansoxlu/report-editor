import { StyleDefinition } from './types'
import { SizeInputStyle, SizeInputValue } from './components/SizeInputStyle'
import utils from './utils'

const MinWidth: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render(value: SizeInputValue) {
    const size = value.unit === 'px' ? utils.rem(value.size) : `${value.size}${value.unit}`
    return { minWidth: value.size ? size : 'auto' }
  },
  title: '最小宽',
  description: '',
  key: 'MinWidth',
}
export default MinWidth
