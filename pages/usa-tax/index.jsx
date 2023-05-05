import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
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
import styled from 'styled-components'
import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import Footer from '../../components/footer/Footer'
import { useRouter } from 'next/router'
import { pageAnimation } from '../../lib/animation'
import { motion } from 'framer-motion'
import Head from 'next/head'
import InfiniteSlider from '../../components/slider/InfiniteSlider'

import DetailServiceBanner from '../../components/banner/DetailServiceBanner'
import adminServicesDetailBanner from '../../images/admin_detail_banner.png'
import SocialBanner from '../../components/banner/SocialBanner'
import JoinOurTeamBanner from '../../components/banner/JoinOurTeamBanner'
import KeyServicesBanner from '../../components/banner/KeyServicesBanner'
import fiscaliteUS from '../../images/fiscalite_us.svg'

const UsaTax = ({}) => {
    const { t, i18n } = useTranslation('usaTax', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['usaTax', 'common'])
    }, [router.locale])

    return (
        <>
            <Head>
                <title>
                    {router.locale === 'fr'
                        ? 'Impôt aux États-Unis pour Américains situés en France'
                        : 'U.S. Tax for Americans in France' ||
                          'Impôt aux États-Unis pour Américains situés en France'}
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
                            ? 'Un Américain en France doit-il payer son impôt aux États-Unis et si oui comment s’y prendre ? Expand CPA vous accompagne !'
                            : 'If you’re an American living in France, knwoing where and how you owe tax can be confusing. Expand CPA, a French-American Accounting Firm, can help.' ||
                              'Un Américain en France doit-il payer son impôt aux États-Unis et si oui comment s’y prendre ? Expand CPA vous accompagne !'
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
                    coverImage={adminServicesDetailBanner}
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
                    icon={fiscaliteUS}
                    textContent={
                        <>
                            <Subtitle>{t('declaration_revenu')}</Subtitle>
                            <Heading>{t('feature1')}</Heading>
                            <Heading>{t('feature2')}</Heading>
                            <Heading>{t('feature3')}</Heading>
                            <Heading>{t('feature4')}</Heading>
                            <Heading>{t('feature5')}</Heading>
                            <Subtitle>{t('expatriation')}</Subtitle>
                            <Heading>{t('feature6')}</Heading>
                            <Heading>{t('feature7')}</Heading>
                            <Subtitle>{t('conseils')}</Subtitle>
                            <Heading>{t('feature8')}</Heading>
                            <Heading>{t('feature9')}</Heading>
                            <Heading>{t('feature10')}</Heading>
                        </>
                    }
                />

                <InfiniteSlider />

                <JoinOurTeamBanner />

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('demande_itin')}</Slogan>

                        <Paragraph>{t('demande_itin_text')}</Paragraph>
                        <Slogan>{t('missions')}</Slogan>
                        <BulletList>
                            <li>{t('mission1')}</li>
                            <li>{t('mission2')}</li>
                            <li>{t('mission3')}</li>
                            <li>{t('mission4')}</li>
                        </BulletList>

                        <Slogan>{t('devez-vous_itin')}</Slogan>
                        <BulletList>
                            <li>{t('devez-vous_itin1')}</li>
                            <li>{t('devez-vous_itin2')}</li>
                            <li>{t('devez-vous_itin3')}</li>
                            <li>{t('devez-vous_itin4')}</li>
                            <li>{t('devez-vous_itin5')}</li>
                            <li>{t('devez-vous_itin6')}</li>
                            <li>{t('devez-vous_itin7')}</li>
                        </BulletList>
                    </TextContent>
                </TextContentContainer>

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
                            <b>{t('section2_bold3')}</b>
                            {t('section2_text4')}
                        </Paragraph>
                    </TextContent>
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section2_subtitle2')}</Slogan>

                        <Paragraph>
                            {t('section2_text5')}
                            <b>{t('section2_bold4')}</b>
                            {t('section2_text6')}
                        </Paragraph>

                        <Paragraph>{t('section2_text7')}</Paragraph>

                        <BulletList>
                            <li>
                                {t('section2_bullet1')}
                                <b>{t('section2_bullet1_2')}</b>
                                {t('section2_bullet1_3')}
                            </li>

                            <li>
                                <b>{t('section2_bullet2')}</b>
                                {t('section2_bullet2_2')}
                            </li>

                            <li>
                                <b> {t('section2_bullet3')}</b>
                                {t('section2_bullet3_2')}
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
                    </TextContent>
                    <Divider />
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section3_title')}</Slogan>
                        <Paragraph>{t('section3_text1')}</Paragraph>
                        <Paragraph>{t('section3_text2')}</Paragraph>

                        <BulletList>
                            <li>
                                <b> {t('section3_bullet1')}</b>
                                {t('section3_bullet1_2')}
                            </li>

                            <li>
                                <b> {t('section3_bullet2')}</b>
                                {t('section3_bullet2_2')}
                            </li>

                            <li>
                                <b> {t('section3_bullet3')}</b>
                                {t('section3_bullet3_2')}
                                <b> {t('section3_bullet3_3')}</b>
                                {t('section3_bullet3_4')}
                            </li>

                            <li>
                                <b> {t('section3_bullet4')}</b>
                                {t('section3_bullet4_2')}
                                <b> {t('section3_bullet4_3')}</b>
                                {t('section3_bullet4_4')}
                            </li>
                        </BulletList>
                    </TextContent>
                    <Divider />
                </TextContentContainer>

                <TextContentContainer>
                    <SectionImage>
                        <BackgroundColor color='#0657CF'>
                            <ImageWrapper src={'/adminServices.png'} />
                        </BackgroundColor>
                        <div className='text-content'>
                            <h1>{t('section4_title')}</h1>
                            <p>
                                {t('section4_text1')}
                                <b>{t('section4_bold1')}</b>
                                {t('section4_text2')}
                            </p>
                        </div>
                    </SectionImage>
                    <Divider />
                </TextContentContainer>

                <TextContentContainer>
                    <TextContent>
                        <Slogan>{t('section4_subtitle1')}</Slogan>

                        <Paragraph>
                            {t('section4_text3')}
                            <b>{t('section4_bold2')}</b>
                        </Paragraph>

                        <BulletList>
                            <li>{t('section4_bullet1')}</li>

                            <li>{t('section4_bullet2')}</li>
                        </BulletList>

                        <Paragraph>
                            {t('section4_text4')}
                            <b>{t('section4_bold3')}</b>
                            {t('section4_text5')}
                        </Paragraph>

                        <Slogan>{t('section4_subtitle2')}</Slogan>

                        <Paragraph>
                            <b>{t('section4_bold4')}</b>
                            {t('section4_text6')}
                        </Paragraph>

                        <Slogan>{t('section4_subtitle3')}</Slogan>

                        <Paragraph>
                            {t('section4_text7')}
                            <b>{t('section4_bold5')}</b>
                            {t('section4_text8')}
                        </Paragraph>

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
                                {t('section4_bullet8')}
                                <b>{t('section4_bullet8_2')}</b>
                                {t('section4_bullet8_3')}
                            </li>
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

                        <Paragraph>
                            {t('section5_text3')}
                            <b>{t('section5_bold2')}</b>
                            {t('section5_text4')}
                        </Paragraph>

                        <Paragraph>
                            {t('section5_text5')}
                            <b>{t('section5_bold3')}</b>
                            {t('section5_text6')}
                        </Paragraph>

                        <Paragraph>
                            {t('section5_text7')}
                            <b>{t('section5_bold4')}</b>
                            {t('section5_text8')}
                            <b>{t('section5_bold5')}</b>
                        </Paragraph>
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
            ...(await serverSideTranslations(locale, ['usaTax', 'common'])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default UsaTax

const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
    display: flex;
    justify-content: start;
    color: #1b1464;
    @media screen and (min-width: 320px) {
        font-size: 18px;
    }
    @media screen and (min-width: 375px) {
        font-size: 24px;
    }
    @media screen and (min-width: 768px) {
        font-size: 32px;
    }
`
