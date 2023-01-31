import React from 'react'

import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'
import styled from 'styled-components'

// Animation
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import { Slogan, Heading, HeroWrapper } from './HeroHomePage'

import circle_1 from '../../images/circle_1.svg'
import circle_2 from '../../images/circle_2.svg'
import circle_3 from '../../images/circle_3.svg'
import circle_4 from '../../images/circle_4.svg'
import circle_5 from '../../images/circle_5.svg'
import circle_6 from '../../images/circle_6.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

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
                        <HeadingSection01>
                            <h2>
                                {t('section01_heading_pt3')}
                                <b>{t('section01_bold2')}</b>
                                {t('section01_heading_pt4')}
                            </h2>
                        </HeadingSection01>
                        <HeadingSection01 style={{ marginBottom: '3rem' }}>
                            <h2>
                                {t('our')}
                                <b>{t('section01_bold3')}</b>
                                {t('section01_heading_pt5')}
                            </h2>
                        </HeadingSection01>
                        <Link href='/services'>
                            <GradientButton
                                gradientColor='#0657CF'
                                type='button'
                                width={200}
                            >
                                {t('readMore')}
                            </GradientButton>
                        </Link>
                    </motion.div>
                </motion.div>
                <FeaturesCardContainer>
                    <FeaturesCard>
                        <Image
                            src={circle_1}
                            alt='comptable_dedie'
                        />
                        <div className='card_text-content'>
                            {t('comptable_dedie')}
                        </div>
                    </FeaturesCard>
                    <FeaturesCard2>
                        <Image
                            src={circle_2}
                            alt='administrativeServices'
                        />
                        <div className='card_text-content'>
                            {t('administrativeServices')}
                        </div>
                    </FeaturesCard2>
                    <FeaturesCard3>
                        <Image
                            src={circle_3}
                            alt='expertiseRH'
                        />
                        <div className='card_text-content'>
                            {t('expertiseRH')}
                        </div>
                    </FeaturesCard3>
                    <FeaturesCard4>
                        <Image
                            src={circle_4}
                            alt='conseilJuridique'
                        />
                        <div className='card_text-content'>
                            {t('conseilJuridique')}
                        </div>
                    </FeaturesCard4>
                    <FeaturesCard5>
                        <Image
                            src={circle_5}
                            alt='conseillerFiscal'
                        />
                        <div className='card_text-content'>
                            {t('conseillerFiscal')}
                        </div>
                    </FeaturesCard5>
                    <FeaturesCard6>
                        <Image
                            src={circle_6}
                            alt='auditServices'
                        />
                        <div className='card_text-content'>
                            {t('auditServices')}
                        </div>
                    </FeaturesCard6>
                </FeaturesCardContainer>
            </HomeSection01Wrapper>
        </HomeSection01Container>
    )
}

export default HomeSection01

export const HomeSection01Container = styled(motion.div)`
    padding: 2rem;
    @media screen and (min-width: 768px) {
        padding: 3rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 3rem 12%;
    }
    @media screen and (min-width: 1200px) {
        padding: 3rem 16%;
    }

    @media screen and (min-width: 1440px) {
        padding: 3rem 20%;
    }
    @media screen and (min-width: 1800px) {
        padding: 3rem 20%;
    }

    @media screen and (min-width: 2100px) {
        padding: 3rem 20%;
    }
    @media screen and (min-width: 2500px) {
        padding: 3rem 25%;
    }
`

export const HomeSection01Wrapper = styled(HeroWrapper)`
    .text-content {
        @media screen and (min-width: 1024px) {
            margin-top: 0rem;
            width: 100%;
        }

        @media screen and (min-width: 1440px) {
            margin-top: 0rem;
            gap: 2rem;
            width: 100%;
        }
    }

    @media screen and (min-width: 768px) {
        flex-flow: column;
    }

    @media screen and (min-width: 1024px) {
        flex-flow: column;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 0rem;
    }
    @media screen and (min-width: 1800px) {
        gap: 0rem;
    }
`

export const HeadingSection01 = styled(Heading)`
    margin-top: 2rem;
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #1b1464;
        line-height: 29px;
    }

    @media screen and (max-width: 465px) {
        h2 {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 768px) {
        h2 {
            font-size: 20px;
        }
    }

    @media screen and (min-width: 1024px) {
        h2 {
            font-size: 22px;
            width: 100%;
        }
        width: 100%;
    }

    @media screen and (min-width: 1200px) {
        h2 {
            font-size: 20px;
        }
        width: 80%;
    }
`

export const SloganSection01 = styled(Slogan)`
    font-family: 'AllRoundGothic-Demi';
    font-size: 42px;
    color: #1b1464;
    line-height: 1.2;

    @media screen and (max-width: 465px) {
        font-size: 32px;
    }

    @media screen and (min-width: 768px) {
        font-size: 38px;
        width: 45rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 34px;
        width: 35rem;
    }
    @media screen and (min-width: 1440px) {
        font-size: 38px;
        width: 35rem;
    }
`

export const FeaturesCardContainer = styled.div`
    position: relative;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
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
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 300px 300px;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 0.4fr 0.4fr;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        justify-self: start;
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
    }

    margin-top: 5rem;
`

export const FeaturesCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2.5px solid #1b1464;
    border-radius: 51px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    width: 300px;
    height: 280px;
    position: relative;

    .card_text-content {
        margin-top: 2rem;
        font-family: 'AllRoundGothic-Demi';
        font-weight: 400;
        font-size: 32px;
        color: #1b1464;
    }

    @media screen and (min-width: 320px) {
        width: 300px;
        height: 280px;
    }

    @media screen and (min-width: 1200px) {
        width: 260px;
        height: 220px;
        padding: 2rem;

        .card_text-content {
            margin-top: 1rem;
            font-size: 22px;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 260px;
        height: 220px;
        padding: 3rem;

        .card_text-content {
            margin-top: 1rem;
            font-size: 26px;
        }
    }
`

const FeaturesCard2 = styled(FeaturesCard)`
    transform: translateY(-3rem);
    @media screen and (min-width: 320px) {
        transform: translateY(0);
    }

    @media screen and (min-width: 768px) {
        transform: translateY(-3rem);
    }
`
const FeaturesCard3 = styled(FeaturesCard)``
const FeaturesCard4 = styled(FeaturesCard2)``
const FeaturesCard5 = styled(FeaturesCard)``
const FeaturesCard6 = styled(FeaturesCard2)``

export const Tag = styled.div`
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.08em;
    width: 60%;
    border: 1.5px solid #000000;
    border-radius: 16px;
    padding: 0.5rem 1rem;
    margin: 2rem 0;
`
