/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        space: {
          950: "#020408",
          900: "#06101F",
          800: "#0A1628",
          700: "#102240",
          600: "#173058",
        },
        neon: {
          blue: "#38BDF8",
          cyan: "#00D4FF",
          violet: "#818CF8",
          purple: "#A855F7",
        },
        gold: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
        },
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow": "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(56,189,248,0.12) 0%, transparent 65%)",
        "glow-blue": "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
        "glow-violet": "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)",
      },
      backgroundSize: {
        "dot-lg": "32px 32px",
      },
      boxShadow: {
        "glow-sm": "0 0 0 1px rgba(56,189,248,0.2), 0 4px 16px rgba(56,189,248,0.06)",
        "glow-md": "0 0 0 1px rgba(56,189,248,0.3), 0 8px 32px rgba(56,189,248,0.1)",
        "glow-lg": "0 0 0 1px rgba(56,189,248,0.4), 0 16px 48px rgba(56,189,248,0.15)",
        "card": "0 1px 0 rgba(255,255,255,0.05) inset, 0 1px 3px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
