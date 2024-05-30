export type Theme = {
  id: string;
  name: string;
  main: string;
  bg: string;
};

const themes: Theme[] = [
  {
    id: "theme-1",
    name: "Theme 1",
    main: "233 100% 57%",
    bg: "bg-[hsl(233 100% 57%)]",
  },
  {
    id: "theme-2",
    name: "Theme 2",
    main: "113 100% 57%",
    bg: "bg-[hsl(113 100% 57%)]",
  },
  {
    id: "theme-3",
    name: "Theme 3",
    main: "72 91% 55%",
    bg: "bg-[hsl(72 91% 55%)]",
  },
  {
    id: "theme-4",
    name: "Theme 4",
    main: "342 97% 62%",
    bg: "bg-[hsl(342 97% 62%)]",
  },
];

export default themes;

/*   { id: "theme-1", name: "Blue Orchid", main: "233° 100% 57%";
    bg: "bg-[var(hsl(233° 100% 57%))]" }
   },
  { 
    id: "theme-2"; 
    name: "Poison Green"; 
    main: "113 100% 57%";
    bg: "bg-[var(hsl(113 100% 57%))]"
   },
  { id: "theme-3", name: "Yellowy Green", main: "72 91% 55%" },
  { id: "theme-4", name: "French Rose", main: "342 97% 62%" }, */
