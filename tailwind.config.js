/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        paletteText : "#f1d989",
        paletteBrown  : "#3e3932",
        paletteBlue   : "#0fbab7",
        paletteBlack  : "#000c0c",
        paletteGreen  : "#e2e3a9"
      }
    },
  },
  plugins: [],
}
