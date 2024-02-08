/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
      },
      aspectRatio: {
        "case-portrait": "960/1080",
        "portrait-tall": "762/1013",
        "article-landscape": "4/3",
        "article-portrait": "3/4",
        square: "1",
      },
      fontFamily: {
        sans: ["Rif Sans", "serif"],
      },
      colors: {
        red: "#F70000",
      },
    },
  },
  plugins: [],
};
