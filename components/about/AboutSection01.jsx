import styled from 'styled-components'
import Image from 'next/image'
import { Tag } from '../homepage/HomeSection01'
import { useTranslation } from 'next-i18next'

import logoArrow from '../../images/logo_arrow.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NumbersSection from './NumbersSection'
import { SloganSection01 } from '../homepage/HomeSection01'
import { HeroContainer } from '../homepage/HeroHomePage'
import {
    HeadingSection01,
    HomeSection01Wrapper,
} from '../homepage/HomeSection01'
import { titleAnim } from '../../lib/animation'
import sam from '../../images/sam.png'
import ben from '../../images/ben.svg'
import attali from '../../images/attali.png'
import team from '../../images/team.svg'

const AboutSection01 = () => {
    const { t } = useTranslation('common')

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <AboutSection01Container
            initial={{ opacity: 0 }}
            animate={{
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
                when: 'beforeChildren',
            }}
            ref={ref}
        >
            <AboutSection01Wrapper>
                <SloganSection01
                    initial={{ y: 200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                        ease: 'easeInOut',
                    }}
                >
                    {t('numberSection_title')}
                </SloganSection01>

                <NumbersSection />
            </AboutSection01Wrapper>

            <StoryContainer>
                <HomeSection01Wrapper>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <Tag>
                            <span>{t('ourStory')}</span>
                        </Tag>

                        <SloganAbout01
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
                            {t('whoAreWe')}
                        </SloganAbout01>
                        <motion.div>
                            <HeadingSection01>
                                <h2>{t('story1')}</h2>
                            </HeadingSection01>

                            <HeadingSection01>
                                <h2>{t('story2')}</h2>
                            </HeadingSection01>
                        </motion.div>
                    </motion.div>

                    <StoryImageContainer>
                        <StoryImageWrapper
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.5,
                            }}
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
                        >
                            <Image
                                src={sam}
                                fill
                                alt='Samuel Sarfati'
                            />
                        </StoryImageWrapper>

                        <div className='ben'>
                            <StoryImageWrapper
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    scale: isInView ? 1 : 0.5,
                                }}
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
                            >
                                <Image
                                    src={ben}
                                    fill
                                    alt='Benjamin Pik'
                                />
                            </StoryImageWrapper>
                        </div>

                        <StoryImageWrapper
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.5,
                            }}
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
                        >
                            <Image
                                src={attali}
                                fill
                                alt='Samuel Attali'
                            />
                        </StoryImageWrapper>
                    </StoryImageContainer>
                </HomeSection01Wrapper>

                <HomeSection01Wrapper>
                    <TeamImageWrapper>
                        <Image
                            src={team}
                            fill
                            alt='team'
                        />
                    </TeamImageWrapper>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <motion.div>
                            <HeadingSection01>
                                <h2>{t('story3')}</h2>
                            </HeadingSection01>

                            <HeadingSection01>
                                <h2>{t('story4')}</h2>
                            </HeadingSection01>
                        </motion.div>
                    </motion.div>
                </HomeSection01Wrapper>
            </StoryContainer>
        </AboutSection01Container>
    )
}

export default AboutSection01

export const AboutSection01Container = styled(motion.div)`
    min-height: 894.25px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;
    padding: 0 1rem;
`

const AboutSection01Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const SloganAbout = styled(motion.h1)`
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    color: #1b1464;
    line-height: 1.2;
    text-align: center;
    @media screen and (max-width: 465px) {
        font-size: 32px;
    }

    @media screen and (min-width: 768px) {
        font-size: 46px;
    }
    @media screen and (min-width: 1024px) {
        font-size: 52px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 58px;
    }
`

const SloganAbout01 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #1b1464;
    letter-spacing: 0.327px;
    font-size: 25px;
    line-height: 36px;

    @media screen and (max-width: 465px) {
        font-size: 25px;
        line-height: 36px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 35px;
        line-height: 55px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 40px;
        line-height: 60px;
    }
`

const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
`

const StoryImageContainer = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    gap: 1rem;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1240px) {
        transform: translateX(-3rem);
    }

    @media screen and (max-width: 1024px) {
        justify-content: center;
        margin: 5rem auto;

        transform: translateX(0);
    }

    .ben {
        transform: translateY(3rem);
    }
`

const StoryImageWrapper = styled(motion.div)`
    width: 186.86px;
    height: 378.22px;
    position: relative;
    @media screen and (max-width: 1240px) {
        width: 160px;
        height: 320px;
    }

    @media screen and (max-width: 600px) {
        width: 120px;
        height: 240px;
    }

    @media screen and (max-width: 450px) {
        width: 100px;
        height: 200px;
    }
`

const TeamImageWrapper = styled(motion.div)`
    width: 635.81px;
    height: 327px;
    position: relative;

    @media screen and (max-width: 1240px) {
        width: 500px;
        height: 320px;
    }

    @media screen and (max-width: 600px) {
        width: 350px;
    }
`
