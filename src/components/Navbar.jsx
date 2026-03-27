import { useEffect, useState } from "react";
import { contactActions, projectConfig } from "../config/projectConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 920) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="navbar">
      <div className="section-shell navbar__inner">
        <a href="#inicio" className="navbar__brand" aria-label="Ir al inicio de Golf Los Incas">
          <strong>{projectConfig.branding.shortName}</strong>
          <span>{projectConfig.branding.label}</span>
        </a>

        <button
          type="button"
          className={`navbar__menu-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${isOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {projectConfig.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a className="btn btn-secondary" href={contactActions.phoneHref}>
            Llamar ahora
          </a>
          <a className="btn btn-primary" href={contactActions.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
