import { useState } from "react";
import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = projectConfig.gallery.items[activeIndex];

  return (
    <section id="galeria" className="section gallery">
      <div className="section-shell">
        <SectionIntro
          kicker="Galería"
          title={projectConfig.gallery.title}
          description={projectConfig.gallery.description}
        />

        <div className="gallery__layout reveal-up">
          <article className="gallery__featured">
            <img src={activeItem.src} alt={activeItem.alt} />
          </article>

          <div className="gallery__thumbs" role="tablist" aria-label="Galería del proyecto">
            {projectConfig.gallery.items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
