/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#263238",
        body: "#f3f3f3",
        current: "#ffffff",
        inputborder:"#EAEDF0",
        bordercolor:"#8E9297",
        blue:"#388FF3",
        textcolor:"#8E9297",
        logo:{
          grey:'#EAEDF0'
        },
        gree: {
          DEFAULT: "#388e3b",
        },
        shade: {
          DEFAULT: "red",
          1: "#43a046",
          2: "#388e3b",
        },
      },

      maxWidth: {
        2.5: '0.625rem',
        3: '0.75rem',
        4: '1rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        22.5: '5.625rem',
        25: '6.25rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        40: '10rem',
        42.5: '10.625rem',
        44: '11rem',
        45: '11.25rem',
        70: '17.5rem',
        90: '22.5rem',
        94: '23.5rem',
        125: '31.25rem',},


      flex:{
     "center": " align-items-centre"
      },

      maxWidth: {
        120: '120rem',
      }

   
    },
  },
  plugins: [],
};
