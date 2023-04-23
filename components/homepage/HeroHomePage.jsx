import GradientButton from '../button/GradientButton'
import styled from 'styled-components'
import Link from 'next/link'

// Animation
import { motion } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

const Hero = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    return (
        <HeroContainer>
            <HeroWrapper>
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Slogan>{t('slogan')}</Slogan>
                    <Heading>
                        <h2>{t('sloganSubtitle')}</h2>
                    </Heading>
                    <RowButtonContainer>
                        <RoundedButton
                            type='button'
                            href='/services'
                        >
                            {t('ourServices')}
                        </RoundedButton>
                        <UnderlinedButton href='/#contact'>
                            {t('contactUs')}
                        </UnderlinedButton>
                    </RowButtonContainer>
                </motion.div>
                <BlurCircleContainer>
                    <HeroImageContainer variants={fade}>
                        <ImageWrapper1
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.5,
                                default: {
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                },
                                scale: {
                                    type: 'spring',
                                    damping: 10,
                                    stiffness: 100,
                                    restDelta: 0.001,
                                },
                            }}
                        />
                        <ImageWrapper2
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.75,
                                default: {
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                },
                                scale: {
                                    type: 'spring',
                                    damping: 10,
                                    stiffness: 100,
                                    restDelta: 0.001,
                                },
                            }}
                        />
                        <ImageWrapper3
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 1,
                                default: {
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                },
                                scale: {
                                    type: 'spring',
                                    damping: 10,
                                    stiffness: 100,
                                    restDelta: 0.001,
                                },
                            }}
                        />
                        <ImageWrapper4
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 1.25,
                                default: {
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                },
                                scale: {
                                    type: 'spring',
                                    damping: 10,
                                    stiffness: 100,
                                    restDelta: 0.001,
                                },
                            }}
                        />
                    </HeroImageContainer>
                    <BlurCircleTopLeft />
                    <BlurCircleBottomLeft />
                </BlurCircleContainer>
            </HeroWrapper>
        </HeroContainer>
    )
}

export const HeroContainer = styled.div`
    min-height: 894.25px;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }

    @media screen and (min-width: 1200px) {
        margin-top: -60px;
    }
`

export const HeroWrapper = styled.div`
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
        gap: 2rem;
    }
    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 2rem;
    }
    @media screen and (min-width: 1440px) {
        flex-flow: row;
        gap: 5rem;
    }
`

export const Slogan = styled(motion.h1)`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #1b1464;
    letter-spacing: 0.327px;
    font-size: 25px;
    line-height: 36px;

    @media screen and (max-width: 465px) {
        font-size: 25px;
        line-height: 36px;
        width: 300px;
    }

    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 60px;
        width: 40rem;
    }
    @media screen and (min-width: 1024px) {
        width: 30rem;
    }
    @media screen and (min-width: 1200px) {
        line-height: 64px;
        font-size: 52px;

        width: 42rem;
    }
`

export const HeadingContainer = styled(motion.div)`
    margin: 1rem 0rem 1rem 0rem;
    position: relative;
`

export const Heading = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-flow: column;
    justify-content: start;
    font-size: 16px;

    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: black;
        line-height: 29px;

        @media screen and (max-width: 465px) {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }
    }
`

const RowButtonContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
`

export const HeroImageContainer = styled(motion.div)`
    position: relative;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto auto auto auto auto;
    z-index: 10;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
`

const ImageWrapper1 = styled(motion.div)`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    justify-self: end;

    width: 215.54px;
    height: 343.7px;
    border-radius: 25vw;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630fa7b82b57093487bddec2_img-header-01.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: -15px 16px 33px 3px rgba(0, 0, 0, 0.12);

    justify-self: start;

    @media screen and (max-width: 500px) {
        width: 160.54px;
        height: 325.7px;
    }

    @media screen and (max-width: 1023px) {
        justify-self: start;
    }

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
        justify-self: center;
    }
`

const ImageWrapper2 = styled(motion.div)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: center;

    width: 211.38px;
    height: 241.34px;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630fa828f520d85444c34d0a_img-header-02.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        width: 180.54px;
        height: 200.7px;
    }

    @media screen and (max-width: 1023px) {
        justify-self: start;
    }

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
        justify-self: start;
    }

    @media screen and (min-width: 1440px) {
    }
    @media screen and (min-width: 1800px) {
    }
`

const ImageWrapper3 = styled(motion.div)`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
    justify-self: end;

    width: 215.54px;
    height: 231.35px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630faaccf520d86023c36924_img-header-03.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        width: 180.54px;
        height: 200.7px;
    }

    @media screen and (max-width: 1023px) {
        justify-self: start;
    }
    @media screen and (min-width: 1024px) and (max-width: 1200px) {
        justify-self: center;
    }
    @media screen and (min-width: 1440px) {
    }
    @media screen and (min-width: 1800px) {
    }
`
const ImageWrapper4 = styled(motion.div)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 7;
    justify-self: center;

    width: 213.04px;
    height: 322.06px;
    border-radius: 25vw;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630fab901bd7f91a91abac3b_img-header-04.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        width: 160.54px;
        height: 325.7px;
    }

    @media screen and (max-width: 1023px) {
        justify-self: start;
    }

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
        justify-self: start;
    }

    @media screen and (min-width: 1440px) {
    }
    @media screen and (min-width: 1800px) {
    }
`

const BlurCircleContainer = styled.div`
    position: relative;
`

const BlurCircleBottomLeft = styled.div`
    position: absolute;
    width: 280.38px;
    height: 280.38px;
    right: -20px;
    bottom: 0px;
    background: rgba(6, 87, 207, 0.7);
    filter: blur(195px);

    @media screen and (max-width: 768px) {
        width: 180.38px;
        height: 180.38px;
    }
`

const BlurCircleTopLeft = styled.div`
    position: absolute;
    width: 210.02px;
    height: 210.02px;
    left: 0px;
    top: 100px;
    background: #8a32fa;
    filter: blur(182px);
`

export const RoundedButton = styled(Link)`
    background: #0657cf;
    border-radius: 34px;
    color: white;
    padding: 10px 28px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UnderlinedButton = styled(Link)`
    color: #1b1464;
    font-weight: 600;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    align-self: center;
    align-content: center;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #1b1464;
        margin-top: 2px;
    }
`

export default Hero
