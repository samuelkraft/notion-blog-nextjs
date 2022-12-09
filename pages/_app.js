import "../public/assets/styles/globals.css";
import { HeaderMegaMenu } from "../components/header/HeaderMegaMenu"
import Footer from "../components/footer/Footer"

import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderMegaMenu />
      <AnimatePresence wait>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp);
