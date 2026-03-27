import SectionIntro from "./SectionIntro";
import { projectConfig } from "../config/projectConfig";

const iconPaths = {
  pin: (
    <>
      <path d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  growth: (
    <>
      <path d="M4 16l5-5 3.5 3.5L20 7" />
      <path d="M14 7h6v6" />
    </>
  ),
  routes: (
    <>
      <path d="M4 7h9c2 0 3 1 3 3v7" />
      <path d="M4 17h9c2 0 3-1 3-3V7" />
      <circle cx="4" cy="7" r="1.5" />
      <circle cx="4" cy="17" r="1.5" />
      <circle cx="16" cy="17" r="1.5" />
    </>
  ),
  architecture: (
    <>
      <path d="M5 19V7l7-3 7 3v12" />
      <path d="M9 10v9M15 10v9M5 14h14" />
    </>
  ),
  house: (
    <>
      <path d="M4 11 12 5l8 6v9H4z" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  community: (
    <>
      <circle cx="8" cy="9" r="2.2" />
      <circle cx="16" cy="9" r="2.2" />
      <path d="M4.5 18c.4-2.8 2.1-4.2 3.5-4.2s3.1 1.4 3.5 4.2" />
      <path d="M12.5 18c.4-2.8 2.1-4.2 3.5-4.2s3.1 1.4 3.5 4.2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="M4 20h16" />
      <path d="M7 8 4 13h6Z" />
      <path d="M17 8l-3 5h6Z" />
    </>
  ),
  premium: (
    <>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9Z" />
    </>
  )
};

function BenefitIcon({ icon }) {
  return (
    <span className="benefit-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        {iconPaths[icon] ?? iconPaths.premium}
      </svg>
    </span>
  );
}

function BenefitsSection() {
  return (
    <section id="diferenciales" className="section benefits">
      <div className="section-shell">
        <SectionIntro
          kicker="Beneficios y diferenciales"
          title={projectConfig.benefits.title}
          description={projectConfig.benefits.description}
          center
        />

        <div className="benefits__grid reveal-up">
          {projectConfig.benefits.cards.map((card) => (
            <article key={card.title} className="benefits__card">
              <BenefitIcon icon={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
