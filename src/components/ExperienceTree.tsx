import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  experienceContent,
  type Milestone,
  type MilestoneDetail,
} from '../content/experience'
import { useLanguage } from '../context/useLanguage'
import './ExperienceTree.css'

function SixBoxVisual() {
  return (
    <div className="sixbox" aria-hidden="true">
      <div className="sixbox__col">
        <p className="sixbox__label">9-box</p>
        <div className="sixbox__grid sixbox__grid--9">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
      <span className="sixbox__arrow">→</span>
      <div className="sixbox__col">
        <p className="sixbox__label">6-box</p>
        <div className="sixbox__grid sixbox__grid--6">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className={i >= 3 ? 'is-accent' : undefined} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TalentReviewsVisual({ prepSteps, prepTitle }: { prepSteps: string[]; prepTitle: string }) {
  return (
    <div className="tr-visual">
      <SixBoxVisual />
      <div className="tr-visual__prep">
        <p className="tr-visual__prep-title">{prepTitle}</p>
        <ol className="tr-visual__steps">
          {prepSteps.map((step, index) => (
            <li key={step}>
              <span className="tr-visual__step-num">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function MilestoneDetailPanel({
  title,
  detail,
  closeLabel,
  prepTitle,
  onClose,
}: {
  title: string
  detail: MilestoneDetail
  closeLabel: string
  prepTitle: string
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="milestone-modal" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="milestone-modal__backdrop" aria-label={closeLabel} onClick={onClose} />
      <div className="milestone-modal__panel">
        <div className="milestone-modal__bar">
          <p>{title}</p>
          <button type="button" className="milestone-modal__close" onClick={onClose}>
            {closeLabel}
          </button>
        </div>

        <div className="milestone-modal__body">
          {detail.metric ? (
            <div className="milestone-modal__metric">
              <p className="milestone-modal__value">{detail.metric}</p>
              {detail.metricLabel ? <p className="milestone-modal__metric-label">{detail.metricLabel}</p> : null}
            </div>
          ) : null}

          {detail.visual === 'talent-reviews' && detail.prepSteps ? (
            <TalentReviewsVisual prepSteps={[...detail.prepSteps]} prepTitle={prepTitle} />
          ) : null}

          {detail.visual === 'sixbox' ? <SixBoxVisual /> : null}

          <p className="milestone-modal__text">{detail.body}</p>
          {detail.story ? <p className="milestone-modal__story">{detail.story}</p> : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}

function MilestoneItem({
  milestone,
  openHint,
  onOpen,
}: {
  milestone: Milestone
  openHint: string
  onOpen: (milestone: Milestone) => void
}) {
  const hasDetail = Boolean(milestone.detail)

  if (!hasDetail) {
    return <li className="exp-tree__hit">{milestone.label}</li>
  }

  return (
    <li className="exp-tree__hit exp-tree__hit--action">
      <button type="button" className="exp-tree__hit-btn" onClick={() => onOpen(milestone)} aria-label={`${openHint}: ${milestone.label}`}>
        <span>{milestone.label}</span>
        <span className="exp-tree__hit-cue" aria-hidden="true">
          →
        </span>
      </button>
    </li>
  )
}

export function ExperienceTree() {
  const { lang } = useLanguage()
  const copy = experienceContent[lang]
  const [active, setActive] = useState<Milestone | null>(null)
  const [openCompanies, setOpenCompanies] = useState<Record<string, boolean>>({})
  const [openRoles, setOpenRoles] = useState<Record<string, boolean>>({})

  const toggleCompany = (companyId: string) => {
    setOpenCompanies((prev) => ({ ...prev, [companyId]: !prev[companyId] }))
  }

  const toggleRole = (companyId: string, roleId: string) => {
    const key = `${companyId}:${roleId}`
    setOpenRoles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="exp-tree">
      <ol className="exp-tree__companies">
        {copy.companies.map((company) => {
          const companyOpen = Boolean(openCompanies[company.id])

          return (
            <li key={company.id} className={`exp-tree__company${companyOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="exp-tree__company-node"
                aria-expanded={companyOpen}
                onClick={() => toggleCompany(company.id)}
              >
                <span className="exp-tree__company-dot" aria-hidden="true" />
                <span className="exp-tree__company-label">
                  <strong className="exp-tree__company-name">{company.name}</strong>
                  <span className="exp-tree__company-years">{company.years}</span>
                </span>
              </button>

              {companyOpen ? (
                <ol className="exp-tree__roles">
                  {company.roles.map((role) => {
                    const roleKey = `${company.id}:${role.id}`
                    const isOpen = Boolean(openRoles[roleKey])

                    return (
                      <li key={role.id} className={`exp-tree__role${isOpen ? ' is-open' : ''}`}>
                        <button
                          type="button"
                          className="exp-tree__role-node"
                          aria-expanded={isOpen}
                          onClick={() => toggleRole(company.id, role.id)}
                        >
                          <span className="exp-tree__role-dot" aria-hidden="true" />
                          <span className="exp-tree__role-label">
                            <strong className="exp-tree__role-title">{role.title}</strong>
                            <span className="exp-tree__role-dates">{role.dates}</span>
                          </span>
                        </button>

                        {isOpen ? (
                          <ul className="exp-tree__hits">
                            {role.milestones.map((milestone) => (
                              <MilestoneItem
                                key={milestone.id}
                                milestone={milestone}
                                openHint={copy.openHint}
                                onOpen={setActive}
                              />
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    )
                  })}
                </ol>
              ) : null}
            </li>
          )
        })}
      </ol>

      {active?.detail ? (
        <MilestoneDetailPanel
          title={active.label}
          detail={active.detail}
          closeLabel={copy.close}
          prepTitle={copy.prepTitle}
          onClose={() => setActive(null)}
        />
      ) : null}
    </div>
  )
}
