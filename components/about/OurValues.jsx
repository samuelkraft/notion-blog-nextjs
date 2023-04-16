import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { SloganAbout } from './AboutSection01'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import logo from '../../images/logo_Expand-CPA.svg'
import bienveillance from '../../images/bienveillance.svg'
import innovation from '../../images/innovation.svg'
import pro from '../../images/pro.svg'
import integrite from '../../images/integrite.svg'
import Image from 'next/image'
import { AboutSection02Wrapper } from './AboutSection02'
import { HeroContainer } from '../homepage/HeroHomePage'

const OurValues = () => {
    const { t } = useTranslation('common')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <HeroContainer
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
            <AboutSection02Wrapper>
                <SloganAbout>{t('valeurs')}</SloganAbout>
                <OurValuesWrapper>
                    <ImageWrapper
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            scale: isInView ? 1 : 0.5,
                        }}
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
                    >
                        <Image
                            src={logo}
                            fill
                            alt='Expand CPA'
                        />
                    </ImageWrapper>
                    <ValuesContainer>
                        <Value
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
                                src={integrite}
                                alt='logo arrow'
                                width={60}
                                height={60}
                            />
                            <h1>{t('integrite')}</h1>
                        </Value>
                        <Value2
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.5,
                            }}
                            transition={{
                                delay: 1.5,
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
                                src={pro}
                                alt='logo arrow'
                                width={60}
                                height={60}
                            />
                            <h1>{t('professionnalisme')}</h1>
                        </Value2>
                        <Value3
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.5,
                            }}
                            transition={{
                                delay: 1.75,
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
                                src={bienveillance}
                                alt='logo arrow'
                                width={60}
                                height={60}
                            />
                            <h1>{t('bienveillance')}</h1>
                        </Value3>
                        <Value4
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.5,
                            }}
                            transition={{
                                delay: 2,
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
                                src={innovation}
                                alt='logo arrow'
                                width={60}
                                height={60}
                            />
                            <h1>{t('innovation')}</h1>
                        </Value4>
                    </ValuesContainer>
                </OurValuesWrapper>
            </AboutSection02Wrapper>
        </HeroContainer>
    )
}

const OurValuesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 425px) {
        grid-template-columns: 350px;
    }
`

const ValuesContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 2rem;
`
const ImageWrapper = styled(motion.div)`
    position: relative;
    width: 320px;
    height: 180px;
    object-fit: cover;
    align-self: center;
    justify-self: center;

    @media screen and (max-width: 425px) {
        width: 320px;
        height: 180px;
    }

    @media screen and (min-width: 768px) {
        width: 500px;
        height: 400px;
    }
`

const Value = styled(motion.div)`
    display: flex;
    flex-flow: row;
    gap: 3rem;
    padding: 1.5rem;
    border-radius: 30px;
    border: 3px solid #4364f7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;

    @media screen and (max-width: 425px) {
        gap: 1rem;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        color: #1b1464;
        line-height: 1.5;

        @media screen and (max-width: 425px) {
            font-size: 26px;
        }
    }
`

const Value2 = styled(Value)`
    border: 3px solid #4899f7;
`
const Value3 = styled(Value)`
    border: 3px solid #7b42f6;
`
const Value4 = styled(Value)`
    border: 3px solid #5334f5;
`
export default OurValues
