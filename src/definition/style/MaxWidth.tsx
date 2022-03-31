import { StyleDefinition } from './types'
import utils from './style-utils'
import { SizeInputStyle, SizeInputValue } from './components/SizeInputStyle'

const MaxWidth: StyleDefinition<SizeInputValue> = {
  ...SizeInputStyle,
  render(value: SizeInputValue) {
    const size = value.unit === 'px' ? utils.rem(value.size) : `${value.size}${value.unit}`
    return { maxWidth: value.size ? size : 'none' }
  },
  title: '最大宽',
  description: '',
  key: 'MaxWidth',
}
export default MaxWidth
