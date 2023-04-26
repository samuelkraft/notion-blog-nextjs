import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HiringForm from '../../components/about/HiringForm'
import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import { pageAnimation } from '../../lib/animation'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import SocialBanner from '../../components/banner/SocialBanner'
import HiringBanner from '../../components/banner/HiringBanner'

const HiringPage = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })
    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Expand CPA - Recrutement'
                        : 'Expand CPA - Hiring' ||
                          'Expand CPA - Recrutement'}{' '}
                </title>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='/site.webmanifest'
                />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta
                    name='msapplication-TileColor'
                    content='#da532c'
                />
                <meta
                    name='theme-color'
                    content='#ffffff'
                />
                <meta
                    property='og:image'
                    content='/api/og'
                />

                <meta
                    name='description'
                    content={
                        router.locale === 'fr'
                            ? 'Experts comptables français et américains établis en France. Nous sommes spécialisés dans le conseil et l’accompagnement d’entreprises étrangères et de résidents étrangers établis en France'
                            : 'French and American Chartered Accountants Based in France, At Expand CPA, our French CPAs specialize in advising and assisting international companies and citizens in France' ||
                              'Experts comptables français et américains établis en France. Nous sommes spécialisés dans le conseil et l’accompagnement d’entreprises étrangères et de résidents étrangers établis en France'
                    }
                />
            </Head>
            <motion.div
                variants={pageAnimation}
                initial='hidden'
                animate='show'
                exit='exit'
            >
                <HeaderMegaMenu />
                <HiringBanner />
                <HiringForm />
                <SocialBanner />
                <Footer />
            </motion.div>
        </>
    )
}

const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }
export default HiringPage
