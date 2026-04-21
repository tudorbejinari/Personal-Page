/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#020810",
          900: "#050D1A",
          800: "#091525",
          700: "#0E2040",
          600: "#143058",
        },
        sky: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        gold: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(139,92,246,0.03) 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
        "blue-gradient": "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(14,165,233,0.08)",
        "card-hover": "0 4px 24px rgba(14,165,233,0.12), 0 0 0 1px rgba(14,165,233,0.2)",
        "glow-blue": "0 0 20px rgba(14,165,233,0.25)",
        "glow-gold": "0 0 20px rgba(245,158,11,0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
