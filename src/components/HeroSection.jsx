import { contactActions, projectConfig } from "../config/projectConfig";
import { ctaClassByVariant } from "./ctaUtils";

function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Presentación del proyecto Golf Los Incas"
      style={{ backgroundImage: `url(${projectConfig.hero.backgroundImage})` }}
    >
      <div className="hero__overlay" />
      <div className="section-shell hero__content reveal-up">
        <p className="hero__kicker">{projectConfig.hero.eyebrow}</p>
        <h1>{projectConfig.hero.headline}</h1>
        <p className="hero__subtitle">{projectConfig.hero.subtitle}</p>
        <p className="hero__location">
          <strong>Ubicación:</strong> {projectConfig.location.shortAddress}
        </p>

        <ul className="hero__benefits" aria-label="Beneficios principales">
          {projectConfig.hero.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        <div className="hero__ctas">
          {projectConfig.hero.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className={ctaClassByVariant(cta.variant)}>
              {cta.label}
            </a>
          ))}
        </div>

        <div className="hero__quick-links">
          <a href={contactActions.phoneHref}>Llamada inmediata</a>
          <a href={contactActions.whatsappHref} target="_blank" rel="noreferrer">
            Chat por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
