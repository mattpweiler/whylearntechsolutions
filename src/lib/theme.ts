export const theme = {
  colors: {
    background: "#f7f8fb",
    surface: "#ffffff",
    elevated: "#eef2ff",
    text: "#111827",
    muted: "#4b5563",
    border: "#e5e7eb",
    accent: "#2563eb",
    accentMuted: "#93c5fd",
  },
  layout: {
    maxWidth: "1200px",
    sectionSpacing: "clamp(3rem, 6vw, 6rem)",
    cardRadius: "1.75rem",
  },
  text: {
    heading: "var(--font-geist-sans)",
    body: "var(--font-geist-sans)",
  },
};

export type Theme = typeof theme;
