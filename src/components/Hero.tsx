import { useLanguage } from '../context/useLanguage'
import './Hero.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__greeting">{t.hero.greeting}</p>
            <h1 className="hero__headline">{t.hero.headline}</h1>
            <p className="hero__subhead">{t.hero.subhead}</p>
            <p className="hero__notes">{t.hero.notes}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#impact">
                {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--text" href="#contact">
                {t.hero.ctaSecondary} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__blob" aria-hidden="true" />
            <div className="hero__photo">
              <img
                src="/portrait.png"
                alt="Maria Alejandra Moreno"
                width={640}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
