// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}', // Add your source files
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Custom breakpoint at 320px
        'sm': '640px',  // Default small breakpoint
        'md': '768px',  // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
      },
    },
  },
  plugins: [],
}
