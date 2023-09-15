import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel='preconnect'
                    href='https://fonts.googleapis.com'
                />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />
                <link
                    href='https://fonts.googleapis.com/css2?&family=Poppins:wght@600;700&display=swap'
                    rel='stylesheet'
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5T2X2DQ');
            `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T2X2DQ"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
            </body>
            <footer><script
                    dangerouslySetInnerHTML={{
                        __html: `window.axeptioSettings = {
                            clientId: "64e8a93490061ea7ea94c73a", 
                            cookiesVersion:"expand-cpa-fr",
                        };
                        (function(d,s) {
                            var t = d.getElementsByTagName(s)[0],e = d.createElement(s);
                            e.async = true; e.src = "//static.axept.io/sdk.js";
                            t.parentNode.insertBefore(e, t);
                        })(document, "script");
`,
                    }}
                /></footer>
        </Html>
    )
}
