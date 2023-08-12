import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Berkshire_Swash, DM_Sans } from "next/font/google";

const berkshire = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-berkshire",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${berkshire.variable} ${dmSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
