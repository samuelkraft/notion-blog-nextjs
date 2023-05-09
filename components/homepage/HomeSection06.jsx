import styled from 'styled-components'
import { Tag } from './HomeSection01'

import { HomeSection05Container, HomeSection05Wrapper } from './HomeSection05'

// Animation
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'

import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'

import { Carousel } from '@mantine/carousel'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons'
import { Avatar } from '@mantine/core'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const HomeSection06 = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <HomeSection05Container
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
            <HomeSection05Wrapper>
                <motion.div className='text-content'>
                    <Tag style={{ width: '35%' }}>
                        <span>Feedback</span>
                    </Tag>
                    <RowWrapper>
                        <SloganSection06>
                            {t('section06_title')}
                        </SloganSection06>
                        <ButtonContainer>
                            <Link href='/#contact'>
                                <GradientButton
                                    gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
                                    type='button'
                                    size='lg'
                                >
                                    {t('contactUs')}
                                </GradientButton>
                            </Link>
                        </ButtonContainer>
                    </RowWrapper>
                </motion.div>
                <Carousel
                    withIndicators
                    height={700}
                    slideSize='33.333333%'
                    slideGap='xl'
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    nextControlIcon={
                        <IconArrowRight
                            size={24}
                            color='#C6D0EB'
                        />
                    }
                    previousControlIcon={
                        <IconArrowLeft
                            size={24}
                            color='#C6D0EB'
                        />
                    }
                    align='start'
                    styles={(theme) => ({
                        root: {},

                        control: {
                            width: '3rem',
                            height: '3rem',
                            border: '1px solid #C6D0EB',

                            '&:hover': {
                                backgroundColor: '#3672F8',
                            },
                        },

                        controls: {
                            top: 'none',
                            bottom: '-12rem',
                            justifyContent: 'right',
                            gap: '1rem',

                            '@media screen and (max-width: 768px)': {
                                bottom: '-16rem',
                            },
                        },

                        indicator: {
                            backgroundColor: '#3672F8',
                        },
                    })}
                >
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                    alt='John Doe'
                                    radius='xl'
                                    size='xl'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                    radius='xl'
                                    size='xl'
                                    alt='feedback2'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                                    radius='xl'
                                    size='xl'
                                    alt='feedback3'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                                    radius='xl'
                                    size='xl'
                                    alt='feedback4'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                                    radius='xl'
                                    size='xl'
                                    alt='feedback5'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <FeedbackCard>
                            <AvatarContainer>
                                <Avatar
                                    src='https://images.unsplash.com/photo-1539614474468-f423a2d2270c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                    radius='xl'
                                    size='xl'
                                    alt='feedback6'
                                />
                                <AvatarContent>
                                    <h3>John Doe</h3>
                                    <p>Company Name</p>
                                </AvatarContent>
                            </AvatarContainer>
                            <FeedbackText>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero.”
                            </FeedbackText>
                        </FeedbackCard>
                    </Carousel.Slide>
                </Carousel>
            </HomeSection05Wrapper>
        </HomeSection05Container>
    )
}

export const RowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 3rem;
        flex-flow: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
    }
    @media screen and (min-width: 1024px) {
        margin-bottom: 0rem;
    }
`

export const SloganSection06 = styled.h1`
    font-family: 'AllRoundGothic-Demi';
    font-size: 42px;
    color: #1b1464;

    @media screen and (max-width: 465px) {
        font-size: 42px;
    }

    @media screen and (min-width: 768px) {
        font-size: 36px;
        width: 40rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 40px;
        width: 30rem;
        margin-top: 3.5rem;
    }
    @media screen and (min-width: 1440px) {
        width: 40rem;
        font-size: 46px;
        letter-spacing: 0.327px;
    }
`

export const ButtonContainer = styled.div`
    @media screen and (min-width: 1024px) {
        margin-top: 2rem;
    }
`

const FeedbackCard = styled.div`
    width: 400px;
    border: 3px solid #1b1464;
    border-radius: 51px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    gap: 2rem;
    @media screen and (max-width: 768px) {
        width: 320px;
    }

    @media screen and (min-width: 1024px) {
        width: 380px;
    }

    @media screen and (min-width: 1440px) {
        width: 500px;
        padding: 5rem;
    }
`

const AvatarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 1440px) {
        width: 100%;
    }
`

const AvatarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
        font-family: 'AllRoundGothic-Demi';
        font-size: 24px;
        color: #1b1464;

        @media screen and (min-width: 1440px) {
            font-size: 32px;
        }
    }

    p {
        font-size: 16px;
        color: #1b1464;
        @media screen and (min-width: 1440px) {
            font-size: 24px;
        }
    }
`

const FeedbackText = styled.p`
    font-family: 'AllRoundGothic-Demi';
    font-weight: 400;
    font-size: 24px;
    color: #1b1464;
    line-height: 29px;
    letter-spacing: 0.327px;
`

export default HomeSection06
