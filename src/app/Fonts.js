import { Michroma } from "next/font/google";
import localFont from "next/font/local";

export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const nico = localFont({
  src: "./webfonts_Nico-Moji/Nico-Moji.ttf.woff",
  display: "swap",
});

