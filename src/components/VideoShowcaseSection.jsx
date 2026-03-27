import { useMemo, useState } from "react";
import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";
import { ctaClassByVariant } from "./ctaUtils";

function VideoShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectConfig.videoShowcase.imageSlides.length;

  const currentImage = useMemo(
    () => projectConfig.videoShowcase.imageSlides[activeIndex],
    [activeIndex]
  );

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section className="section video-showcase">
      <div className="section-shell">
        <SectionIntro
          kicker={projectConfig.videoShowcase.kicker}
          title={projectConfig.videoShowcase.title}
          description={projectConfig.videoShowcase.description}
          center
        />

        <div className="video-showcase__layout reveal-up">
          <article className="video-showcase__card">
            {projectConfig.videoShowcase.videoEmbedUrl ? (
              <iframe
                src={projectConfig.videoShowcase.videoEmbedUrl}
                title="Video del proyecto Golf Los Incas"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="video-showcase__placeholder"
                role="img"
                aria-label="Espacio para video principal del proyecto"
                style={{ backgroundImage: `url(${projectConfig.videoShowcase.videoPlaceholder})` }}
              >
                <button type="button" className="video-showcase__play" aria-label="Reproducir video referencial">
                  ▶
                </button>
              </div>
            )}
            <p>Placeholder listo para video final o recorrido virtual del proyecto.</p>
          </article>

          <aside className="video-showcase__card">
            <img src={currentImage} alt={`Vista del proyecto ${activeIndex + 1}`} loading="lazy" />
            <div className="video-showcase__controls">
              <button type="button" onClick={goPrev}>
                Anterior
              </button>
              <strong>
                {activeIndex + 1}/{total}
              </strong>
              <button type="button" onClick={goNext}>
                Siguiente
              </button>
            </div>
          </aside>
        </div>

        <div className="video-showcase__ctas">
          {projectConfig.videoShowcase.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className={ctaClassByVariant(cta.variant, cta.variant === "secondary")}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcaseSection;
