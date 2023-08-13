import type { AppProps } from "next/app";

import { dmSans, berkshire } from "@/assets/fonts";
import "@/assets/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${berkshire.variable} ${dmSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
