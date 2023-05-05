import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import HeaderMegaMenu from '../../../components/header/HeaderMegaMenu'
import Footer from '../../../components/footer/Footer'

import styled from 'styled-components'

import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'
import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'

import DetailServiceBanner from '../../../components/banner/DetailServiceBanner'
import RHBanner from '../../../images/rh_banner.png'
import SocialBanner from '../../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../../components/banner/KeyServicesBanner'
import embauche from '../../../images/embauche.svg'

import {
    TextContent,
    SectionImage,
    TextContentContainer,
    BackgroundColor,
    Slogan,
    Heading,
    BulletList,
    ImageWrapper,
    Paragraph,
    Divider,
} from '../administrative-services'

const PayrollServices = ({}) => {
    const { t, i18n } = useTranslation('payrollServices', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()
    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, [
            'payrollServices',
            'common',
        ])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Expertise RH pour une entreprise étrangère en France'
                        : 'HR expertise for a foreign company in France' ||
                          'Expertise RH pour une entreprise étrangère en France'}
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
                            ? 'Le droit du travail soulève de nombreuses difficultés pour une société étrangère implantée en France. Mieux vaut recourir à l’expertise RH d’un cabinet'
                            : 'For international companies expanding into France, understanding local labor laws can be difficult. Work with the French HR experts at Expand CPA..' ||
                              'Le droit du travail soulève de nombreuses difficultés pour une société étrangère implantée en France. Mieux vaut recourir à l’expertise RH d’un cabinet'
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

                <DetailServiceBanner
                    title={t('section1_title')}
                    coverImage={RHBanner}
                    coverImageMobile='/rh.jpg'
                    textContent={
                        <>
                            <h3>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </h3>
                        </>
                    }
                    color='#55CEE1'
                />

                <KeyServicesBanner
                    icon={embauche}
                    textContent={
                        <>
                            <Heading>{t('feature1_')}</Heading>
                            <Heading>{t('feature2_')}</Heading>
                            <Heading>{t('feature3_')}</Heading>
                            <Heading>{t('feature4_')}</Heading>
                            <Heading>{t('feature5')}</Heading>
                            <Heading>{t('feature6')}</Heading>
                        </>
                    }
                />

                <InfiniteSlider />

                <JoinOurTeamBanner />

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_title')}</Slogan>
                        <Paragraph>
                            {t('section2_text1')}
                            <b>{t('section2_bold1')}</b>
                            {t('section2_text2')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section2_subtitle1')}</Slogan>
                        <Paragraph>
                            {t('section2_text3')}
                            <b>{t('section2_bold2')}</b>
                        </Paragraph>
                        <Paragraph>
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text5')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_title')}</Slogan>
                        <Paragraph>{t('section3_text1')}</Paragraph>
                        <BulletList>
                            <li>
                                {t('section3_bullet1')}
                                <b>{t('section3_bold1')}</b>
                                {t('section3_bullet1_2')}
                            </li>

                            <li>
                                {t('section3_bullet2')}
                                <b>{t('section3_bold2')}</b>
                                {t('section3_bullet2_2')}
                            </li>

                            <li>
                                <b>{t('section3_bold3')}</b>
                                {t('section3_bullet3')}
                            </li>

                            <li>
                                {t('section3_bullet4')}
                                <b>{t('section3_bold4')}</b>
                                {t('section3_bullet4_2')}
                            </li>

                            <li>
                                {t('section3_bullet5')}
                                <b>{t('section3_bold5')}</b>
                                {t('section3_bullet5_2')}
                            </li>

                            <li>
                                {t('section3_bullet6')}
                                <b>{t('section3_bold6')}</b>
                                {t('section3_bullet6_2')}
                            </li>

                            <li>{t('section3_bullet11')}</li>

                            <li>{t('section3_bullet12')}</li>

                            <li>
                                {t('section3_bullet7')}
                                <b>{t('section3_bold7')}</b>
                                {t('section3_bullet7_2')}
                            </li>

                            <li>
                                {t('section3_bullet8')}
                                <b>{t('section3_bold8')}</b>
                                {t('section3_bullet8_2')}
                            </li>

                            <li>
                                {t('section3_bullet9')}
                                <b>{t('section3_bold9')}</b>
                                {t('section3_bullet9_2')}
                            </li>

                            <li>
                                {t('section3_bullet10')}
                                <b>{t('section3_bold10')}</b>
                                {t('section3_bullet10_2')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#55CEE1'>
                            <ImageWrapper src={'/adminServices.png'} />
                        </BackgroundColor>
                        <div className='text-content'>
                            <h1>{t('section4_title')}</h1>
                            <p>
                                {t('section4_text1')}
                                <b>{t('section4_bold1')}</b>
                            </p>
                        </div>
                    </SectionImage>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle')} </Slogan>
                        <Paragraph>
                            <b>{t('section4_bold2')}</b>
                        </Paragraph>
                        <BulletList>
                            <li>{t('section4_bullet1')}</li>

                            <li>{t('section4_bullet2')}</li>

                            <li>{t('section4_bullet3')}</li>

                            <li>{t('section4_bullet4')}</li>

                            <li>{t('section4_bullet5')}</li>

                            <li>{t('section4_bullet6')}</li>

                            <li>{t('section4_bullet7')}</li>

                            <li>{t('section4_bullet8')}</li>

                            <li>{t('section4_bullet9')}</li>

                            <li>{t('section4_bullet10')}</li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section5_title')}</Slogan>

                        <Paragraph>
                            {t('section5_text1')}
                            <b>{t('section5_bold1')}</b>
                            {t('section5_text2')}
                            <b>{t('section5_bold2')}</b>
                            {t('section5_text3')}
                            <b>{t('section5_bold3')}</b>
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section6_title')}</Slogan>

                        <Paragraph>
                            {t('section6_text1')}
                            <b>{t('section6_bold1')}</b>
                            {t('section6_text2')}
                        </Paragraph>

                        <BulletList>
                            <li>{t('section6_bullet1')}</li>

                            <li>{t('section6_bullet2')}</li>

                            <li>{t('section6_bullet3')}</li>

                            <li>{t('section6_bullet4')}</li>

                            <li>{t('section6_bullet5')}</li>

                            <li>{t('section6_bullet6')}</li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section7_title')}</Slogan>

                        <Paragraph>
                            {t('section7_text1')}
                            <b>{t('section7_bold1')}</b>
                            {t('section7_text2')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section8_title')}</Slogan>

                        <Paragraph>{t('section8_text1')}</Paragraph>

                        <BulletList>
                            <li>
                                {t('section8_bullet1')}
                                <b>{t('section8_bold1')}</b>
                            </li>

                            <li>
                                {t('section8_bullet2')}
                                <b>{t('section8_bold2')}</b>
                                {t('section8_bullet_2')}
                            </li>

                            <li>
                                {t('section8_bullet3')}
                                <b>{t('section8_bold3')}</b>
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />
                <SocialBanner />
                <Footer />
            </motion.div>
        </>
    )
}

const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'payrollServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default PayrollServices

export const ImageWrapperFullWidth = styled.div`
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 13px;
`
