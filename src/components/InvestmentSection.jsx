import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function InvestmentSection() {
  return (
    <section id="inversion" className="section investment">
      <div className="section-shell investment__layout">
        <div>
          <SectionIntro
            kicker="Inversión y propuesta de valor"
            title={projectConfig.investment.title}
            description={projectConfig.investment.paragraph}
            light
          />
        </div>
        <div className="investment__points reveal-up">
          {projectConfig.investment.points.map((point) => (
            <article key={point}>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
