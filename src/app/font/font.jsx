import { Domine, Arimo } from "next/font/google";

export const domine = Domine({
  variants: ["400", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--domine-font",
});

export const arimo = Arimo({
  variants: ["400", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--arimo-font",
});
