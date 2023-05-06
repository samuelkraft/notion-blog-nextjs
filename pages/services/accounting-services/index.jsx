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
import comptableBanner from '../../../images/comptable_banner.png'
import SocialBanner from '../../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../../components/banner/KeyServicesBanner'
import comptable from '../../../images/comptable.svg'

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

const AccountingServices = ({}) => {
    const { t, i18n } = useTranslation('accountingServices', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, [
            'accountingServices',
            'common',
        ])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Comptable dédié pour entreprise étrangère'
                        : 'French Accounting Firm for International Companies' ||
                          'Comptable dédié pour entreprise étrangère'}
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
                            ? 'Tenir la comptabilité s’avère complexe pour une entreprise étrangère installée en France. Faites appel à un comptable français en cabinet.'
                            : 'For an international company with operations in France, managing your accounts is a complex task: work with a French accountant to ensure success.' ||
                              'Tenir la comptabilité s’avère complexe pour une entreprise étrangère installée en France. Faites appel à un comptable français en cabinet.'
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
                    coverImage={comptableBanner}
                    coverImageMobile='/comptable.jpg'
                    textContent={
                        <>
                            <h3>
                                {t('section1_text1')}
                                <b>{t('section1_bold1')}</b>
                                {t('section1_text2')}
                            </h3>
                        </>
                    }
                    color='#0657CF'
                />

                <KeyServicesBanner
                    icon={comptable}
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
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section2_subtitle1')}</Slogan>
                        <Paragraph>
                            {t('section2_text2')}
                            <b>{t('section2_bold2')}</b>
                        </Paragraph>

                        <Paragraph>
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_title')}</Slogan>
                        <Paragraph>{t('section3_text1')}</Paragraph>

                        <Paragraph>
                            <b>{t('section3_bold1')}</b>
                        </Paragraph>

                        <Paragraph>{t('section3_text2')}</Paragraph>
                        <BulletList>
                            <li>
                                {t('section3_bullet1')}
                                <b>{t('section3_bold2')}</b>
                                {t('section3_bullet1_2')}
                            </li>

                            <li>
                                {t('section3_bullet2')}
                                <b>{t('section3_bold3')}</b>
                                {t('section3_bullet2_2')}
                            </li>
                            <li>
                                {t('section3_bullet3')}
                                <b>{t('section3_bold4')}</b>
                                {t('section3_bullet3_2')}
                            </li>

                            <li>
                                {t('section3_bullet4')}
                                <b>{t('section3_bold5')}</b>
                                {t('section3_bullet4_2')}
                            </li>

                            <li>
                                {t('section3_bullet5')}
                                <b>{t('section3_bold6')}</b>
                                {t('section3_bullet5_2')}
                            </li>

                            <li>
                                {t('section3_bullet6')}
                                <b>{t('section3_bold7')}</b>
                                {t('section3_bullet6_2')}
                            </li>

                            <li>
                                {t('section3_bullet7')}
                                <b>{t('section3_bold8')}</b>
                                {t('section3_bullet7_2')}
                            </li>

                            <li>
                                {t('section3_bullet8')}
                                <b>{t('section3_bold9')}</b>
                                {t('section3_bullet8_2')}
                            </li>

                            <li>
                                {t('section3_bullet9')}
                                <b>{t('section3_bold10')}</b>
                                {t('section3_bullet9_2')}
                            </li>

                            <li>
                                {t('section3_bullet10')}
                                <b>{t('section3_bold11')}</b>
                                {t('section3_bullet10_2')}
                            </li>

                            <li>
                                {t('section3_bullet11')}
                                <b>{t('section3_bold12')}</b>
                                {t('section3_bullet11_2')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>
                <Divider />

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#0657CF'>
                            <ImageWrapper src={'/comptable.jpg'} />
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
                            {t('section4_text2')}
                        </Paragraph>
                        <BulletList>
                            <li>
                                <b>{t('section4_bullet1')}</b>
                                {t('section4_bullet1_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet2')}</b>
                                {t('section4_bullet2_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet3')}</b>
                                {t('section4_bullet3_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet4')}</b>
                            </li>

                            <li>
                                <b>{t('section4_bullet5')}</b>
                                {t('section4_bullet5_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet6')}</b>
                            </li>

                            <li>
                                <b>{t('section4_bullet7')}</b>
                                {t('section4_bullet7_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet8')}</b>
                                {t('section4_bullet8_2')}
                            </li>

                            <li>
                                {t('section4_bullet9')}
                                <b> {t('section4_bullet9_2')}</b>
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section5_title')}</Slogan>

                        <Paragraph>
                            <b>{t('section5_bold1')}</b>
                            {t('section5_text1')}
                        </Paragraph>

                        <Paragraph>
                            {t('section5_text2')}
                            <b>{t('section5_bold2')}</b>
                            {t('section5_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section6_title')}</Slogan>

                        <Paragraph>
                            {t('section6_text1')}
                            <b>{t('section6_bold1')}</b>
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section6_subtitle3')}</Slogan>

                        <Paragraph>{t('section6_text6')}</Paragraph>

                        <BulletList>
                            <li>
                                <b>{t('section6_bullet3')}</b>
                                {t('section6_bullet3_2')}
                            </li>

                            <li>
                                <b>{t('section6_bullet4')}</b>
                                {t('section6_bullet4_2')}
                            </li>

                            <li>
                                <b>{t('section6_bullet5')}</b>
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section6_subtitle1')}</Slogan>

                        <Paragraph>
                            <b>{t('section6_bold2')}</b>
                        </Paragraph>

                        <Paragraph>
                            {t('section6_text2')}
                            <b>{t('section6_bold3')}</b>
                        </Paragraph>
                        <Paragraph>
                            <b>{t('section6_bold4')}</b>
                            {t('section6_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>
                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section6_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section6_text4')}
                            <b>{t('section6_bold5')}</b>
                            {t('section6_text5')}
                        </Paragraph>

                        <BulletList>
                            <li>
                                <b>{t('section6_bullet1')}</b>
                                {t('section6_bullet1_2')}
                            </li>

                            <li>
                                <b>{t('section6_bullet2')}</b>
                                {t('section6_bullet2_2')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section7_title')}</Slogan>

                        <Paragraph>
                            {t('section7_text1')}
                            <b>{t('section7_bold1')}</b>
                            {t('section7_text2')}
                        </Paragraph>

                        <BulletList>
                            <li>
                                {t('section7_bullet1')}
                                <b>{t('section6_bullet1_2')}</b>
                            </li>

                            <li>
                                {t('section7_bullet2')}
                                <b>{t('section7_bullet2_2')}</b>
                            </li>

                            <li>
                                {t('section7_bullet3')}
                                <b>{t('section7_bullet3_2')}</b>
                                {t('section7_bullet3_3')}
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
                'accountingServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default AccountingServices
