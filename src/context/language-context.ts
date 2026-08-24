import { createContext } from 'react'
import { content, type Lang } from '../content/i18n'

export type LanguageContextValue = {
  lang: Lang
  t: (typeof content)[Lang]
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
