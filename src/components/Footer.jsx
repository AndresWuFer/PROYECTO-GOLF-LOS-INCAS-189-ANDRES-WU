import { contactActions, projectConfig } from "../config/projectConfig";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__top">
        <div className="footer__brand">
          <p className="footer__name">{projectConfig.branding.fullName}</p>
          <p>{projectConfig.contact.projectAddress}</p>
          <p>
            <strong>Asesor:</strong> {projectConfig.contact.contactName}
          </p>
          <p>
            <a href={contactActions.phoneHref}>{contactActions.formattedPhone}</a>
            {" · "}
            <a href={`mailto:${projectConfig.contact.contactEmail}`}>
              {projectConfig.contact.contactEmail}
            </a>
          </p>
          <a className="btn btn-primary footer__wa-btn" href={contactActions.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <nav className="footer__links" aria-label="Enlaces rápidos">
          <h3>Enlaces rápidos</h3>
          {projectConfig.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <h3>Redes sociales</h3>
          <div className="footer__social-items">
            {projectConfig.footer.socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {link.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell footer__bottom">
        <p>{projectConfig.footer.privacyText}</p>
        <p>© {new Date().getFullYear()} {projectConfig.branding.shortName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
