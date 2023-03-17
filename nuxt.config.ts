// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'KIM'
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
