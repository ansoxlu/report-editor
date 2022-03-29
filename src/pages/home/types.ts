import { ReactElement } from 'react'

export interface Menu {
  key: string
  title: string
  description: string
  Element: () => ReactElement
}
