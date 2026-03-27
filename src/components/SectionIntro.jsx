function SectionIntro({ kicker, title, description, center = false, light = false }) {
  return (
    <header className={`section-intro ${center ? "is-center" : ""} ${light ? "is-light" : ""}`}>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}

export default SectionIntro;
