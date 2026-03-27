import BlueprintPlaceholder from "./BlueprintPlaceholder";
import SectionIntro from "./SectionIntro";
import { contactActions, projectConfig } from "../config/projectConfig";

function UnitTypesSection() {
  return (
    <section id="tipologias" className="section unit-types">
      <div className="section-shell">
        <SectionIntro
          kicker={projectConfig.unitTypes.kicker}
          title={projectConfig.unitTypes.title}
          description={projectConfig.unitTypes.description}
        />

        <div className="unit-types__grid">
          {projectConfig.unitTypes.items.map((unit) => {
            const message = `Hola, deseo información sobre la ${unit.code} (${unit.area}) del proyecto Golf Los Incas.`;
            const unitWhatsapp = contactActions.buildCustomWhatsApp(message);

            return (
              <article key={unit.code} className="unit-types__card reveal-up">
                {unit.image ? (
                  <img
                    className="unit-types__plan-image"
                    src={unit.image}
                    alt={`Plano de ${unit.code}`}
                    loading="lazy"
                  />
                ) : (
                  <BlueprintPlaceholder label={unit.code} variant={unit.blueprint} />
                )}

                <div className="unit-types__card-copy">
                  <h3>{unit.code}</h3>
                  <p>{unit.description}</p>
                  <ul>
                    <li>
                      <strong>Área:</strong> {unit.area}
                    </li>
                    <li>
                      <strong>Dormitorios:</strong> {unit.bedrooms}
                    </li>
                    <li>
                      <strong>Baños:</strong> {unit.bathrooms}
                    </li>
                  </ul>
                  <a className="btn btn-primary" href={unitWhatsapp} target="_blank" rel="noreferrer">
                    Solicitar información de esta tipología
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UnitTypesSection;
