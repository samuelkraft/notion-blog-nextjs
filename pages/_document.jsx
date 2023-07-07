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
                {/* Début du script Matomo */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://aspexperts.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='//cdn.matomo.cloud/aspexperts.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
                    }}
                />
                {/* Fin du script Matomo */}
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
        </Html>
    )
}
