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
import auditImageBanner from '../../../images/audit_banner.png'
import SocialBanner from '../../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../../components/banner/KeyServicesBanner'
import audit from '../../../images/audit.svg'

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

const AuditServices = ({}) => {
    const { t, i18n } = useTranslation('auditServices', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['auditServices', 'common'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Auditeur français : missions pour entreprises étrangères'
                        : 'French Auditor: Support for International Companies' ||
                          'Auditeur français : missions pour entreprises étrangères'}
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
                            ? 'Une entreprise étrangère basée en France doit parfois recourir à un auditeur français. Choisissez Expand CPA pour ces missions.'
                            : 'International companies operating in France often need the support of a French auditor. Expand CPA is fully equipped to support companies with audits.' ||
                              'Une entreprise étrangère basée en France doit parfois recourir à un auditeur français. Choisissez Expand CPA pour ces missions.'
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
                    coverImage={auditImageBanner}
                    coverImageMobile='/audit.jpg'
                    textContent={
                        <>
                            <h3>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </h3>
                        </>
                    }
                    color='#06CF62'
                />

                <KeyServicesBanner
                    icon={audit}
                    textContent={
                        <>
                            <Heading>{t('feature1_')}</Heading>
                            <Heading>{t('feature2_')}</Heading>
                            <Heading>{t('feature3_')}</Heading>
                            <Heading>{t('feature4_')}</Heading>
                            <Heading>{t('feature5')}</Heading>
                            <Heading>{t('feature6')}</Heading>
                            <Heading>{t('feature7')}</Heading>
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
                            {t('section2_text4')}
                        </Paragraph>

                        <Paragraph>
                            {t('section2_text5')}
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text6')}
                            <b>{t('section2_bold4')}</b>
                            {t('section2_text7')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_subtitle2')}</Slogan>

                        <Paragraph>{t('section2_text8')}</Paragraph>

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
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#06CF62'>
                            <ImageWrapper src={'/audit.jpg'} />
                        </BackgroundColor>
                        <div className='text-content'>
                            <h1>{t('section3_title')}</h1>
                            <p>
                                {t('section3_text1')}
                                <b>{t('section3_bold1')}</b>
                                {t('section3_text2')}
                            </p>
                        </div>
                    </SectionImage>
                </TextContentContainer>
                <Divider />

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section3_subtitle')}</Slogan>

                        <Paragraph>
                            {t('section3_text3')}
                            <b>{t('section3_bold2')}</b>
                            {t('section3_text4')}
                        </Paragraph>

                        <Paragraph>{t('section3_text5')}</Paragraph>

                        <BulletList>
                            <li>
                                <b>{t('section3_bullet1')}</b>
                                {t('section3_bullet1_2')}
                            </li>

                            <li>
                                <b>{t('section3_bullet2')}</b>
                                {t('section3_bullet2_2')}
                            </li>
                        </BulletList>

                        <Paragraph>
                            {t('section3_text6')}
                            <b>{t('section3_bold3')}</b>
                            {t('section3_text7')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_title')}</Slogan>
                        <Paragraph>
                            {t('section4_text1')}
                            <b>{t('section4_bold1')}</b>
                            {t('section4_text2')}
                        </Paragraph>

                        <Paragraph>
                            {t('section4_text3')}
                            <b>{t('section4_bold2')}</b>
                            {t('section4_text4')}
                        </Paragraph>

                        <BulletList>
                            <li>{t('section4_bullet1')}</li>

                            <li>{t('section4_bullet2')}</li>

                            <li>{t('section4_bullet3')}</li>

                            <li>{t('section4_bullet4')}</li>

                            <li>{t('section4_bullet5')}</li>

                            <li>{t('section4_bullet6')}</li>

                            <li>{t('section4_bullet7')}</li>
                        </BulletList>
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

                        <BulletList>
                            <li>
                                {t('section5_bullet1')}
                                <b>{t('section5_bullet1_2')}</b>
                                {t('section5_bullet1_3')}
                            </li>

                            <li>
                                {t('section5_bullet2')}
                                <b>{t('section5_bullet2_2')}</b>
                                {t('section5_bullet2_3')}
                            </li>

                            <li>
                                {t('section5_bullet3')}
                                <b>{t('section5_bullet3_2')}</b>
                                {t('section5_bullet3_3')}
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
                'auditServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default AuditServices
