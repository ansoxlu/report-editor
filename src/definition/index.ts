import { createStyle } from './styles/utils'
import { ContentDefinition } from './content/types'
import { LayoutDefinition } from './layout/types'
import { StyleDefinition } from './styles/types'
import Text from './content/text'
import Many from './layout/many'
import FlexDirection from './styles/flex-direction'
import FlexGrow from './styles/flex-grow'
import JustifyContent from './styles/justify-content'
import AlignItems from './styles/align-items'
import FontSize from './styles/font-size'
import FontWeight from './styles/font-weight'
import TextIndent from './styles/text-indent'
import LetterSpacing from './styles/letter-spacing'
import MinWidth from './styles/min-width'
import Color from './styles/color'
import Ellipsis from './styles/ellipsis'
import MinHeight from './styles/min-height'
import MaxHeight from './styles/max-height'
import MaxWidth from './styles/max-width'
import Padding from './styles/padding'
import Border from './styles/border'

export const PAPER_SIZES = [
  {
    title: 'A5',
    width: 148,
    height: 210
  },
  {
    title: 'A4',
    width: 210,
    height: 297
  }
]

export const STYLE_DEFINITIONS: StyleDefinition<any>[] = [
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
  Border
]

export const DEFAULT_TEMPLATE_STYLES = [
  FontSize,
  FontWeight,
  Ellipsis,
  Color
].map(it => createStyle(it))

export const CONTENT_DEFINITIONS: ContentDefinition<any, any>[] = [
  Text
]

export const LAYOUT_DEFINITIONS: LayoutDefinition[] = [
  Many
]
