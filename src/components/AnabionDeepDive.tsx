import { useLanguage } from '../context/useLanguage'
import { ProjectDeepDive } from './ProjectDeepDive'

export function AnabionDeepDive() {
  const { t } = useLanguage()

  return (
    <ProjectDeepDive
      detail={t.impact.details.anabion}
      videoSrc="/impact/anabion-hub.mp4"
      posterSrc="/impact/anabion-poster.jpg"
    />
  )
}
