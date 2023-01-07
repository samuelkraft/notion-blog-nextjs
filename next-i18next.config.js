const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend = require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

const isBrowser = typeof window !== 'undefined'

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    backend: {
        backendOptions: [{ expirationTime: 60 * 60 * 1000 }, {}], // 1 hour
        backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
    },
    // react: { // used only for the lazy reload
    //   bindI18n: 'languageChanged loaded',
    //   useSuspense: false
    // },
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    serializeConfig: false,
    use: isBrowser ? [ChainedBackend] : [],
}
