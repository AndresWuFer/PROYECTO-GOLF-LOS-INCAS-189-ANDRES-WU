import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function MasterPlanSection() {
  return (
    <section id="planta-general" className="section master-plan">
      <div className="section-shell">
        <SectionIntro
          kicker={projectConfig.masterPlan.kicker}
          title={projectConfig.masterPlan.title}
          description={projectConfig.masterPlan.subtitle}
        />

        <div className="master-plan__layout reveal-up">
          <figure className="master-plan__figure">
            <img
              src={projectConfig.masterPlan.image}
              alt="Planta general del proyecto Golf Los Incas con la distribucion de torres"
              loading="lazy"
            />
          </figure>

          <aside className="master-plan__panel">
            <p>{projectConfig.masterPlan.description}</p>
            <ul>
              {projectConfig.masterPlan.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#contacto">
              {projectConfig.masterPlan.ctaLabel}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default MasterPlanSection;
