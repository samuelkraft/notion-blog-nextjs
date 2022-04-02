const defaultTheme = require('tailwindcss/defaultTheme');
/*const fontFamily = defaultTheme.fontFamily;
fontFamily['serif'] = [
  'Georgia', // <-- Roboto is a default sans font now
  'Georgia',
  'system-ui',
  // <-- you may provide more font fallbacks here
];
*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Georgia', ...defaultTheme.fontFamily.serif]
    }, 
    extend: {
      
    },
    
  },
  plugins: [],
}
