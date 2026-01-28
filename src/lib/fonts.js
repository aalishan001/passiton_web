import localFont from "next/font/local";

/* =========================
   Sequel Sans
========================= */
export const sequelSans = localFont({
  src: [
    {
      path: "../../public/fonts/sequel_sans/Sequel Sans Book Disp.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sequel_sans/Sequel Sans Roman Disp.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sequel_sans/Sequel Sans Medium Disp.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sequel_sans/Sequel Sans Semi Bold Disp.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sequel_sans/Sequel Sans Heavy Disp.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sequel-sans",
  display: "swap",
});

/* =========================
   Anybody
========================= */
export const anybody = localFont({
  src: [
    {
      path: "../../public/fonts/Anybody/static/Anybody-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Anybody/static/Anybody-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Anybody/static/Anybody-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Anybody/static/Anybody-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-anybody",
  display: "swap",
});
