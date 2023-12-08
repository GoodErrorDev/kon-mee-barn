/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", "dark", "cupcake",
      {extend: {
        colors: {
          blue: {
            '500': '#ff0000', // Red color
          },
        }, 
      }}
    ]

  },
}