/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#D3D2DB',
        'khaki': '#AD9D8A',
        'bistre': '#472C26',
        'violet': '#4C485B',
        'jet': '#3D3B3C',
      },

      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'graphik': ['graphik', 'Sans Serif'],
        'sansmedium': ['GeneralSans-Medium', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
    }
  },
  plugins: [],
}
