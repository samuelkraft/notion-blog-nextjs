import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

export default function MyDocument() {

    const currentLocale = i18nextConfig.i18n.defaultLocale
    return (
        <Html lang={currentLocale} >
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )

}
