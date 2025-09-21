/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "locus-primary": "#7F5FFF",
        "locus-secondary": "#7F5FFFBF",
        "locus-silver": "#F2F2F7",
        "locus-grey": "#C7C7CC",
      },
      fontFamily: {
        "comic-relief": ["Comic Relief", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      spacing: {
        13: "3.25rem",
      },
      height: {
        13: "3.25rem",
        11.5: "2.875rem",
      },
    },
  },
  plugins: [],
};
