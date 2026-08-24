import { useLanguage } from '../context/useLanguage'
import './Footer.css'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p className="footer__copy">{t.footer.copyright}</p>
    </footer>
  )
}
