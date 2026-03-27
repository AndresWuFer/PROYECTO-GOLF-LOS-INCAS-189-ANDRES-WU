import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

function ProjectOverview() {
  return (
    <section id="proyecto" className="section project-overview">
      <div className="section-shell">
        <SectionIntro
          kicker="Sobre el proyecto"
          title={projectConfig.overview.title}
          description={projectConfig.overview.paragraph}
        />

        <div className="project-overview__layout reveal-up">
          <article className="project-overview__copy glass">
            <p>{projectConfig.overview.support}</p>
            <ul>
              <li>{projectConfig.metrics.focus}</li>
              <li>{projectConfig.metrics.technicalSpaces}</li>
              <li>{projectConfig.location.shortAddress}</li>
            </ul>
          </article>

          <div className="project-overview__stats">
            {projectConfig.statsGrid.map((item) => (
              <article key={item.label} className="project-overview__stat-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
