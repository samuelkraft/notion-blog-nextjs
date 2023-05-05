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
import fiscaliteBanner from '../../../images/fiscalite_banner.png'
import SocialBanner from '../../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../../components/banner/KeyServicesBanner'
import fiscal from '../../../images/fiscal.svg'

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

const TaxServices = ({}) => {
    const { t, i18n } = useTranslation('taxServices', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['taxServices'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Expertise RH pour une entreprise étrangère en France'
                        : 'Tax Advisor Located in France | Expand CPA' ||
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
                            ? "Implanter une entreprise en France c'est compliqué pour un étranger. Voici comment se faire aider par un conseiller fiscal français."
                            : 'As a non-French citizen, setting up a business in France is complicated. Here is how to get help from a French Tax Consultant.' ||
                              "Implanter une entreprise en France c'est compliqué pour un étranger. Voici comment se faire aider par un conseiller fiscal français."
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
                    coverImage={fiscaliteBanner}
                    coverImageMobile='/fiscal.jpg'
                    textContent={
                        <>
                            <h3>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </h3>
                        </>
                    }
                    color='#FE6D34'
                />

                <KeyServicesBanner
                    icon={fiscal}
                    textContent={
                        <>
                            <Heading>{t('feature1_')}</Heading>
                            <Heading>{t('feature2_')}</Heading>
                            <Heading>{t('feature3_')}</Heading>
                            <Heading>{t('feature4_')}</Heading>
                            <Heading>{t('feature5')}</Heading>
                            <Heading>{t('feature6')}</Heading>
                            <Heading>{t('feature7')}</Heading>
                            <Heading>{t('feature8')}</Heading>
                        </>
                    }
                />

                <InfiniteSlider />

                <JoinOurTeamBanner />

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_title')}</Slogan>
                        <Paragraph>
                            <b>{t('section2_bold1')}</b>
                            {t('section2_text1')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section2_subtitle1')}</Slogan>

                        <Paragraph>
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_subtitle2')}</Slogan>

                        <Paragraph>{t('section2_text7')}</Paragraph>

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
                                {t('section2_bullet9')}
                                <b>{t('section2_bullet9_2')}</b>
                                {t('section2_bullet9_3')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#FE6D34'>
                            <ImageWrapper src={'/adminServices.png'} />
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
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section4_title')}</Slogan>
                        <Paragraph>
                            {t('section4_text1')}
                            <b>{t('section4_bold1')}</b>
                            {t('section4_text2')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle1')}</Slogan>

                        <Paragraph>
                            {t('section4_text3')}
                            <b>{t('section4_bold2')}</b>
                            {t('section4_text4')}
                            <b>{t('section4_bold3')}</b>
                            {t('section4_text5')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle2')}</Slogan>

                        <Paragraph>
                            <b>{t('section4_bold5')}</b>
                            {t('section4_text7')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section4_subtitle3')}</Slogan>

                        <Paragraph>
                            {t('section4_text8')}
                            <b>{t('section4_bold6')}</b>
                            {t('section4_text9')}
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
                            <b>{t('section5_bold2')}</b>
                        </Paragraph>

                        <Paragraph>
                            {t('section5_text3')}
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
                'taxServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default TaxServices
