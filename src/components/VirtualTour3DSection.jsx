import SectionIntro from "./SectionIntro";
import { contactActions, projectConfig } from "../config/projectConfig";
import { ctaClassByVariant } from "./ctaUtils";

function VirtualTour3DSection() {
  return (
    <section id="tour-3d" className="section virtual-tour">
      <div className="section-shell virtual-tour__layout">
        <div className="virtual-tour__content">
          <SectionIntro
            kicker="Tour inmersivo"
            title={projectConfig.virtualTour3D.title}
            description={projectConfig.virtualTour3D.description}
          />

          <ul className="virtual-tour__list">
            {projectConfig.virtualTour3D.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="virtual-tour__ctas">
            {projectConfig.virtualTour3D.ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={ctaClassByVariant(cta.variant, true)}>
                {cta.label}
              </a>
            ))}
            <a className="btn btn-secondary is-light" href={contactActions.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp inmediato
            </a>
          </div>
        </div>

        <div className="virtual-tour__embed reveal-up">
          {projectConfig.virtualTour3D.embedUrl ? (
            <iframe
              title="Recorrido virtual 3D Golf Los Incas"
              src={projectConfig.virtualTour3D.embedUrl}
              loading="lazy"
              allowFullScreen
            />
          ) : (
            <div
              className="virtual-tour__placeholder"
              role="img"
              aria-label="Espacio para recorrido virtual 3D del proyecto"
              style={{ backgroundImage: `url(${projectConfig.virtualTour3D.placeholderImage})` }}
            >
              <div className="virtual-tour__placeholder-copy">
                <strong>Espacio para tour virtual 3D</strong>
                <p>
                  Agrega tu URL en <code>projectConfig.virtualTour3D.embedUrl</code> para publicar el
                  recorrido inmersivo.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VirtualTour3DSection;
