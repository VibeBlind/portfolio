export type NavTarget = {
  label: string;
  description: string;
  href: string;
  color: string;
  position: [number, number, number];
};

export const NAV_TARGETS: NavTarget[] = [
  {
    label: "Work",
    description: "Projects that stay intentional and lean",
    href: "/work",
    color: "#a855f7",
    position: [-2.4, 0.4, -3.6],
  },
  {
    label: "Studio",
    description: "Process notes, rigs, and tests",
    href: "/studio",
    color: "#22d3ee",
    position: [0, 0.8, -4],
  },
  {
    label: "Contact",
    description: "Collaborations, invites, signals",
    href: "/contact",
    color: "#facc15",
    position: [2.4, 0.4, -3.6],
  },
];
