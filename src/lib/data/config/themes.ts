export type Theme = {
  id: string;
  name: string;
  main: string;
};

const themes: Theme[] = [
  { id: "theme-1", name: "Blue Orchid", main: "233° 100% 57%" },
  { id: "theme-2", name: "Poison Green", main: "113 100% 57%" },
  { id: "theme-3", name: "Yellowy Green", main: "72 91% 55%" },
  { id: "theme-4", name: "French Rose", main: "342 97% 62%" },
];

export default themes;
