import { useLanguage } from '../context/useLanguage'
import { ProjectDeepDive } from './ProjectDeepDive'

export function InditexDeepDive() {
  const { t } = useLanguage()

  return (
    <ProjectDeepDive
      detail={t.impact.details.inditex}
      videoSrc="/impact/inditex-mvp.mp4"
      posterSrc="/impact/inditex-poster.jpg"
    />
  )
}
