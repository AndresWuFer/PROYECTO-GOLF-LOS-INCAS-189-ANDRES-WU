import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function AmenityVisual({ card }) {
  if (card.image) {
    return <img src={card.image} alt={card.name} loading="lazy" />;
  }

  return (
    <div className={`amenities__concept amenities__concept--${card.visual}`} aria-hidden="true">
      <span>Imagen conceptual</span>
    </div>
  );
}

function AmenitiesSection() {
  return (
    <section id="amenidades" className="section amenities">
      <div className="section-shell">
        <SectionIntro
          kicker={projectConfig.amenities.kicker}
          title={projectConfig.amenities.title}
          description={projectConfig.amenities.description}
          center
        />

        <div className="amenities__grid">
          {projectConfig.amenities.cards.map((card) => (
            <article key={card.id} className="amenities__card reveal-up">
              <figure className="amenities__media">
                <AmenityVisual card={card} />
              </figure>
              <div className="amenities__copy">
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className="amenities__finish">
                  <strong>Acabado principal</strong>
                  <span>{card.finish}</span>
                </div>
                <a className="btn btn-ghost" href="#contacto">
                  Solicitar información de este ambiente
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
