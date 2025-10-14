/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
