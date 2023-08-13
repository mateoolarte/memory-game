import { Berkshire_Swash, DM_Sans } from "next/font/google";

export const berkshire = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-berkshire",
});

export const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
