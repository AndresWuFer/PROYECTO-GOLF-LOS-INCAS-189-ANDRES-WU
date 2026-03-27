import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";
import { ctaClassByVariant } from "./ctaUtils";

function LocationSection() {
  return (
    <section id="ubicacion" className="section location">
      <div className="section-shell location__layout">
        <div className="location__content">
          <SectionIntro
            kicker="Ubicación"
            title={projectConfig.locationSection.title}
            description={projectConfig.locationSection.text}
          />

          <ul className="location__points">
            {projectConfig.location.nearbyPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="location__ctas">
            {projectConfig.locationSection.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={ctaClassByVariant(cta.variant, cta.variant === "secondary")}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noreferrer" : undefined}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div className="location__media reveal-up">
          <div className="location__map">
            <iframe
              title="Mapa de Golf Los Incas en Surco"
              src={projectConfig.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <img src={projectConfig.locationSection.image} alt="Ubicación de Golf Los Incas en Surco" />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
