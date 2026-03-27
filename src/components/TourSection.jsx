import { useMemo, useState } from "react";
import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";
import { ctaClassByVariant } from "./ctaUtils";

function TourSection() {
  const slides = projectConfig.tour.gallerySlides;
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = useMemo(() => slides[activeSlide], [activeSlide, slides]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="recorrido" className="section tour">
      <div className="section-shell">
        <SectionIntro
          kicker="Recorrido del proyecto"
          title={projectConfig.tour.title}
          description={projectConfig.tour.description}
          light
        />

        <div className="tour__layout reveal-up">
          <article className="tour__video-frame">
            {projectConfig.tour.videoEmbedUrl ? (
              <iframe
                src={projectConfig.tour.videoEmbedUrl}
                title="Recorrido virtual del proyecto Golf Los Incas"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="tour__video-placeholder"
                role="img"
                aria-label="Espacio para incrustar video del recorrido"
                style={{ backgroundImage: `url(${projectConfig.tour.placeholderImage})` }}
              >
                <div className="tour__video-copy">
                  <strong>Video referencial del proyecto</strong>
                  <p>Muy pronto podrás visualizar aquí el recorrido audiovisual completo.</p>
                </div>
              </div>
            )}
          </article>

          <aside className="tour__slider">
            <figure>
              <img src={currentSlide.image} alt={currentSlide.title} />
              <figcaption>
                <h3>{currentSlide.title}</h3>
                <p>{currentSlide.caption}</p>
              </figcaption>
            </figure>
            <div className="tour__slider-actions">
              <button type="button" onClick={prevSlide} aria-label="Imagen anterior">
                Anterior
              </button>
              <button type="button" onClick={nextSlide} aria-label="Imagen siguiente">
                Siguiente
              </button>
            </div>
          </aside>
        </div>

        <div className="tour__ctas">
          {projectConfig.tour.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className={ctaClassByVariant(cta.variant)}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourSection;
