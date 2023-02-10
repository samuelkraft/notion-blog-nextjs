import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { HeroContainer } from '../../../components/homepage/HeroHomePage'
import HeaderMegaMenu from '../../../components/header/HeaderMegaMenu'
import Footer from '../../../components/footer/Footer'
import Image from 'next/image'
import {
    LayoutColumn,
    Slogan,
    Subtitle,
    RowWrapper,
    Heading,
    TextContent,
    FeaturesContainer,
    Feature,
} from '../administrative-services'

import feat1 from '../../../images/taxServices/Group1.svg'
import feat2 from '../../../images/taxServices/Group2.svg'
import feat3 from '../../../images/taxServices/Group3.svg'
import feat4 from '../../../images/taxServices/Group4.svg'
import feat5 from '../../../images/taxServices/Group5.svg'
import feat6 from '../../../images/taxServices/Group6.svg'
import Group7 from '../../../images/taxServices/Group7.svg'
import feat7 from '../../../images/administrativeServices/feat7.svg'

import check from '../../../images/check.svg'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'
import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'
import AboutSection05 from '../../../components/about/AboutSection05'
import logoArrow from '../../../images/logo_arrow.png'

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
                        <Subtitle>{t('fiscalite_courante')}</Subtitle>
                    </Heading>

                    <Heading>
                        <FeaturesContainer>
                            <Feature>
                                <Image
                                    src={feat1}
                                    alt='feat1'
                                />
                                <p>{t('feature1_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat2}
                                    alt='feat2'
                                />
                                <p>{t('feature2_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat3}
                                    alt='feat3'
                                />
                                <p>{t('feature3_')}</p>
                            </Feature>
                        </FeaturesContainer>
                    </Heading>

                    <Heading>
                        <Subtitle>{t('controle_fiscal')}</Subtitle>
                    </Heading>

                    <Heading>
                        <FeaturesContainer>
                            <Feature>
                                <Image
                                    src={feat4}
                                    alt='feat4'
                                />
                                <p>{t('feature4_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat5}
                                    alt='feat5'
                                />
                                <p>{t('feature5')}</p>
                            </Feature>
                        </FeaturesContainer>
                    </Heading>

                    <Heading>
                        <Subtitle>{t('notre_specialite')}</Subtitle>
                    </Heading>

                    <Heading>
                        <FeaturesContainer>
                            <Feature>
                                <Image
                                    src={feat6}
                                    alt='feat6'
                                />
                                <p>{t('feature6')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={Group7}
                                    alt='feat7'
                                />
                                <p>{t('feature7')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat7}
                                    alt='feat8'
                                />
                                <p>{t('feature8')}</p>
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
                    <div>
                        <LayoutColumn>
                            <TextContent>
                                <Slogan>{t('section2_title')}</Slogan>
                                <Heading>
                                    <b>{t('section2_bold1')}</b>
                                    {t('section2_text1')}
                                </Heading>

                                <Subtitle>{t('section2_subtitle1')}</Subtitle>

                                {/* <Heading>
                                    <b>{t('section2_bold2')}</b>
                                    {t('section2_text2')}
                                </Heading> */}

                                <Heading>
                                    <b>{t('section2_bold3')}</b>
                                    {t('section2_text3')}
                                </Heading>

                                <Subtitle>{t('section2_subtitle2')}</Subtitle>

                                <Heading>{t('section2_text7')}</Heading>

                                <Heading>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section2_bullet1')}
                                            <b>{t('section2_bullet1_2')}</b>
                                            {t('section2_bullet1_3')}
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
                                            {t('section2_bullet2')}
                                            <b>{t('section2_bullet2_2')}</b>
                                            {t('section2_bullet2_3')}
                                        </Heading>
                                    </RowWrapper>

                                    {/* <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet3')}
                                            <b>{t('section2_bullet3_2')}</b>
                                            {t('section2_bullet3_3')}
                                        </Heading>
                                    </RowWrapper> */}

                                    <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet4')}
                                            <b>{t('section2_bullet4_2')}</b>
                                            {t('section2_bullet4_3')}
                                        </Heading>
                                    </RowWrapper>

                                    <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet5')}
                                            <b>{t('section2_bullet5_2')}</b>
                                            {t('section2_bullet5_3')}
                                        </Heading>
                                    </RowWrapper>

                                    <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet6')}
                                            <b>{t('section2_bullet6_2')}</b>
                                            {t('section2_bullet6_3')}
                                        </Heading>
                                    </RowWrapper>
                                    <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet7')}
                                            <b>{t('section2_bullet7_2')}</b>
                                            {t('section2_bullet7_3')}
                                        </Heading>
                                    </RowWrapper>
                                    {/* <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                         <Heading>
                                            {t('section2_bullet8')}
                                            <b>{t('section2_bullet8_2')}</b>
                                            {t('section2_bullet8_3')}
                                        </Heading> 
                                    </RowWrapper> */}
                                    <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />

                                        <Heading>
                                            {t('section2_bullet9')}
                                            <b>{t('section2_bullet9_2')}</b>
                                            {t('section2_bullet9_3')}
                                        </Heading>
                                    </RowWrapper>
                                    {/* <RowWrapper>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                         <Heading>
                                            {t('section2_bullet10')}
                                            <b>{t('section2_bullet10_2')}</b>
                                            {t('section2_bullet10_3')}
                                        </Heading>
                                    </RowWrapper> */}
                                </Heading>
                            </TextContent>
                        </LayoutColumn>
                    </div>
                </HeroContainer>

                <HeroContainer>
                    <div>
                        <LayoutColumn>
                            <TextContent>
                                <Slogan>{t('section3_title')}</Slogan>
                                <Heading>
                                    {t('section3_text1')}
                                    <b>{t('section3_bold1')}</b>
                                </Heading>

                                <Subtitle>{t('section3_subtitle')}</Subtitle>

                                <Heading>
                                    <b>{t('section3_bold2')}</b>
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
                                            {t('section3_bullet1')}
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
                                            {t('section3_bullet2')}
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
                                            {t('section3_bullet3')}
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
                                            {t('section3_bullet4')}
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
                                            {t('section3_bullet5')}
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
                                            {t('section3_bullet6')}
                                        </Heading>
                                    </RowWrapper>
                                </Heading>

                                {/* <Subtitle>{t('section3_subtitle2')}</Subtitle>

                                <Heading>
                                    <b>{t('section3_bold4')}</b>
                                    {t('section3_text8')}
                                </Heading>

                                <Heading>
                                    {t('section3_text9')}
                                    <b>{t('section3_bold5')}</b>
                                    {t('section3_text10')}
                                </Heading> */}
                            </TextContent>
                        </LayoutColumn>
                    </div>
                </HeroContainer>

                <HeroContainer>
                    <div>
                        <LayoutColumn>
                            <TextContent>
                                <Slogan>{t('section4_title')}</Slogan>
                                <Heading>
                                    {t('section4_text1')}
                                    <b>{t('section4_bold1')}</b>
                                    {t('section4_text2')}
                                </Heading>

                                <Subtitle>{t('section4_subtitle1')}</Subtitle>

                                <Heading>
                                    {t('section4_text3')}
                                    <b>{t('section4_bold2')}</b>
                                    {t('section4_text4')}
                                    <b>{t('section4_bold3')}</b>
                                    {t('section4_text5')}
                                </Heading>

                                <Subtitle>{t('section4_subtitle2')}</Subtitle>

                                {/* <Heading>
                                    <b>{t('section4_bold4')}</b>
                                    {t('section4_text6')}
                                </Heading> */}

                                <Heading>
                                    <b>{t('section4_bold5')}</b>
                                    {t('section4_text7')}
                                </Heading>

                                <Subtitle>{t('section4_subtitle3')}</Subtitle>

                                <Heading>
                                    {t('section4_text8')}
                                    <b>{t('section4_bold6')}</b>
                                    {t('section4_text9')}
                                </Heading>
                            </TextContent>
                        </LayoutColumn>
                    </div>
                </HeroContainer>

                <HeroContainer>
                    <LayoutColumn>
                        <TextContent>
                            <Slogan>{t('section5_title')}</Slogan>

                            <Heading>
                                {t('section5_text1')}
                                <b>{t('section5_bold1')}</b>
                                {t('section5_text2')}
                                <b>{t('section5_bold2')}</b>
                            </Heading>

                            <Heading>
                                {t('section5_text3')}
                                <b>{t('section5_bold3')}</b>
                                {t('section5_text4')}
                            </Heading>

                            <Heading>
                                {t('section5_text5')}
                                <b>{t('section5_bold4')}</b>
                                {t('section5_text6')}
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
                'taxServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default TaxServices
