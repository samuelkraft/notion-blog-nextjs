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

import check from '../../../images/check.svg'

import feat1 from '../../../images/frenchTax/feat1.svg'
import feat8 from '../../../images/taxServices/Group6.svg'
import feat2 from '../../../images/administrativeServices/feat2.svg'
import feat3 from '../../../images/administrativeServices/feat3.svg'
import feat4 from '../../../images/administrativeServices/feat4.svg'
import feat6 from '../../../images/administrativeServices/feat6.svg'
import feat7 from '../../../images/administrativeServices/feat7.svg'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'

import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'
import AboutSection05 from '../../../components/about/AboutSection05'
import logoArrow from '../../../images/logo_arrow.png'

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
                                    src={feat3}
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
                                    src={feat8}
                                    alt='feat3'
                                />
                                <p>{t('feature3_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat1}
                                    alt='feat4'
                                />
                                <p>{t('feature4_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat6}
                                    alt='feat5'
                                />
                                <p>{t('feature5')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat4}
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
                    <div>
                        <LayoutColumn>
                            <TextContent>
                                <Slogan>{t('section2_title')}</Slogan>
                                <Heading>
                                    {t('section2_text1')}
                                    <b>{t('section2_bold1')}</b>
                                    {t('section2_text2')}
                                </Heading>
                                <Subtitle>{t('section2_subtitle1')}</Subtitle>
                                <Heading>
                                    {t('section2_text3')}
                                    <b>{t('section2_bold2')}</b>
                                    {t('section2_text4')}
                                </Heading>

                                <Heading>
                                    {t('section2_text5')}
                                    <b>{t('section2_bold3')}</b>
                                    {t('section2_text6')}
                                    <b>{t('section2_bold4')}</b>
                                    {t('section2_text7')}
                                </Heading>

                                <Subtitle>{t('section2_subtitle2')}</Subtitle>

                                <Heading>{t('section2_text8')}</Heading>

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

                                    <RowWrapper>
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
                                    </RowWrapper>

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
                                    {t('section3_text2')}
                                </Heading>

                                <Subtitle>{t('section3_subtitle')}</Subtitle>

                                <Heading>
                                    {t('section3_text3')}
                                    <b>{t('section3_bold2')}</b>
                                    {t('section3_text4')}
                                </Heading>

                                <Heading>{t('section3_text5')}</Heading>

                                <Heading>
                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            <b>{t('section3_bullet1')}</b>
                                            {t('section3_bullet1_2')}
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
                                            <b>{t('section3_bullet2')}</b>
                                            {t('section3_bullet2_2')}
                                        </Heading>
                                    </RowWrapper>
                                </Heading>

                                <Heading>
                                    {t('section3_text6')}
                                    <b>{t('section3_bold3')}</b>
                                    {t('section3_text7')}
                                </Heading>
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

                                <Heading>
                                    {t('section4_text3')}
                                    <b>{t('section4_bold2')}</b>
                                    {t('section4_text4')}
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
                                            {t('section4_bullet1')}
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
                                            {t('section4_bullet7')}
                                        </Heading>
                                    </RowWrapper>
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
                                        {t('section5_bullet1')}
                                        <b>{t('section5_bullet1_2')}</b>
                                        {t('section5_bullet1_3')}
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
                                        {t('section5_bullet2')}
                                        <b>{t('section5_bullet2_2')}</b>
                                        {t('section5_bullet2_3')}
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
                                        {t('section5_bullet3')}
                                        <b>{t('section5_bullet3_2')}</b>
                                        {t('section5_bullet3_3')}
                                    </Heading>
                                </RowWrapper>
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
                'auditServices',
                'common',
            ])),
        },
        revalidate: 60,
    }
}
export { getStaticProps }

export default AuditServices
