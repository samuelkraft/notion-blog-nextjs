import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

// Animation
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import { Slogan, Heading, HeroWrapper } from './HeroHomePage'

import comptable from '../../images/comptable.svg'
import embauche from '../../images/embauche.svg'
import fiscal from '../../images/fiscal.svg'
import papier from '../../images/papier.svg'
import audit from '../../images/audit.svg'
import teamwork from '../../images/teamwork.svg'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { RoundedButton } from './HeroHomePage'
import qualite from '../../images/qualite.svg'
import Link from 'next/link'

const HomeSection01 = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <Background>
            <HomeSection01Container
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: 'easeInOut',
                    when: 'afterChildren',
                }}
                ref={ref}
            >
                <Wrapper01>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <Tag>
                            <span>{t('whyUs')}</span>
                        </Tag>
                        <Slogan01
                            initial={{ opacity: 0.5 }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            {t('section01_title')}
                        </Slogan01>
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            <HeadingSection01>
                                <h2>
                                    {t('section01_heading_pt1')}
                                    <b>{t('section01_bold1')}</b>
                                    {t('section01_heading_pt2')}
                                </h2>
                            </HeadingSection01>
                            <HeadingSection01 style={{ marginBottom: '3rem' }}>
                                <h2>
                                    {t('section01_heading_pt3')}
                                    <b>{t('section01_bold2')}</b>
                                    {t('section01_heading_pt4')}
                                </h2>
                            </HeadingSection01>

                            <div
                                className=''
                                style={{ width: '156px' }}
                            >
                                <RoundedButton href='/services'>
                                    {t('readMore')}
                                </RoundedButton>
                            </div>
                        </motion.div>
                    </motion.div>
                    <FeaturesCardContainer>
                        <Link href='/services/accounting-services'>
                            <FeaturesCard>
                                <Image
                                    src={comptable}
                                    alt='comptable_dedie'
                                />
                                <div className='card_text-content'>
                                    {t('comptable_dedie')}
                                </div>
                            </FeaturesCard>
                        </Link>
                        <Link href='/services/administrative-services'>
                            <FeaturesCard>
                                <Image
                                    src={papier}
                                    alt='administrativeServices'
                                />
                                <div className='card_text-content'>
                                    {t('administrativeServices')}
                                </div>
                            </FeaturesCard>
                        </Link>
                        <Link href='/services/payroll-services'>
                            <FeaturesCard2>
                                <Image
                                    src={embauche}
                                    alt='expertiseRH'
                                />
                                <div className='card_text-content'>
                                    {t('expertiseRH')}
                                </div>
                            </FeaturesCard2>
                        </Link>
                        <Link href='/services/legal-services'>
                            <FeaturesCard2>
                                <Image
                                    src={teamwork}
                                    alt='conseilJuridique'
                                />
                                <div className='card_text-content'>
                                    {t('conseilJuridique')}
                                </div>
                            </FeaturesCard2>
                        </Link>
                        <Link href='/services/tax-services'>
                            <FeaturesCard>
                                <Image
                                    src={fiscal}
                                    alt='conseillerFiscal'
                                />
                                <div className='card_text-content'>
                                    {t('conseillerFiscal')}
                                </div>
                            </FeaturesCard>
                        </Link>
                        <Link href='/services/audit-services'>
                            <FeaturesCard>
                                <Image
                                    src={audit}
                                    alt='auditServices'
                                />
                                <div className='card_text-content'>
                                    {t('auditServices')}
                                </div>
                            </FeaturesCard>
                        </Link>
                        <BackgroundBlur />
                    </FeaturesCardContainer>
                </Wrapper01>
                <AbsoluteBanner>
                    <div className='text-content'>
                        <p>
                            {t('our')}
                            <b>{t('section01_bold3')}</b>
                            {t('section01_heading_pt5')}
                        </p>
                    </div>
                    <Image
                        src={qualite}
                        alt='qualite'
                        fill
                    />
                </AbsoluteBanner>
            </HomeSection01Container>
        </Background>
    )
}

export default HomeSection01

const Background = styled.div`
    background: linear-gradient(
        360deg,
        rgba(217, 224, 236, 0.25) 0%,
        rgba(217, 224, 236, 0) 119.76%
    );
    border-radius: 0px 0px 40px 0px;
    position: relative;

    @media screen and (max-width: 1024px) {
        padding-bottom: 2rem;
    }
`

export const HomeSection01Container = styled(motion.div)`
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding: 3rem;
    }
`

export const HomeSection01Wrapper = styled(HeroWrapper)`
    @media screen and (min-width: 1024px) {
        flex-flow: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 2rem;
    }
    @media screen and (min-width: 1440px) {
        flex-flow: row;
        gap: 4rem;
    }
`

const Wrapper01 = styled(motion.div)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    @media screen and (max-width: 465px) {
        flex-flow: column;
    }

    @media screen and (min-width: 768px) {
        flex-flow: column;
    }
    @media screen and (min-width: 1024px) {
        flex-flow: row;
        justify-content: space-between;
        gap: 1em;
    }
    @media screen and (min-width: 1200px) {
        flex-flow: row;
        justify-content: space-between;
        gap: 10rem;
    }
    @media screen and (min-width: 1440px) {
        flex-flow: row;
        gap: 11rem;
    }
`

export const HeadingSection01 = styled(Heading)`
    margin-top: 25px;
    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1b1464;

        @media screen and (min-width: 1024px) {
            width: 380px;
        }

        @media screen and (min-width: 1200px) {
            width: 493.31px;
        }
    }
`

export const SloganSection01 = styled(Slogan)`
    /* Bleu foncé */

    color: #1b1464;

    @media screen and (min-width: 1024px) {
        font-size: 35px;
        line-height: 55px;
        width: 28rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 40px;
        line-height: 60px;
        width: 39rem;
    }
`

const Slogan01 = styled(Slogan)`
    color: #1b1464;

    @media screen and (min-width: 1024px) {
        font-size: 35px;
        line-height: 55px;
        width: 28rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 40px;
        line-height: 60px;
        width: 30rem;
    }
`

export const FeaturesCardContainer = styled.div`
    position: relative;
    grid-column-gap: 13.56px;
    grid-row-gap: 13.56px;
    z-index: 10;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;

    justify-items: center;
    justify-content: center;

    @media screen and (min-width: 320px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-self: center;
    }

    @media screen and (min-width: 768px) {
        grid-column-gap: 13.56px;
        grid-row-gap: 13.56px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 5rem;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 0.4fr 0.4fr;
        grid-column-gap: 13.56px;
        grid-row-gap: 13.56px;
        justify-self: start;
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 13.56px;
        grid-row-gap: 13.56px;
    }
`

export const FeaturesCard = styled(motion.div)`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 37px;
    gap: 10px;

    width: 256.69px;
    height: 147.76px;

    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.07);
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        width: 329px;
        height: 90px;
        padding: 20px 30px;
        justify-content: space-between;
    }

    .card_text-content {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.08em;
        color: #1b1464;
    }
`

const FeaturesCard2 = styled(FeaturesCard)`
    transform: translateX(-3rem);
    @media screen and (min-width: 320px) {
        transform: translateY(0);
    }

    @media screen and (min-width: 768px) {
        transform: translateX(-3rem);
    }
`

export const Tag = styled.div`
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 13px;
    letter-spacing: 0.08em;
    line-height: 22px;
    width: 60%;
    color: #0657cf;
`
export const BackgroundBlur = styled.div`
    position: absolute;
    width: 281.87px;
    height: 281.87px;
    left: 20;
    top: 20;

    background: rgba(6, 87, 207, 0.3);
    filter: blur(165px);
`
const RelativeContainer = styled.div`
    position: relative;
    height: 200px;
`
const AbsoluteBanner = styled.div`
    position: absolute;
    bottom: -80px;
    left: 50;

    width: 1000px;
    height: 160px;

    @media screen and (max-width: 1200px) {
        transform: translate(-100px, 0);
    }

    @media screen and (max-width: 1023px) {
        display: none;
    }

    .text-content {
        p {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #ffffff;
        }

        background: #1b1464;
        border-radius: 0px 0px 300px 0px;
        padding: 3rem;

        width: 650px;
        height: 110px;

        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        transform: translate(530px, 20px);

        @media screen and (max-width: 1400px) {
            width: 550px;
        }

        @media screen and (max-width: 1200px) {
            width: 500px;
        }
    }
`
