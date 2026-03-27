import { contactActions, projectConfig } from "../config/projectConfig";

function ContactStickyBar() {
  return (
    <>
      <div className="sticky-contact">
        <div className="section-shell sticky-contact__inner">
          <p>
            <strong>{projectConfig.branding.shortName}</strong> | Asesor: {projectConfig.contact.contactName}
          </p>
          <div className="sticky-contact__actions">
            <a href={contactActions.phoneHref} className="btn btn-ghost">
              Llamada inmediata
            </a>
            <a href={contactActions.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-secondary">
              WhatsApp
            </a>
            <a href="#contacto" className="btn btn-primary">
              Solicitar información
            </a>
          </div>
        </div>
      </div>

      <a
        href={contactActions.whatsappHref}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversación en WhatsApp"
      >
        WA
      </a>
    </>
  );
}

export default ContactStickyBar;
