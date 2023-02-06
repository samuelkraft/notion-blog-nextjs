import "../public/assets/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from 'next-i18next'
import { MantineProvider } from "@mantine/core";
import nextI18nConfig from '../next-i18next.config'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-5T2X2DQ');
      `}
      </Script>
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
