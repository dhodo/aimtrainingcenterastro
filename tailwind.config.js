/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*!(*.stories|*.spec|*.test).{ts,tsx,astro,md,mdx,html}'],
  },
  theme: {
    extend: {
      colors: {
        primary: "#9fff7c",
        "primary-light": "#d4ffc4",
        secondary: "#eeeae1",
      },
    },
  },
  plugins: [],
};
