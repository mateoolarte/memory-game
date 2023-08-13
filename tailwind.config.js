const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-berkshire)"],
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
