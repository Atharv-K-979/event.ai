export function createLocationSlug(city, state) {
  const norm = (s) =>
    String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  return `${norm(city)}-${norm(state)}`;
}

export function parseLocationSlug(slug) {
  if (!slug || typeof slug !== "string") {
    return { city: null, state: null, isValid: false };
  }
  const parts = slug.split("-").filter(Boolean);
  if (parts.length < 2) {
    return { city: null, state: null, isValid: false };
  }
  const state = parts[parts.length - 1];
  const city = parts.slice(0, -1).join(" ");
  return {
    city: city.replace(/-/g, " "),
    state: state.replace(/-/g, " "),
    isValid: !!city && !!state,
  };
}
