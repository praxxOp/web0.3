import { Michroma, Syncopate, Sora, Tourney } from "next/font/google";
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

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const delaGothicOne = localFont({
  src: "./webfonts_Nico-Moji/DelaGothicOne-Regular.ttf",
  weight: "400",
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const tourney = Tourney({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
