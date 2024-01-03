interface IColorPalette {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
}

export const ColorPalette: IColorPalette = {
  primary: "#00AB55",
  secondary: "#3366FF",
  info: "#00B8D9",
  success: "#36B37E",
  warning: "#FFAB00",
  error: "#FF5630",
};

export const DarkColorPalette: IColorPalette = {
  ...ColorPalette,
};

interface IGrayScale {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}
export const GrayScale: IGrayScale = {
  "50": "#fff",
  "100": "#F9FAFB",
  "200": "#F4F6F8",
  "300": "#DFE3E8",
  "400": "#C4CDD5",
  "500": "#919EAB",
  "600": "#637381",
  "700": "#454F5B",
  "800": "#212B36",
  "900": "#161C24",
};
