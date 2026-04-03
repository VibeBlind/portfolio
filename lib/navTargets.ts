export type NavTarget = {
  label: string;
  description: string;
  href: string;
  color: string;
  position: [number, number, number];
};

export const NAV_TARGETS: NavTarget[] = [
  {
    label: "Aethergraph",
    description: "Generative mapping and visual systems",
    href: "/work/aethergraph",
    color: "#a855f7",
    position: [-2.4, 0.4, -3.6],
  },
  {
    label: "XR",
    description: "Immersive interfaces and spatial UX",
    href: "/work/xr",
    color: "#22d3ee",
    position: [0, 0.8, -4],
  },
  {
    label: "Systems",
    description: "Lean product systems under constraints",
    href: "/work/systems",
    color: "#facc15",
    position: [2.4, 0.4, -3.6],
  },
];
