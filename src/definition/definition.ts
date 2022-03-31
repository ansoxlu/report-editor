import styleUtils from './style/style-utils'
import { ContentDefinition } from './content/types'
import { LayoutDefinition } from './layout/types'
import { StyleDefinition } from './style/types'
import Text from './content/text'
import Many from './layout/many'
import FlexDirection from './style/FlexDirection'
import FlexGrow from './style/FlexGrow'
import JustifyContent from './style/JustifyContent'
import AlignItems from './style/AlignItems'
import FontSize from './style/FontSize'
import FontWeight from './style/FontWeight'
import TextIndent from './style/TextIndent'
import LetterSpacing from './style/LetterSpacing'
import MinWidth from './style/MinWidth'
import Color from './style/Color'
import Ellipsis from './style/Ellipsis'
import MinHeight from './style/MinHeight'
import MaxHeight from './style/MaxHeight'
import MaxWidth from './style/MaxWidth'
import Padding from './style/Padding'
import Border from './style/Border'

const styles: StyleDefinition<any>[] = [
  FlexDirection,
  JustifyContent,
  AlignItems,
  FlexGrow,
  FontSize,
  FontWeight,
  TextIndent,
  LetterSpacing,
  Color,
  Ellipsis,
  MinHeight,
  MinWidth,
  MaxHeight,
  MaxWidth,
  Padding,
  Border,
]

const pageStyles = [
  FontSize,
  FontWeight,
  Ellipsis,
  Color,
].map((it) => styleUtils.createStyle(styles, it))

const contents: ContentDefinition<any, any>[] = [
  Text,
]

const layouts: LayoutDefinition[] = [
  Many,
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
