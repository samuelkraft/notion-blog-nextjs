import styled from 'styled-components'
import Image from 'next/image'
import { HeroContainer } from '../homepage/HeroHomePage'
import { Tag } from '../homepage/HomeSection01'
import { useTranslation } from 'next-i18next'

import logoArrow from '../../images/logo_arrow.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NumbersSection from './NumbersSection'

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
                <Tag style={{ width: '30%' }}>
                    <span>{t('about')}</span>
                </Tag>

                <SloganAbout
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
                    {t('slogan')}
                </SloganAbout>

                <NumbersSection />

                <OurStoryContainer>
                    <StoryContainer>
                        <Tag>
                            <span>{t('ourStory')}</span>
                        </Tag>

                        <h1>{t('whoAreWe')}</h1>
                        <Story>
                            <Image
                                src={logoArrow}
                                alt='logo arrow'
                            />
                            <h2>{t('story1')}</h2>
                        </Story>
                        <Story>
                            <Image
                                src={logoArrow}
                                alt='logo arrow'
                            />
                            <h2>{t('story2')}</h2>
                        </Story>
                    </StoryContainer>

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
                    />
                </OurStoryContainer>

                <OurStoryContainer2>
                    <StoryImageWrapper2
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
                    />

                    <StoryContainer>
                        <Story>
                            <Image
                                src={logoArrow}
                                alt='logo arrow'
                            />
                            <h2>{t('story3')}</h2>
                        </Story>
                        <Story>
                            <Image
                                src={logoArrow}
                                alt='logo arrow'
                            />
                            <h2>{t('story4')}</h2>
                        </Story>
                    </StoryContainer>
                </OurStoryContainer2>
            </AboutSection01Wrapper>
        </AboutSection01Container>
    )
}

export default AboutSection01

export const AboutSection01Container = styled(motion.div)`
    margin-top: 8rem;

    padding: 2rem;
    @media screen and (min-width: 768px) {
        padding: 1rem 8%;
    }
    @media screen and (min-width: 1024px) {
        padding: 1rem 6%;
    }

    @media screen and (min-width: 1440px) {
        padding: 1rem 15%;
    }
    @media screen and (min-width: 1800px) {
        padding: 1rem 10%;
    }

    @media screen and (min-width: 2100px) {
        padding: 1rem 16%;
    }
    @media screen and (min-width: 2500px) {
        padding: 1rem 20%;
    }
`

const AboutSection01Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
`

export const SloganAbout = styled(motion.h1)`
    font-family: 'AllRoundGothic-Demi';
    font-size: 32px;
    color: #1b1464;
    line-height: 1.2;
    text-align: center;
    @media screen and (max-width: 465px) {
        font-size: 32px;
    }

    @media screen and (min-width: 768px) {
        font-size: 32px;
        width: 40rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 52px;
        width: 40rem;
    }
    @media screen and (min-width: 1440px) {
        font-size: 58px;
    }
`

const OurStoryContainer = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    align-items: center;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column-reverse;
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        grid-template-columns: 1fr;
    }
`

const StoryContainer = styled.div`
    grid-column-start: span 1;
    grid-column-end: span 1;
    grid-row-start: span 1;
    grid-row-end: span 1;
    align-self: center;

    h1 {
        font-size: 52px;
        font-family: 'AllRoundGothic-Demi';
        color: #1b1464;
        text-align: left;
        margin: 3rem 0;
    }
`

const Story = styled.div`
    display: flex;
    gap: 3rem;
    margin: 3rem 0;
    align-items: center;
    h2 {
        font-size: 20px;
        color: #1b1464;
        text-align: left;

        @media screen and (max-width: 500px) {
            font-size: 18px;
        }
    }
`

const StoryImageWrapper = styled(motion.div)`
    width: 100%;
    height: 30vh;
    border-top-right-radius: 12vw;
    border-bottom-left-radius: 12vw;
    background-image: url('/big3.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    justify-self: center;

    @media screen and (max-width: 550px) {
        width: 100%;
        height: 30vh;
    }

    @media screen and (min-width: 551px) {
        width: 100%;
        height: 40vh;
        border-top-right-radius: 25vw;
        border-bottom-left-radius: 25vw;
    }
    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 35vh;
        border-top-right-radius: 12vw;
        border-bottom-left-radius: 12vw;
    }
    @media screen and (min-width: 1440px) {
        width: 100%;
        height: 40vh;
        border-top-right-radius: 12vw;
        border-bottom-left-radius: 12vw;
    }
    @media screen and (min-width: 1800px) {
        width: 80%;
        height: 40vh;
        border-top-right-radius: 12vw;
        border-bottom-left-radius: 12vw;
    }

    @media screen and (min-width: 2560px) {
        width: 30vw;
        height: 50vh;
        border-top-right-radius: 12vw;
        border-bottom-left-radius: 12vw;
    }
`

const StoryImageWrapper2 = styled(StoryImageWrapper)`
    background-image: url('/team.jpg');
`

const OurStoryContainer2 = styled(OurStoryContainer)`
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`
