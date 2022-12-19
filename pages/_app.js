import "../public/assets/styles/globals.css";
import { HeaderMegaMenu } from "../components/header/HeaderMegaMenu"
import Footer from "../components/footer/Footer"

import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from 'next-i18next'
import { MantineProvider } from "@mantine/core";
import MyDocument from "../pages/_document";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        theme={{ fontFamily: "Gilroy" }}
        withGlobalStyles
        withNormalizeCSS>
        <HeaderMegaMenu />
        <AnimatePresence wait>
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </MantineProvider>
    </>
  )
}

export default appWithTranslation(MyApp);
