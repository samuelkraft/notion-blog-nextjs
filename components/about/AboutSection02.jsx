import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { SloganAbout } from './AboutSection01'
import { motion, useInView } from 'framer-motion'
import { HeroContainer } from '../homepage/HeroHomePage'
import { useRef } from 'react'
import quote from '../../images/quote.svg'
import { SloganJuridique } from '../homepage/HomeSectionJuridique'
const AboutSection02 = () => {
    const { t } = useTranslation('common')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <AboutSection02Container>
            <AboutSection02Wrapper>
                <SloganJuridique>{t('ourVision')}</SloganJuridique>
                <h2>{t('vision_heading')}</h2>
                <h3>{t('vision_paragraph')}</h3>
            </AboutSection02Wrapper>
            <ImageWrapper>
                <Image
                    src={quote}
                    alt='quote'
                    fill
                />
            </ImageWrapper>
        </AboutSection02Container>
    )
}

export default AboutSection02

const AboutSection02Container = styled.div`
    background: #1b1464;
    border-radius: 0px 0px 40px 40px;
    color: white;

    min-height: 55vh;
    position: relative;
`

export const AboutSection02Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 5rem 0rem;
    position: relative;

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 147.9%;
        /* or 38px */

        text-align: center;

        color: #ffffff;
        width: 40%;

        @media screen and (max-width: 768px) {
            width: 80%;
        }

        @media screen and (max-width: 425px) {
            font-size: 20px;
            width: 100%;
        }
    }

    h3 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 147.9%;
        /* or 24px */

        text-align: center;

        color: #ffffff;
        width: 40%;

        @media screen and (max-width: 768px) {
            width: 80%;
        }

        @media screen and (max-width: 425px) {
            font-size: 14px;
            width: 100%;
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

const ImageWrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 20%;
    width: 83px;
    height: 83px;

    @media screen and (max-width: 768px) {
        top: 10%;
        left: 10%;
        width: 63px;
        height: 63px;
    }

    @media screen and (max-width: 425px) {
        width: 43px;
        height: 43px;
    }
`
