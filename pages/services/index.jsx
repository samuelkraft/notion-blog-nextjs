import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import {
    HomeSection05Container,
    HomeSection05Wrapper,
} from '../../components/homepage/HomeSection05'

import { FeaturesCardContainer } from '../../components/homepage/HomeSection01'

import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import Footer from '../../components/footer/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../lib/animation'
import Head from 'next/head'
import ContactForm from '../../components/homepage/ContactForm'
import SocialBanner from '../../components/banner/SocialBanner'
import ServicesBanner from '../../components/banner/ServicesBanner'
import ServicesGridLayout from '../../components/grid/ServicesGridLayout'

const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 60,
    }
}

export { getStaticProps }

const ServicesPages = ({}) => {
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
                        ? 'Expand CPA - Nos Services'
                        : 'Expand CPA - Our Services' ||
                          'Expand CPA - Nos Services'}
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
                <ServicesBanner />
                <ServicesGridLayout />
                <ContactForm />
                <SocialBanner />
                <Footer />
            </motion.div>
        </>
    )
}

const ServicesContainer = styled(HomeSection05Container)`
    margin-bottom: 3rem;
    @media screen and (max-width: 768px) {
        margin-top: 0rem;
    }

    @media screen and (min-width: 768px) {
        padding: 2rem;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 0rem;

        padding: 1rem 12%;
    }

    @media screen and (min-width: 1440px) {
        margin-top: 0rem;

        padding: 1rem 12%;
    }
    @media screen and (min-width: 1800px) {
        padding: 1rem 8%;
    }

    @media screen and (min-width: 2100px) {
        padding: 1rem 16%;
    }
    @media screen and (min-width: 2500px) {
        padding: 1rem 25%;
    }
`

const ServicesWrapper = styled(HomeSection05Wrapper)`
    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;

        @media screen and (min-width: 1024px) {
            margin-top: 0rem;
        }

        @media screen and (min-width: 1440px) {
            margin-top: 0rem;
        }
    }
`

const ServicesCardContainer = styled(FeaturesCardContainer)`
    position: relative;
    width: 100%;
    height: 100%;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    z-index: 10;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;

    align-items: center;
    justify-items: center;
    justify-content: center;

    @media screen and (min-width: 320px) {
        grid-template-columns: 1fr;
        justify-self: center;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
    }

    margin-top: 3rem;
`

const ServicesCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2.5px solid #1b1464;
    border-radius: 51px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 3rem;
    position: relative;
    width: 100%;
    height: 100%;
    gap: 1rem;

    .text-content {
        margin-top: 2rem;
        font-family: 'AllRoundGothic-Demi';
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 48px;
        letter-spacing: 0.327px;
        color: #1b1464;

        p {
            font-family: 'Gilroy', sans-serif;
            font-size: 24px;
        }
    }

    @media screen and (min-width: 320px) {
        width: 100%;
    }
`

export default ServicesPages
