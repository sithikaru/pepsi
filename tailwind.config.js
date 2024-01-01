
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ULTRA:['ULTRA', "sans-serif"]
      },
    keyframes:{
      logo:{
        "0%":{transform:"scale(1);"},
        "30%":{transform:"scale(0.7);"},
        "100%":{transform:"scale(1);"},
      },
      animation:{
        logo: "logo 1s ease-in-out infinite",
      }
    }
    },
  },
  plugins: [],
}

