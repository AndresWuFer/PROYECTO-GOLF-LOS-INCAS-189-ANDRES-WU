const blueprints = {
  alpha: [
    "M8 8h84v54H8z",
    "M8 32h34",
    "M42 8v54",
    "M63 8v28",
    "M63 36h29",
    "M21 32v30",
    "M21 48h21"
  ],
  beta: [
    "M8 8h84v54H8z",
    "M8 26h42",
    "M50 8v54",
    "M68 8v32",
    "M8 44h24",
    "M32 44v18",
    "M68 40h24"
  ],
  gamma: [
    "M8 8h84v54H8z",
    "M30 8v54",
    "M55 8v54",
    "M8 27h22",
    "M30 39h25",
    "M55 22h37",
    "M55 47h20"
  ],
  delta: [
    "M8 8h84v54H8z",
    "M8 22h50",
    "M58 8v54",
    "M76 8v35",
    "M8 42h26",
    "M34 42v20",
    "M76 43h16"
  ],
  epsilon: [
    "M8 8h84v54H8z",
    "M8 30h84",
    "M35 8v22",
    "M65 8v22",
    "M22 30v32",
    "M50 30v32",
    "M74 30v32"
  ]
};

function BlueprintPlaceholder({ variant = "alpha", label = "Plano conceptual" }) {
  const walls = blueprints[variant] ?? blueprints.alpha;

  return (
    <div className={`blueprint blueprint--${variant}`} role="img" aria-label={`${label} del departamento`}>
      <span className="blueprint__tag">Plano conceptual</span>
      <svg viewBox="0 0 100 70" fill="none">
        <rect x="2" y="2" width="96" height="66" rx="3" />
        {walls.map((line) => (
          <path key={line} d={line} />
        ))}
      </svg>
    </div>
  );
}

export default BlueprintPlaceholder;
