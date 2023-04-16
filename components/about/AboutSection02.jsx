import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { SloganAbout } from './AboutSection01'
import { motion, useInView } from 'framer-motion'
import { HeroContainer } from '../homepage/HeroHomePage'
import { useRef } from 'react'

const AboutSection02 = () => {
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
                <SloganAbout>{t('ourVision')}</SloganAbout>
                <OurVisionContainer>
                    <h1>{t('vision_heading')}</h1>
                    <h3>{t('vision_paragraph')}</h3>
                </OurVisionContainer>
            </AboutSection02Wrapper>
        </HeroContainer>
    )
}

export default AboutSection02

export const AboutSection02Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: 3rem;
`

const OurVisionContainer = styled.div`
    background: linear-gradient(109.75deg, #4364f7 0.82%, #1b1464 100%);
    border-radius: 51px;
    color: white;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 32px;
        letter-spacing: 0.327px;

        @media screen and (max-width: 768px) {
            font-size: 21px;
        }
    }

    h3 {
        font-size: 22px;
        letter-spacing: 0.327px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
        @media screen and (max-width: 425px) {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 3rem;
    }

    @media screen and (max-width: 425px) {
        padding: 2rem;
    }
    @media screen and (min-width: 2100px) {
        width: 80%;
    }
`
