import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function TestimonialsOrTrustSection() {
  return (
    <section className="section trust">
      <div className="section-shell">
        <SectionIntro
          kicker="Bloque de confianza"
          title={projectConfig.trust.title}
          description="Un enfoque comercial orientado a transparencia, acompañamiento y decisión informada."
          center
        />

        <div className="trust__grid reveal-up">
          {projectConfig.trust.cards.map((card) => (
            <article key={card.title} className="trust__card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsOrTrustSection;
