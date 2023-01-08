import "../public/assets/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from 'next-i18next'
import { MantineProvider } from "@mantine/core";
import nextI18nConfig from '../next-i18next.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        theme={{ fontFamily: "Gilroy" }}
        withGlobalStyles
        withNormalizeCSS>
        <AnimatePresence wait>
          <Component {...pageProps} />
        </AnimatePresence>
      </MantineProvider>
    </>
  )
}

export default appWithTranslation(MyApp, nextI18nConfig);
