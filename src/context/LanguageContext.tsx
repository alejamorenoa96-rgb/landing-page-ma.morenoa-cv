import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Lang } from '../content/i18n'
import { LanguageContext } from './language-context'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = content[lang]
  const value = useMemo(
    () => ({
      lang,
      t,
      toggleLang,
    }),
    [lang, t, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
