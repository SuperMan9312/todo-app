import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        darkPrimary:"var(--color-dark-primary)",
        darkBackground: "var(--color-dark-background)",
        lightBackground: "var(--color-light-background)",
        softBackground:"var(--color-soft-background)",
        blockBackground:"var(--color-block-background)",
        darkText: "var(--color-dark-text)",
        lightText: "var(--color-light-text)",
        softText:"var(--color-soft-text)",
        outline:"var(--color-border)"
      },
    },
  },
  plugins: [],
} satisfies Config;
