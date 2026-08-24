import { useLanguage } from '../context/useLanguage'
import './Metrics.css'

function MetricIcon({ index }: { index: number }) {
  const icons = [
    <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>,
    <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M4 18c3-1.5 5-5 6.5-9.5C12 4 15 3 20 4" strokeLinecap="round" />
      <path d="M16 4h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2L15 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16.5" cy="9" r="2" />
      <path d="M3.5 18c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4M13 18c.4-1.8 1.6-3 3.5-3s3.1 1.2 3.5 3" strokeLinecap="round" />
    </svg>,
  ]
  return icons[index] ?? null
}

export function Metrics() {
  const { t } = useLanguage()

  return (
    <section className="metrics" id="metrics">
      <div className="container">
        <div className="section-head metrics__head">
          <p className="section-eyebrow">{t.metrics.eyebrow}</p>
          <h2 className="section-title">{t.metrics.title}</h2>
        </div>
        <div className="metrics__inner">
          {t.metrics.items.map((item, index) => (
            <article key={`${item.value}-${item.label}`} className="metrics__item">
              <div className="metrics__icon">
                <MetricIcon index={index} />
              </div>
              <div className="metrics__text">
                <p className="metrics__value">{item.value}</p>
                <p className="metrics__label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
