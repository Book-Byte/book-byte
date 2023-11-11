/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("keep-react/src/keep-preset.js")],
  theme: {
    extend: {},
  },
  plugins: [],
}
