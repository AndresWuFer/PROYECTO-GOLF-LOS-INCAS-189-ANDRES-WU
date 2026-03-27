import { useMemo, useState } from "react";
import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

const editorialClassByIndex = [
  "finishes__card--feature",
  "finishes__card--compact-a",
  "finishes__card--compact-b",
  "finishes__card--wide"
];

function FinishCard({ finish, extraClass = "" }) {
  return (
    <article className={`finishes__card reveal-up ${extraClass}`}>
      <figure className="finishes__media">
        <img src={finish.image} alt={finish.name} loading="lazy" />
      </figure>
      <div className="finishes__copy">
        <p className="finishes__area">{finish.area}</p>
        <h3>{finish.name}</h3>
        <p>{finish.detail}</p>
        <a className="btn btn-ghost" href="#contacto">
          Solicitar catálogo de acabados
        </a>
      </div>
    </article>
  );
}

function FinishesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = projectConfig.finishes.items;
  const total = items.length;

  const activeItem = useMemo(() => items[activeIndex], [activeIndex, items]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section className="section finishes">
      <div className="section-shell">
        <SectionIntro
          kicker={projectConfig.finishes.kicker}
          title={projectConfig.finishes.title}
          description={projectConfig.finishes.description}
          center
        />

        <div className="finishes__editorial">
          {items.map((finish, index) => (
            <FinishCard
              key={finish.id}
              finish={finish}
              extraClass={editorialClassByIndex[index] ?? ""}
            />
          ))}
        </div>

        <div className="finishes__carousel reveal-up">
          <FinishCard finish={activeItem} />
          <div className="finishes__carousel-controls">
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
        </div>
      </div>
    </section>
  );
}

export default FinishesSection;
