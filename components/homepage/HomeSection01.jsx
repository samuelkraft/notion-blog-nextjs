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
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { RoundedButton } from './HeroHomePage'

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
                <HomeSection01Wrapper>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <Tag>
                            <span>{t('whyUs')}</span>
                        </Tag>
                        <SloganSection01
                            initial={{ y: 200, opacity: 0.5 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            {t('section01_title')}
                        </SloganSection01>
                        <motion.div
                            initial={{ y: 200, opacity: 0.5 }}
                            animate={{
                                y: 0,
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
                        <FeaturesCard>
                            <Image
                                src={comptable}
                                alt='comptable_dedie'
                            />
                            <div className='card_text-content'>
                                {t('comptable_dedie')}
                            </div>
                        </FeaturesCard>
                        <FeaturesCard>
                            <Image
                                src={papier}
                                alt='administrativeServices'
                            />
                            <div className='card_text-content'>
                                {t('administrativeServices')}
                            </div>
                        </FeaturesCard>
                        <FeaturesCard2>
                            <Image
                                src={embauche}
                                alt='expertiseRH'
                            />
                            <div className='card_text-content'>
                                {t('expertiseRH')}
                            </div>
                        </FeaturesCard2>
                        <FeaturesCard2>
                            <Image
                                src={teamwork}
                                alt='conseilJuridique'
                            />
                            <div className='card_text-content'>
                                {t('conseilJuridique')}
                            </div>
                        </FeaturesCard2>
                        <FeaturesCard>
                            <Image
                                src={fiscal}
                                alt='conseillerFiscal'
                            />
                            <div className='card_text-content'>
                                {t('conseillerFiscal')}
                            </div>
                        </FeaturesCard>
                        <FeaturesCard>
                            <Image
                                src={audit}
                                alt='auditServices'
                            />
                            <div className='card_text-content'>
                                {t('auditServices')}
                            </div>
                        </FeaturesCard>
                        <BackgroundBlur />
                    </FeaturesCardContainer>
                </HomeSection01Wrapper>
            </HomeSection01Container>
            <RelativeContainer />
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
`

export const HomeSection01Container = styled(motion.div)`
    padding: 2rem;
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

export const HomeSection01Wrapper = styled(HeroWrapper)``

export const HeadingSection01 = styled(Heading)`
    margin-top: 2rem;
    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 493.31px;
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
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    /* or 138% */

    letter-spacing: 0.327px;

    /* Bleu foncé */

    color: #1b1464;

    @media screen and (min-width: 1024px) {
        width: 30rem;
    }
    @media screen and (min-width: 1200px) {
        width: 37rem;
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
        gap: 34px;
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
const BackgroundBlur = styled.div`
    position: absolute;
    width: 281.87px;
    height: 281.87px;
    left: 20;
    top: 20;

    background: rgba(6, 87, 207, 0.3);
    filter: blur(195px);
`
const RelativeContainer = styled.div`
    position: relative;
`
