import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/useLanguage'
import './ProjectDeepDive.css'

const POSTER_SRC = '/impact/inditex-poster.jpg'

export function InditexDeepDive() {
  const { t } = useLanguage()
  const detail = t.impact.details.inditex
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [expanded])

  return (
    <article className="project-dive">
      <div className="project-dive__media">
        <button
          type="button"
          className="project-dive__bubble project-dive__bubble--photo"
          onClick={() => setExpanded(true)}
          aria-label={detail.expand}
        >
          <img
            className="project-dive__photo"
            src={POSTER_SRC}
            alt={detail.title}
            width={440}
            height={440}
          />
        </button>

        <button type="button" className="project-dive__expand" onClick={() => setExpanded(true)} aria-label={detail.expand}>
          {detail.expand}
        </button>
      </div>

      <div className="project-dive__copy">
        {detail.eyebrow ? <p className="project-dive__eyebrow">{detail.eyebrow}</p> : null}
        <h3 className="project-dive__title">{detail.title}</h3>
        <p>{detail.challenge}</p>
        <p>{detail.solution}</p>
        {detail.outcome ? <p className="project-dive__outcome">{detail.outcome}</p> : null}
      </div>

      {expanded
        ? createPortal(
            <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={detail.title}>
              <button
                type="button"
                className="project-lightbox__backdrop"
                aria-label={detail.close}
                onClick={() => setExpanded(false)}
              />
              <div className="project-lightbox__panel">
                <div className="project-lightbox__bar">
                  <p>{detail.title}</p>
                  <button type="button" className="project-lightbox__close" onClick={() => setExpanded(false)}>
                    {detail.close}
                  </button>
                </div>
                <img className="project-lightbox__slide" src={POSTER_SRC} alt={detail.title} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  )
}
