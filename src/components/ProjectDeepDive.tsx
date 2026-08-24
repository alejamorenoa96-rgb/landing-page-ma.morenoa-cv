import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import './ProjectDeepDive.css'

export type ProjectDeepDiveDetail = {
  eyebrow: string
  title: string
  challenge: string
  solution: string
  outcome?: string
  play: string
  pause: string
  expand: string
  close: string
}

type ProjectDeepDiveProps = {
  detail: ProjectDeepDiveDetail
  videoSrc: string
  posterSrc: string
}

export function ProjectDeepDive({ detail, videoSrc, posterSrc }: ProjectDeepDiveProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const expandedRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 2
  }, [])

  useEffect(() => {
    if (!expanded) return

    const bubble = videoRef.current
    const large = expandedRef.current
    if (!large) return

    const wasPlaying = bubble ? !bubble.paused : false
    const time = bubble?.currentTime ?? 0

    if (bubble && !bubble.paused) bubble.pause()

    large.currentTime = time
    large.playbackRate = 2

    if (wasPlaying) {
      void large.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeExpanded()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [expanded])

  const togglePlay = async () => {
    const video = expanded ? expandedRef.current : videoRef.current
    if (!video) return

    video.playbackRate = 2

    if (video.paused) {
      try {
        await video.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
      return
    }

    video.pause()
    setPlaying(false)
  }

  const openExpanded = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setExpanded(true)
  }

  const closeExpanded = () => {
    const bubble = videoRef.current
    const large = expandedRef.current
    const time = large?.currentTime ?? bubble?.currentTime ?? 0
    const wasPlaying = large ? !large.paused : false

    if (large && !large.paused) large.pause()

    if (bubble) {
      bubble.currentTime = time
      bubble.playbackRate = 2
      if (wasPlaying) {
        void bubble.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      } else {
        setPlaying(false)
      }
    }

    setExpanded(false)
  }

  return (
    <article className="project-dive">
      <div className="project-dive__media">
        <button
          type="button"
          className={`project-dive__bubble${playing && !expanded ? ' is-playing' : ''}`}
          onClick={togglePlay}
          aria-label={playing ? detail.pause : detail.play}
        >
          <video
            ref={videoRef}
            className="project-dive__video"
            src={videoSrc}
            poster={posterSrc}
            playsInline
            preload="metadata"
            onEnded={() => setPlaying(false)}
          />
          {!playing || expanded ? (
            <span className="project-dive__play" aria-hidden="true">
              <span className="project-dive__play-icon" />
            </span>
          ) : null}
          <span className="project-dive__caption">{playing && !expanded ? detail.pause : detail.play}</span>
        </button>

        <button type="button" className="project-dive__expand" onClick={openExpanded} aria-label={detail.expand}>
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
                onClick={closeExpanded}
              />
              <div className="project-lightbox__panel">
                <div className="project-lightbox__bar">
                  <p>{detail.title}</p>
                  <button type="button" className="project-lightbox__close" onClick={closeExpanded}>
                    {detail.close}
                  </button>
                </div>
                <button
                  type="button"
                  className="project-lightbox__stage"
                  onClick={togglePlay}
                  aria-label={playing ? detail.pause : detail.play}
                >
                  <video
                    ref={expandedRef}
                    className="project-lightbox__video"
                    src={videoSrc}
                    poster={posterSrc}
                    playsInline
                    preload="auto"
                    onEnded={() => setPlaying(false)}
                  />
                  {!playing ? (
                    <span className="project-dive__play" aria-hidden="true">
                      <span className="project-dive__play-icon" />
                    </span>
                  ) : null}
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  )
}
