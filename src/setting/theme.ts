export type ThemeMode = "light" | "dark";

export interface ThemeSetting {
  theme: ThemeMode;
}

const themeSetting: ThemeSetting = {
  theme: "light",
};

export default themeSetting;
