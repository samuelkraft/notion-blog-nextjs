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

import styled from 'styled-components'
import check from '../../../images/check.svg'
import feat1 from '../../../images/taxServices/Group1.svg'
import feat3 from '../../../images/taxServices/Group6.svg'
import feat5 from '../../../images/frenchTax/feat2.svg'
import feat6 from '../../../images/frenchTax/feat3.svg'
import feat7 from '../../../images/taxServices/Group5.svg'
import feat4 from '../../../images/administrativeServices/feat7.svg'
import circle1 from '../../../images/circle_1.svg'
import circle2 from '../../../images/circle_2.svg'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../../lib/animation'
import Head from 'next/head'
import InfiniteSlider from '../../../components/slider/InfiniteSlider'
import AboutSection05 from '../../../components/about/AboutSection05'
import logoArrow from '../../../images/logo_arrow.png'

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
                                <p>{t('feature1_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat3}
                                    alt='feat2'
                                />
                                <p>{t('feature2_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat4}
                                    alt='feat3'
                                />
                                <p>{t('feature3_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={feat7}
                                    alt='feat4'
                                />
                                <p>{t('feature4_')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={circle1}
                                    alt='feat5'
                                />
                                <p>{t('feature5')}</p>
                            </Feature>
                            <Feature>
                                <Image
                                    src={circle2}
                                    alt='feat6'
                                />
                                <p>{t('feature6')}</p>
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
                                </Heading>
                                <Heading>
                                    <b>{t('section2_bold3')}</b>
                                    {t('section2_text5')}
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
                                    <Heading>{t('section3_text1')}</Heading>
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
                                                <b>{t('section3_bold1')}</b>
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
                                                {t('section3_bullet2')}
                                                <b>{t('section3_bold2')}</b>
                                                {t('section3_bullet2_2')}
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
                                                <b>{t('section3_bold3')}</b>
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
                                                <b>{t('section3_bold4')}</b>
                                                {t('section3_bullet4_2')}
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
                                                <b>{t('section3_bold5')}</b>
                                                {t('section3_bullet5_2')}
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
                                                <b>{t('section3_bold6')}</b>
                                                {t('section3_bullet6_2')}
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
                                                {t('section3_bullet11')}
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
                                                {t('section3_bullet12')}
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
                                                {t('section3_bullet7')}
                                                <b>{t('section3_bold7')}</b>
                                                {t('section3_bullet7_2')}
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
                                                {t('section3_bullet8')}
                                                <b>{t('section3_bold8')}</b>
                                                {t('section3_bullet8_2')}
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
                                                {t('section3_bullet9')}
                                                <b>{t('section3_bold9')}</b>
                                                {t('section3_bullet9_2')}
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
                                                {t('section3_bullet10')}
                                                <b>{t('section3_bold10')}</b>
                                                {t('section3_bullet10_2')}
                                            </Heading>
                                        </RowWrapper>
                                    </Heading>
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
                                </Heading>

                                <Subtitle>{t('section4_subtitle')} </Subtitle>

                                <Heading>
                                    <b>{t('section4_bold2')}</b>
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

                                    <RowWrapper className=''>
                                        <Image
                                            src={logoArrow}
                                            alt='check1'
                                            width={50}
                                            height={50}
                                        />
                                        <Heading>
                                            {t('section4_bullet8')}
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
                                            {t('section4_bullet9')}
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
                                            {t('section4_bullet10')}
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
                                <b>{t('section5_bold2')}</b>
                                {t('section5_text3')}
                                <b>{t('section5_bold3')}</b>
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
                                    <Heading>{t('section6_bullet4')}</Heading>
                                </RowWrapper>
                                <RowWrapper className=''>
                                    <Image
                                        src={logoArrow}
                                        alt='check1'
                                        width={50}
                                        height={50}
                                    />
                                    <Heading>{t('section6_bullet5')}</Heading>
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

                            <Subtitle>{t('section8_title')}</Subtitle>

                            <Heading>{t('section8_text1')}</Heading>

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
                                        <b>{t('section8_bold1')}</b>
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
                                        <b>{t('section8_bold2')}</b>
                                        {t('section8_bullet_2')}
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
                                        <b>{t('section8_bold3')}</b>
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
