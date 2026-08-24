import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/useLanguage'
import './ProjectDeepDive.css'

const BUBBLE_SRC = '/impact/suntory-bubble.jpg'

const SLIDES = [
  '/impact/suntory/01-challenges.png',
  '/impact/suntory/02-solutions.png',
  '/impact/suntory/03-frictionless.png',
  '/impact/suntory/04-legacy.png',
] as const

export function SuntoryDeepDive() {
  const { t } = useLanguage()
  const detail = t.impact.details.suntory
  const [expanded, setExpanded] = useState(false)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (!expanded) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
      if (event.key === 'ArrowRight') setSlide((i) => (i + 1) % SLIDES.length)
      if (event.key === 'ArrowLeft') setSlide((i) => (i - 1 + SLIDES.length) % SLIDES.length)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [expanded])

  const openExpanded = () => {
    setSlide(0)
    setExpanded(true)
  }

  return (
    <article className="project-dive">
      <div className="project-dive__media">
        <button
          type="button"
          className="project-dive__bubble project-dive__bubble--photo"
          onClick={openExpanded}
          aria-label={detail.expand}
        >
          <img
            className="project-dive__photo"
            src={BUBBLE_SRC}
            alt=""
            width={440}
            height={440}
          />
        </button>

        <button type="button" className="project-dive__expand" onClick={openExpanded} aria-label={detail.expand}>
          {detail.expand}
        </button>
      </div>

      <div className="project-dive__copy">
        <p className="project-dive__eyebrow">{detail.eyebrow}</p>
        <h3 className="project-dive__title">{detail.title}</h3>
        <p>{detail.challenge}</p>
        <p>{detail.solution}</p>
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
              <div className="project-lightbox__panel project-lightbox__panel--slides">
                <div className="project-lightbox__bar">
                  <p>
                    {detail.slides[slide]} · {slide + 1}/{SLIDES.length}
                  </p>
                  <button type="button" className="project-lightbox__close" onClick={() => setExpanded(false)}>
                    {detail.close}
                  </button>
                </div>

                <div className="project-lightbox__carousel">
                  <button
                    type="button"
                    className="project-lightbox__nav project-lightbox__nav--prev"
                    onClick={() => setSlide((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
                    aria-label={detail.prev}
                  >
                    ‹
                  </button>

                  <img
                    className="project-lightbox__slide"
                    src={SLIDES[slide]}
                    alt={detail.slides[slide]}
                  />

                  <button
                    type="button"
                    className="project-lightbox__nav project-lightbox__nav--next"
                    onClick={() => setSlide((i) => (i + 1) % SLIDES.length)}
                    aria-label={detail.next}
                  >
                    ›
                  </button>
                </div>

                <div className="project-lightbox__dots" role="tablist" aria-label={detail.title}>
                  {SLIDES.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      role="tab"
                      aria-selected={index === slide}
                      className={`project-lightbox__dot${index === slide ? ' is-active' : ''}`}
                      onClick={() => setSlide(index)}
                      aria-label={detail.slides[index]}
                    />
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  )
}
