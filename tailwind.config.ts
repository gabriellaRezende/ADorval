import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais — quentes
        terracota: "#C4956A",
        bege:      "#E8C9A0",
        lilas:     "#B8A9C9",

        // Cores de suporte — frias
        ardosia:   "#8E9AAF",
        prata:     "#B5BCC8",
        noite:     "#2C3A52",

        // Neutros
        creme:     "#FAF9F6",
        gelo:      "#ECEEF1",
        suave:     "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        pill: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
