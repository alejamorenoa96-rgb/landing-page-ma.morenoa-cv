import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { AnabionDeepDive } from './AnabionDeepDive'
import { InditexDeepDive } from './InditexDeepDive'
import { SuntoryDeepDive } from './SuntoryDeepDive'
import './Impact.css'

const wordmarkIds = new Set(['inditex', 'anabion', 'suntory', 'ubits', 'bavaria'])

function Wordmark({ id }: { id: string }) {
  if (id === 'suntory') {
    return (
      <span className="wordmark wordmark--suntory">
        SUNTORY
        <small>Beverage &amp; Food</small>
      </span>
    )
  }

  if (id === 'bavaria') {
    return <span className="wordmark wordmark--bavaria">AB INBEV - BAVARIA</span>
  }

  if (id === 'anabion') {
    return <span className="wordmark wordmark--anabion">ANABION</span>
  }

  if (id === 'ubits') {
    return <span className="wordmark wordmark--ubits">UBITS</span>
  }

  return <span className="wordmark wordmark--inditex">INDITEX</span>
}

type TimelineItem = {
  id: string
  name: string
  meta: string
}

export function Impact() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<string>(t.impact.timeline[0].id)
  const [selected, setSelected] = useState<string | null>('inditex')

  const companies = t.impact.timeline.flatMap((chapter) => [...chapter.items]) as TimelineItem[]
  const active = companies.find((item) => item.id === selected)

  return (
    <section className="impact" id="impact">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">{t.impact.eyebrow}</p>
          <h2 className="section-title">{t.impact.title}</h2>
          <p className="impact__subtitle">{t.impact.subtitle}</p>
        </div>

        <ol className="timeline">
          {t.impact.timeline.map((chapter) => {
            const isOpen = openId === chapter.id

            return (
              <li key={chapter.id} className={`timeline__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="timeline__node"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenId(isOpen ? '' : chapter.id)
                    if (!isOpen) setSelected(null)
                  }}
                >
                  <span className="timeline__dot" aria-hidden="true" />
                  <span className="timeline__label">
                    <strong>{chapter.title}</strong>
                    <span>({chapter.years})</span>
                  </span>
                </button>

                {isOpen ? (
                  <div className="timeline__body">
                    <div className="impact__tiles">
                      {chapter.items.map((item) => {
                        const hasWordmark = wordmarkIds.has(item.id)
                        return (
                          <button
                            key={item.id}
                            type="button"
                            className={`impact__tile${hasWordmark ? ' impact__tile--logo' : ''}${selected === item.id ? ' is-active' : ''}`}
                            onClick={() => setSelected(item.id)}
                          >
                            {hasWordmark ? (
                              <Wordmark id={item.id} />
                            ) : (
                              <span className="impact__tile-name">{item.name}</span>
                            )}
                            <span className="impact__tile-meta">{item.meta}</span>
                          </button>
                        )
                      })}
                    </div>

                    {active && chapter.items.some((item) => item.id === selected) ? (
                      <div className="impact__panel" aria-live="polite">
                        {active.id === 'inditex' ? (
                          <InditexDeepDive />
                        ) : active.id === 'anabion' ? (
                          <AnabionDeepDive />
                        ) : active.id === 'suntory' ? (
                          <SuntoryDeepDive />
                        ) : (
                          <>
                            <p className="impact__panel-kicker">{active.name}</p>
                            <p>{t.impact.placeholder}</p>
                          </>
                        )}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
