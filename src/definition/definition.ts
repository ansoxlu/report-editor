import styleUtils from './style/style-utils'
import { ContentDefinition } from './content/types'
import { LayoutDefinition } from './layout/types'
import { StyleDefinition } from './style/types'
import Text from './content/Text'
import Many from './layout/Many'
import FontSize from './style/FontSize'
import FontWeight from './style/FontWeight'
import TextIndent from './style/TextIndent'
import LetterSpacing from './style/LetterSpacing'
import Color from './style/Color'
import Padding from './style/Padding'
import Border from './style/Border'
import PageLine from './content/PageLine'
import Single from './layout/Single'
import Direction from './style/Direction'
import WidthHeight from './style/WidthHeight'

const styles: StyleDefinition<any>[] = [
  FontSize,
  FontWeight,
  TextIndent,
  LetterSpacing,
  Color,
  WidthHeight,
  Direction,
  Padding,
  Border,
]

const pageStyles = [
  FontSize,
  FontWeight,
  Color,
].map((it) => styleUtils.createStyle(styles, it))

const contents: ContentDefinition<any, any>[] = [
  Text, PageLine,
]

const layouts: LayoutDefinition[] = [
  Many, Single,
]

const paperSizes = [
  {
    title: 'A5',
    width: 148,
    height: 210,
  },
  {
    title: 'A4',
    width: 210,
    height: 297,
  },
]

export default {
  paperSizes,
  layouts,
  contents,
  pageStyles,
  styles,
}
