export type ExperienceFocusTarget = {
  companyId: string
  roleId: string
  milestoneId: string
}

export const EXPERIENCE_FOCUS_EVENT = 'open-experience-milestone'

export const metricFocusTargets: Record<string, ExperienceFocusTarget> = {
  'inside-out': { companyId: 'ubits', roleId: 'tm-sr', milestoneId: 'inside-out' },
  idps: { companyId: 'ubits', roleId: 'tm-sr', milestoneId: 'idps' },
  'talent-reviews': { companyId: 'ubits', roleId: 'tm-sr', milestoneId: 'talent-reviews' },
  'supply-trainee': { companyId: 'bavaria', roleId: 'pca', milestoneId: 'supply-trainee' },
}

export function requestExperienceFocus(targetKey: string) {
  const target = metricFocusTargets[targetKey]
  if (!target) return

  window.dispatchEvent(new CustomEvent<ExperienceFocusTarget>(EXPERIENCE_FOCUS_EVENT, { detail: target }))
}
