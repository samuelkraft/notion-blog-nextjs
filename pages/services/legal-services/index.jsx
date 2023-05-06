import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'

import HeaderMegaMenu from '../../../components/header/HeaderMegaMenu'
import Footer from '../../../components/footer/Footer'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'
import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'
import DetailServiceBanner from '../../../components/banner/DetailServiceBanner'
import legalBanner from '../../../images/legal_banner.png'
import SocialBanner from '../../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../../components/banner/KeyServicesBanner'
import teamwork from '../../../images/teamwork.svg'

import {
    TextContent,
    SectionImage,
    TextContentContainer,
    BackgroundColor,
    Slogan,
    Paragraph,
    BulletList,
    ImageWrapper,
    Heading,
    Divider,
} from '../administrative-services'

const LegalServices = ({}) => {
    const { t, i18n } = useTranslation('legalServices', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['legalServices', 'common'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Conseil juridique pour société étrangère basée en France'
                        : 'Legal Services for International Companies Based in France' ||
                          'Conseil juridique pour société étrangère basée en France'}
                </title>
                <title>{t('page_title')}</title>
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
                            ? "Une entreprise étrangère qui s'implante en France recherche un conseil juridique pertinent pour l'accompagner. C'est notre métier !"
                            : 'International companies setting up business in France need expert legal advice. That’s our job.' ||
                              "Une entreprise étrangère qui s'implante en France recherche un conseil juridique pertinent pour l'accompagner. C'est notre métier !"
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
                    coverImage={legalBanner}
                    coverImageMobile='/legal.jpg'
                    textContent={
                        <>
                            <h3>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </h3>
                        </>
                    }
                    color='#FFC834'
                />

                <KeyServicesBanner
                    icon={teamwork}
                    textContent={
                        <>
                            <Heading>{t('feature1')}</Heading>
                            <Heading>{t('feature2')}</Heading>
                            <Heading>{t('feature3')}</Heading>
                            <Heading>{t('feature4')}</Heading>
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
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section2_subtitle1')}</Slogan>
                        <Paragraph>
                            {t('section2_text2')}
                            <b>{t('section2_bold2')}</b>
                            {t('section2_text3')}
                        </Paragraph>

                        <Paragraph>
                            {t('section2_text4')}
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text5')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section2_text6')}
                            <b>{t('section2_bold4')}</b>
                            {t('section2_text7')}
                        </Paragraph>

                        <BulletList>
                            <li>
                                {t('section2_bullet1')}
                                <b>{t('section2_bullet1_2')}</b>
                                {t('section2_bullet1_3')}
                            </li>

                            <li>
                                {t('section2_bullet2')}
                                <b>{t('section2_bullet2_2')}</b>
                                {t('section2_bullet2_3')}
                            </li>

                            <li>
                                {t('section2_bullet3')}
                                <b>{t('section2_bullet3_2')}</b>
                                {t('section2_bullet3_3')}
                            </li>

                            <li>
                                {t('section2_bullet4')}
                                <b>{t('section2_bullet4_2')}</b>
                                {t('section2_bullet4_3')}
                            </li>

                            <li>
                                {t('section2_bullet5')}
                                <b>{t('section2_bullet5_2')}</b>
                                {t('section2_bullet5_3')}
                            </li>

                            <li>
                                {t('section2_bullet6')}
                                <b>{t('section2_bullet6_2')}</b>
                                {t('section2_bullet6_3')}
                            </li>

                            <li>
                                {t('section2_bullet7')}
                                <b>{t('section2_bullet7_2')}</b>
                                {t('section2_bullet7_3')}
                            </li>

                            <li>
                                {t('section2_bullet8')}
                                <b>{t('section2_bullet8_2')}</b>
                                {t('section2_bullet8_3')}
                            </li>

                            <li>
                                {t('section2_bullet9')}
                                <b>{t('section2_bullet9_2')}</b>
                                {t('section2_bullet9_3')}
                            </li>

                            <li>
                                {t('section2_bullet10')}
                                <b>{t('section2_bullet10_2')}</b>
                                {t('section2_bullet10_3')}
                            </li>

                            <li>
                                {t('section2_bullet11')}
                                <b>{t('section2_bullet11_2')}</b>
                                {t('section2_bullet11_3')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#FFC834'>
                            <ImageWrapper src={'/legal.jpg'} />
                        </BackgroundColor>
                        <div className='text-content'>
                            <h1>{t('section3_title')}</h1>
                            <p>
                                {t('section3_text1')}
                                <b>{t('section3_bold1')}</b>
                            </p>
                        </div>
                    </SectionImage>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_subtitle')}</Slogan>

                        <Paragraph>
                            <b>{t('section3_bold2')}</b>
                        </Paragraph>

                        <BulletList>
                            <li>{t('section3_bullet1')}</li>

                            <li>{t('section3_bullet2')}</li>

                            <li>{t('section3_bullet3')}</li>

                            <li>{t('section3_bullet4')}</li>

                            <li>{t('section3_bullet5')}</li>

                            <li>{t('section3_bullet6')}</li>

                            <li>{t('section3_bullet7')}</li>

                            <li>{t('section3_bullet8')}</li>

                            <li>{t('section3_bullet9')}</li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section3_subtitle2')}</Slogan>

                        <Paragraph>
                            <b>{t('section3_bold4')}</b>
                            {t('section3_text8')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <div>
                        <TextContent>
                            <Slogan>{t('section4_title')}</Slogan>
                            <Paragraph>
                                {t('section4_text1')}
                                <b>{t('section4_bold1')}</b>
                            </Paragraph>
                        </TextContent>
                    </div>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle1')}</Slogan>

                        <Paragraph>
                            {t('section4_text2')}
                            <b>{t('section4_bold2')}</b>
                            {t('section4_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section4_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section4_text4')}
                            <b>{t('section4_bold3')}</b>
                            {t('section4_text5')}
                            <b>{t('section4_bold4')}</b>
                            {t('section4_text6')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle3')}</Slogan>

                        <Paragraph>
                            {t('section4_text7')}
                            <b>{t('section4_bold5')}</b>
                            {t('section4_text8')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section5_title')}</Slogan>

                        <Paragraph>
                            {t('section5_text1')}
                            <b>{t('section5_bold1')}</b>
                            {t('section5_text2')}
                        </Paragraph>

                        <Paragraph>
                            <b>{t('section5_bold2')}</b>
                            {t('section5_text3')}
                        </Paragraph>

                        <Paragraph>
                            <b>{t('section5_bold3')}</b>
                            {t('section5_text4')}
                        </Paragraph>

                        <Paragraph>
                            {t('section5_text5')}
                            <b>{t('section5_bold4')}</b>
                            {t('section5_text6')}
                        </Paragraph>
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
                'legalServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default LegalServices
