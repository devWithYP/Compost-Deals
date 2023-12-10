/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        green:'#068A60',
        lightGreen:'#25D366',
        veryLightGreen:'#5CDE8C',
        VeryVeryLightGreen:'#9DEBBA',
        VeryLightGray:'hsl(0, 0%, 98%)',
        Golden:'#FFC200',
        darkBlue:'hsl(228, 39%, 23%)',
        darkGrayishBlue:'hsl(227, 12%, 61%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        backGround :'#fdf6ec',
        gdscred :'#DB4437',
        gdscbg : '#F1F3F4',
        gdscyrllow:'#F4B400',
        gdscgreen:'#0F9D58',
        gdscblue:'#4285F4',
        gdsctext:'#51565C',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}