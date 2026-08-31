import { useEffect, useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import {
  EXPERIENCE_FOCUS_EVENT,
  type ExperienceFocusTarget,
} from '../content/metricTargets'
import { AnabionDeepDive } from './AnabionDeepDive'
import { ExperienceTree } from './ExperienceTree'
import { InditexDeepDive } from './InditexDeepDive'
import { SuntoryDeepDive } from './SuntoryDeepDive'
import './Impact.css'

const wordmarkIds = new Set(['inditex', 'anabion', 'suntory'])

function Wordmark({ id }: { id: string }) {
  if (id === 'suntory') {
    return (
      <span className="wordmark wordmark--suntory">
        SUNTORY
        <small>Beverage &amp; Food</small>
      </span>
    )
  }

  if (id === 'anabion') {
    return <span className="wordmark wordmark--anabion">ANABION</span>
  }

  return <span className="wordmark wordmark--inditex">INDITEX</span>
}

function ExpandChevron({ className = '' }: { className?: string }) {
  return (
    <span className={`expand-chevron ${className}`.trim()} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  )
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
  const [focusTarget, setFocusTarget] = useState<ExperienceFocusTarget | null>(null)

  useEffect(() => {
    const onFocus = (event: Event) => {
      const detail = (event as CustomEvent<ExperienceFocusTarget>).detail
      setOpenId('experience')
      setFocusTarget(detail)
    }

    window.addEventListener(EXPERIENCE_FOCUS_EVENT, onFocus)
    return () => window.removeEventListener(EXPERIENCE_FOCUS_EVENT, onFocus)
  }, [])

  const consultingItems = t.impact.timeline.find((chapter) => chapter.id === 'consulting')?.items ?? []
  const companies = consultingItems as TimelineItem[]
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
            const isExperience = chapter.id === 'experience'

            return (
              <li key={chapter.id} className={`timeline__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="timeline__node"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenId(isOpen ? '' : chapter.id)
                    if (!isOpen && !isExperience) setSelected(null)
                  }}
                >
                  <span className="timeline__dot" aria-hidden="true" />
                  <span className="timeline__label">
                    <strong>{chapter.title}</strong>
                    <span>({chapter.years})</span>
                  </span>
                  <span className="timeline__expand">
                    <span className="timeline__expand-text">
                      {isOpen ? t.impact.collapseHint : t.impact.expandHint}
                    </span>
                    <ExpandChevron className={isOpen ? 'is-open' : ''} />
                  </span>
                </button>

                {isOpen ? (
                  <div className="timeline__body">
                    {isExperience ? (
                      <div className="impact__panel impact__panel--experience" aria-live="polite">
                        <ExperienceTree
                          focusTarget={focusTarget}
                          onFocusHandled={() => setFocusTarget(null)}
                        />
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
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
