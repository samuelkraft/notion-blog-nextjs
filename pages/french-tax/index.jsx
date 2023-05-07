import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import Image from 'next/image'
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
} from '../services/administrative-services'
import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import Footer from '../../components/footer/Footer'
import { useRouter } from 'next/router'
import { pageAnimation, titleAnim } from '../../lib/animation'
import { motion } from 'framer-motion'
import Head from 'next/head'

import InfiniteSlider from '../../components/slider/InfiniteSlider'
import DetailServiceBanner from '../../components/banner/DetailServiceBanner'
import FRBanner from '../../images/fr_banner.png'
import SocialBanner from '../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../components/banner/KeyServicesBanner'
import fiscaliteFR from '../../images/fiscalite_francaise.svg'

const FrenchTax = ({}) => {
    const { t, i18n } = useTranslation('frenchTax', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['frenchTax', 'common'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Fiscalité privée française : nos prestations'
                        : 'French Private Tax : Our Services' ||
                          'Fiscalité privée française : nos prestations'}
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
                            ? 'Les entreprises étrangères situées en France recherchent des conseils pour la fiscalité privée française de leurs collaborateurs. Nous savons faire.'
                            : 'International companies located in France need expert advice to help their employees navigate the French tax code. Trust Expand CPA – a French tax firm.' ||
                              'Les entreprises étrangères situées en France recherchent des conseils pour la fiscalité privée française de leurs collaborateurs. Nous savons faire.'
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
                    coverImage={FRBanner}
                    coverImageMobile='/fr.jpg'
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
                    icon={fiscaliteFR}
                    textContent={
                        <>
                            <Heading>{t('feature1')}</Heading>
                            <Heading>{t('feature2')}</Heading>
                            <Heading>{t('feature3')}</Heading>
                            <Heading>{t('feature4')}</Heading>
                            <Heading>{t('feature5')}</Heading>
                            <Heading>{t('feature6')}</Heading>
                            <Heading>{t('feature7')}</Heading>
                            <Heading>{t('feature8')}</Heading>
                            <Heading>{t('feature9')}</Heading>
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
                            <b>{t('section2_bold2')}</b>
                            {t('section2_text3')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section2_subtitle1')}</Slogan>

                        <Paragraph>
                            {t('section2_text4')}
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text5')}
                            <b>{t('section2_bold4')}</b>
                            {t('section2_text6')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section2_text7')}
                            <b>{t('section2_bold5')}</b>
                            {t('section2_text8')}
                        </Paragraph>

                        <Paragraph>{t('section2_text9')}</Paragraph>

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
                        </BulletList>

                        <Paragraph>
                            {t('section2_text10')}
                            <b>{t('section2_bold6')}</b>
                            {t('section2_text11')}
                        </Paragraph>

                        <BulletList>
                            <li>{t('section2_bullet9')}</li>

                            <li>{t('section2_bullet10')}</li>

                            <li>{t('section2_bullet11')}</li>

                            <li>{t('section2_bullet12')}</li>
                        </BulletList>
                    </TextContent>
                    <Divider />
                </TextContentContainer>

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#0657CF'>
                            <ImageWrapper src={'/fr.jpg'} />
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

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_subtitle')}</Slogan>

                        <Paragraph>{t('section3_text3')}</Paragraph>

                        <BulletList>
                            <li>
                                {t('section3_bullet1')}
                                <b>{t('section3_bullet1_2')}</b>
                                {t('section3_bullet1_3')}
                            </li>

                            <li>
                                {t('section3_bullet2')}
                                <b>{t('section3_bullet2_2')}</b>
                                {t('section3_bullet2_3')}
                            </li>

                            <li>
                                {t('section3_bullet3')}
                                <b>{t('section3_bullet3_2')}</b>
                                {t('section3_bullet3_3')}
                            </li>

                            <li>
                                {t('section3_bullet4')}
                                <b>{t('section3_bullet4_2')}</b>
                                {t('section3_bullet4_3')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section3_text4')}
                            <b>{t('section3_bold2')}</b>
                        </Paragraph>

                        <Paragraph>{t('section3_text5')}</Paragraph>

                        <BulletList>
                            <li>{t('section3_bullet5')}</li>

                            <li>{t('section3_bullet6')}</li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer gray>
                    <TextContent>
                        <Slogan>{t('section3_subtitle3')}</Slogan>
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
                            <b>{t('section4_bold1')}</b>
                            {t('section4_text1')}
                        </Paragraph>

                        <Slogan>{t('section4_subtitle1')}</Slogan>

                        <Paragraph>{t('section4_text2')}</Paragraph>

                        <Slogan>{t('section4_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section4_text3')}
                            <b>{t('section4_bold2')}</b>
                            {t('section4_text4')}
                        </Paragraph>

                        <BulletList>
                            <li>{t('section4_bullet1')}</li>

                            <li>{t('section4_bullet2')}</li>
                        </BulletList>

                        <Slogan>{t('section4_subtitle3')}</Slogan>

                        <Paragraph>
                            {t('section4_text5')}
                            <b>{t('section4_bold3')}</b>
                            {t('section4_text6')}
                        </Paragraph>

                        <Slogan>{t('section4_subtitle4')}</Slogan>

                        <Paragraph>{t('section4_text7')}</Paragraph>

                        <BulletList>
                            <li>
                                <b>{t('section4_bullet4')}</b>
                                {t('section4_bullet4_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet5')}</b>
                                {t('section4_bullet5_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet6')}</b>
                                {t('section4_bullet6_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet7')}</b>
                                {t('section4_bullet7_2')}
                            </li>

                            <li>
                                <b>{t('section4_bullet8')}</b>
                                {t('section4_bullet8_2')}
                            </li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section5_title')}</Slogan>

                        <Paragraph>{t('section5_text1')}</Paragraph>
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
                            </li>
                        </BulletList>
                    </TextContent>
                    <Divider />
                </TextContentContainer>
                <SocialBanner />
                <Footer />
            </motion.div>
        </>
    )
}

const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['frenchTax', 'common'])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default FrenchTax
