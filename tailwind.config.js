/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#78A2CC',
        'secondary': '#FAFAFA',
        'accent-1': '#627B94',
        'accent-2': '#D6DDE2',
        'emergency': '#DA0202'
      }
    }
  },
  plugins: []
};