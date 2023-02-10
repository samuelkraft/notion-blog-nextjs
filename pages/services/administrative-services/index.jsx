import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { HeroContainer } from '../../../components/homepage/HeroHomePage'
import HeaderMegaMenu from '../../../components/header/HeaderMegaMenu'
import Footer from '../../../components/footer/Footer'
import Image from 'next/image'

import styled from 'styled-components'
import check from '../../../images/check.svg'

import feat1 from '../../../images/administrativeServices/feat1.svg'
import feat2 from '../../../images/administrativeServices/feat2.svg'
import feat3 from '../../../images/administrativeServices/feat3.svg'
import feat4 from '../../../images/administrativeServices/feat4.svg'
import feat5 from '../../../images/administrativeServices/feat5.svg'
import feat6 from '../../../images/administrativeServices/feat6.svg'
import feat7 from '../../../images/administrativeServices/feat7.svg'

import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'
import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'
import AboutSection05 from '../../../components/about/AboutSection05'
import logoArrow from '../../../images/logo_arrow.png'

const AdministritiveServices = ({}) => {
    const { t, i18n } = useTranslation(['administrativeServices'], {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, [
            'administrativeServices',
            'common',
        ])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Services administratifs pour une entreprise étrangère implantée en France'
                        : 'International Companies : Administrative Formalities in France' ||
                          'Services administratifs pour une entreprise étrangère implantée en France'}
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
                            ? 'Toute société étrangère qui s’installe en France doit se conformer aux formalités du pays. Faites-vous aider par un expert-comptable spécialisé'
                            : 'Any international company establishing a business in France must comply with French administrative rules. Get support from a specialized accountant.' ||
                              'Toute société étrangère qui s’installe en France doit se conformer aux formalités du pays. Faites-vous aider par un expert-comptable spécialisé'
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
                <HeroContainer style={{ marginTop: '10rem' }}>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section1_title')}</Slogan>
                            <Heading>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </Heading>
                        </TextContent>
                    </LayoutColumn>

                    <Heading>
                        <Subtitle>{t('features_title')}</Subtitle>
                    </Heading>

                    <Heading>
                        <FeaturesContainer>
                            <Feature>
                                <Image
                                    src={feat1}
                                    alt='feat1'
                                />
                                <p>{t('feature1')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat2}
                                    alt='feat2'
                                />
                                <p>{t('feature2')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat3}
                                    alt='feat3'
                                />
                                <p>{t('feature3')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat4}
                                    alt='feat4'
                                />
                                <p>{t('feature4')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat5}
                                    alt='feat5'
                                />
                                <p>{t('feature5')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat6}
                                    alt='feat6'
                                />
                                <p>{t('feature6')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat7}
                                    alt='feat7'
                                />
                                <p>{t('feature7')}</p>
                            </Feature>
                        </FeaturesContainer>
                    </Heading>

                    <InfiniteSlider />

                    <AboutSection05
                        title={t('CTA')}
                        btnText={t('contactUs')}
                        standalone
                    />
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section2_title')}</Slogan>
                            <Heading>
                                <b>{t('section2_bold1')}</b>
                            </Heading>
                            <Heading>{t('section2_text1')}</Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section3_title')}</Slogan>
                            <Heading>{t('section3_text1')}</Heading>
                            <Heading>
                                <b>{t('section3_bold1')}</b>
                            </Heading>
                            <Heading>{t('section3_text2')}</Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section4_title')}</Slogan>
                            <Heading>
                                <Heading>{t('section4_text1')}</Heading>

                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet1')}
                                        <b>{t('section4_bold1')}</b>
                                        {t('section4_bullet1_2')}
                                    </Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet2')}
                                        <b>{t('section4_bold2')}</b>
                                        {t('section4_bullet2_2')}
                                    </Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet3')}
                                        <b>{t('section4_bold3')}</b>
                                        {t('section4_bullet3_2')}
                                    </Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet4')}
                                        <b>{t('section4_bold4')}</b>
                                        {t('section4_bullet4_2')}
                                        <b>{t('section4_bold4_2')}</b>
                                        {t('section4_bullet4_3')}
                                    </Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet5')}
                                        <b>{t('section4_bold5')}</b>
                                        {t('section4_bullet5_2')}
                                    </Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>
                                        {t('section4_bullet6')}
                                        <b>{t('section4_bold6')}</b>
                                        {t('section4_bullet6_2')}
                                    </Heading>
                                </RowWrapper>
                            </Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section5_title')}</Slogan>

                            <Heading>
                                <b>{t('section5_bold1')}</b>
                                {t('section5_text1')}
                            </Heading>

                            <Subtitle>{t('section6_title')}</Subtitle>

                            <Heading>
                                {t('section6_text1')}
                                <b>{t('section6_bold1')}</b>
                                {t('section6_text2')}
                            </Heading>

                            <Heading>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section6_bullet1')}</Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section6_bullet2')}</Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section6_bullet3')}</Heading>
                                </RowWrapper>

                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section6_bullet6')}</Heading>
                                </RowWrapper>
                            </Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section7_title')}</Slogan>

                            <Heading>
                                {t('section7_text1')}
                                <b>{t('section7_bold1')}</b>
                                {t('section7_text2')}
                            </Heading>

                            <Subtitle>{t('section7_subtitle1')}</Subtitle>

                            <Heading>
                                <b>{t('section7_bold2')}</b>
                                {t('section7_text3')}
                            </Heading>
                            <Heading>
                                {t('section7_text4')}
                                <b>{t('section7_bold3')}</b>
                            </Heading>

                            <Heading>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section7_bullet1')}</Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section7_bullet2')}</Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section7_bullet3')}</Heading>
                                </RowWrapper>
                            </Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section8_title')}</Slogan>
                            <Heading>
                                <Heading>
                                    {t('section8_text1')}
                                    <b>{t('section2_bold1')}</b>
                                    {t('section8_text2')}
                                </Heading>
                                <Heading>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet1')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet2')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet3')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet4')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet5')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet6')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section8_bullet7')}
                                        </Heading>
                                    </RowWrapper>
                                </Heading>
                            </Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section9_title')}</Slogan>
                            <Heading>
                                <Heading>
                                    <b>{t('section9_bold1')}</b>
                                    {t('section9_text1')}
                                </Heading>
                                <Heading>
                                    {t('section9_text2')}
                                    <b>{t('section9_bold2')}</b>
                                </Heading>
                                <Heading>
                                    {t('section9_text3')}
                                    <b>{t('section9_bold3')}</b>
                                    {t('section9_text4')}
                                </Heading>
                            </Heading>
                        </TextContent>
                    </LayoutColumn>
                </HeroContainer>
                <Footer />
            </motion.div>
        </>
    )
}

const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'administrativeServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default AdministritiveServices

export const Layout = styled.div`
    display: flex;
    flex-flow: column;
    background: transparent;
    gap: 3rem;
    align-items: center;
    @media screen and (max-width: 465px) {
        flex-flow: column;
    }

    @media screen and (min-width: 768px) {
        font-size: 48px;
        flex-flow: column;
    }
    @media screen and (min-width: 1024px) {
        font-size: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1440px) {
        font-size: 52px;
    }
`

export const LayoutReversed = styled(Layout)`
    flex-flow: column-reverse;
`

export const LayoutColumn = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: start;
    align-content: center;
`

export const TextContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: start;
    align-content: start;
    gap: 1rem;
`

export const Slogan = styled(motion.h1)`
    font-family: 'AllRoundGothic-Demi';
    font-size: 32px;
    color: #352d61;
    line-height: 1.2;

    @media screen and (max-width: 465px) {
        font-size: 28px;
    }

    @media screen and (min-width: 768px) {
        font-size: 32px;
    }
    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 46px;
    }
`

export const Subtitle = styled.h1`
    font-family: 'AllRoundGothic-Demi';
    font-size: 24px;
    line-height: 1.2;
    color: #352d61;

    @media screen and (max-width: 465px) {
    }

    @media screen and (min-width: 768px) {
        br {
            display: none;
        }
    }
    @media screen and (min-width: 1024px) {
        br {
            display: block;
        }
        font-size: 32px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 36px;
    }
`

export const Heading = styled.div`
    font-size: 18px;
    line-height: 30px;
    color: #352d61;
    margin: 1rem 0;

    @media screen and (max-width: 465px) {
    }

    @media screen and (min-width: 768px) {
        br {
            display: none;
        }
    }
    @media screen and (min-width: 1024px) {
        br {
            display: block;
        }
        font-size: 22px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 22px;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 400px;
    height: 500px;
    object-fit: cover;

    justify-self: center;

    @media screen and (max-width: 500px) {
        width: 300px;
        height: 400px;
    }
`

export const ImageWrapperHorizontal = styled(ImageWrapper)`
    width: 500px;
    height: 400px;

    @media screen and (max-width: 500px) {
        width: 400px;
        height: 300px;
    }
`

export const RowWrapper = styled.div`
    display: flex;
    gap: 2rem;
    line-height: 1.5;
    align-items: center;
`

export const FeaturesContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-flow: column;
    justify-content: start;
    gap: 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

export const Feature = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: start;
    padding: 1.5rem;
    border: 2px solid #1b1464;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        font-size: 20px;
        line-height: 30px;
        color: #352d61;
        font-family: 'AllRoundGothic-Demi';

        @media screen and (max-width: 465px) {
            font-size: 20px;
        }
    }
`
