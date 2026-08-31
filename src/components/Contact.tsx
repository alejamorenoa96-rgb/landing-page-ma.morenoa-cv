import { contact } from '../content/i18n'
import { useLanguage } from '../context/useLanguage'
import './Contact.css'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="contact__subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact__grid">
          <a className="contact__card" href={contact.phoneHref}>
            <span>{t.contact.phoneLabel}</span>
            <strong>{contact.phone}</strong>
          </a>
          <a className="contact__card" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <span>{t.contact.whatsappLabel}</span>
            <strong>{contact.whatsappDisplay}</strong>
          </a>
          <a className="contact__card" href={contact.emailHref} target="_blank" rel="noopener noreferrer">
            <span>{t.contact.emailLabel}</span>
            <strong>{contact.email}</strong>
          </a>
          <a className="contact__card" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <span>{t.contact.linkedinLabel}</span>
            <strong>ma-alejandra-moreno</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
