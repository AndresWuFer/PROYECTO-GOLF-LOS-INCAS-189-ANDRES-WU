export const ctaClassByVariant = (variant = "primary", light = false) => {
  if (variant === "secondary") {
    return light ? "btn btn-secondary is-light" : "btn btn-secondary";
  }
  if (variant === "ghost") {
    return "btn btn-ghost";
  }
  return "btn btn-primary";
};
