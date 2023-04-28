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
import { SloganSection01 } from '../homepage/HomeSection01'
const OurValues = () => {
    const { t } = useTranslation('common')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <OurValuesContainer
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
                <SloganSection01>{t('valeurs')}</SloganSection01>
                <OurValuesWrapper>
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
                    <Value
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
                    </Value>
                    <Value
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
                    </Value>
                    <Value
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
                    </Value>
                </OurValuesWrapper>
            </AboutSection02Wrapper>
            <BackgroundBlur />
        </OurValuesContainer>
    )
}

const OurValuesContainer = styled(motion.div)`
    position: relative;
`

const OurValuesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    margin-top: 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 425px) {
        grid-template-columns: 350px;
    }
`

const BackgroundBlur = styled.div`
    position: absolute;
    width: 200.87px;
    height: 200.87px;
    left: 40%;
    top: 50%;

    background: rgba(6, 87, 207, 0.3);
    filter: blur(165px);
`

const Value = styled(motion.div)`
    display: flex;
    flex-flow: row;
    gap: 3rem;
    padding: 1.5rem;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    /* shadow box 2 */

    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.07);
    border-radius: 20px;

    @media screen and (max-width: 425px) {
        gap: 1rem;
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 55px;
        /* identical to box height, or 229% */

        letter-spacing: 0.327px;

        color: #1b1464;
    }
`

export default OurValues
