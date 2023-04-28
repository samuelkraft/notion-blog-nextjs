import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { RoundedButton } from '../homepage/HeroHomePage'
import { useTranslation } from 'next-i18next'
import { useState, useEffect, useRef } from 'react'

import { Slogan } from '../homepage/HeroHomePage'
import trio from '../../images/trio.svg'

const HeroAboutPage = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    return (
        <AboutHeroContainer>
            <AboutHeroTextContent>
                <Slogan>{t('slogan')}</Slogan>
                <Heading>{t('sloganSubtitle')}</Heading>
                <div style={{ width: '187px' }}>
                    <RoundedButton href='/about/#contact'>
                        {t('contactUs')}
                    </RoundedButton>
                </div>
            </AboutHeroTextContent>
            <Ellipse />
            <BackgroundGradientBlue />
            <ImageWrapper>
                <Image
                    src={trio}
                    alt='trio'
                    fill
                />
            </ImageWrapper>
        </AboutHeroContainer>
    )
}

export default HeroAboutPage

const AboutHeroContainer = styled.div`
    background: rgba(217, 224, 236, 0.3);
    border-radius: 0px 0px 40px 70px;

    min-height: 88vh;
    position: relative;
`

const AboutHeroTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 1800px) {
        padding-left: 19%;
        padding-top: 5%;
    }

    @media screen and (max-width: 1799px) {
        padding-left: 14%;
        padding-top: 5%;
    }

    @media screen and (max-width: 1535px) {
        padding-left: 8%;
    }

    @media screen and (max-width: 1024px) {
        padding-left: 5%;
    }
`
const BackgroundGradientBlue = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 600px;
    height: 860px;

    background: linear-gradient(21.66deg, #4364f7 22.39%, #1b1464 95.86%);
    /* Shadow_1 */

    box-shadow: -15px 16px 33px 3px rgba(0, 0, 0, 0.12);
    border-radius: 400px 0px 0px 0px;

    @media screen and (min-width: 1800px) {
        width: 600px;
        height: 860px;
    }

    @media screen and (max-width: 1799px) {
        width: 450px;
        height: 860px;
    }

    @media screen and (max-width: 1535px) {
        width: 450px;
        height: 860px;
    }

    @media screen and (max-width: 1439px) {
        width: 400px;
        height: 860px;
    }

    @media screen and (max-width: 1024px) {
        width: 300px;
        height: 500px;
    }

    @media screen and (max-width: 800px) {
        width: 250px;
        height: 400px;
    }

    @media screen and (max-width: 580px) {
        width: 120px;
        height: 400px;
    }
`

const Ellipse = styled.div`
    position: absolute;
    bottom: 20%;
    left: 30%;

    border-radius: 50%;
    width: 160px;
    height: 160px;

    background: #55cee1;
    transform: rotate(-67.64deg);

    @media screen and (max-width: 1799px) {
        left: 26%;
    }

    @media screen and (max-width: 1535px) {
        left: 22%;
    }

    @media screen and (max-width: 1439px) {
        left: 18%;
    }

    @media screen and (max-width: 1240px) {
        left: 8%;
    }

    @media screen and (max-width: 1024px) {
        bottom: 12%;
        left: 15%;
    }

    @media screen and (max-width: 800px) {
        left: 5%;
        bottom: 6%;
    }

    @media screen and (max-width: 580px) {
        width: 120px;
        height: 120px;
        bottom: 10%;
    }
`
const ImageWrapper = styled.div`
    position: absolute;
    bottom: -15px;
    left: 32%;
    width: 900px;
    height: 600px;

    @media screen and (max-width: 1799px) {
        left: 26%;
    }

    @media screen and (max-width: 1535px) {
        left: 22%;
    }

    @media screen and (max-width: 1439px) {
        left: 18%;
    }

    @media screen and (max-width: 1240px) {
        left: 8%;
    }

    @media screen and (max-width: 1024px) {
        width: 650.44px;
        height: 400.26px;
        bottom: 0;
    }

    @media screen and (max-width: 800px) {
        width: 511.44px;
        height: 321.26px;
    }

    @media screen and (max-width: 645px) {
        left: 10%;
    }

    @media screen and (max-width: 580px) {
        width: 95%;
        height: 300px;
        left: 0;
        bottom: 0px;
    }

    @media screen and (max-width: 389px) {
        bottom: -40px;
    }

    @media screen and (min-width: 390px) and (max-width: 415px) {
        bottom: -32px;
    }
`

const Heading = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: black;
    line-height: 29px;

    width: 70%;

    @media screen and (min-width: 1024px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
`
