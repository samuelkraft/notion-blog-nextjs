import Image from 'next/image'
import servicesBanner from '../../images/services_banner.png'
import styled from 'styled-components'

import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import { RoundedButton } from '../homepage/HeroHomePage'

const ServicesBanner = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])
    return (
        <ServicesBannerContainer>
            <ImageWrapper>
                <Image
                    src={servicesBanner}
                    alt='services'
                    fill
                />
            </ImageWrapper>
            <BackgroundBlue>
                <div className='text-content'>
                    <SloganServices>{t('ourExpertises')}</SloganServices>
                    <HeadingServices>{t('sloganSubtitle')}</HeadingServices>

                    <div style={{ width: '200px' }}>
                        <RoundedButton href='/#contact'>
                            {t('contactUs')}
                        </RoundedButton>
                    </div>
                </div>
            </BackgroundBlue>
        </ServicesBannerContainer>
    )
}

export default ServicesBanner

const ServicesBannerContainer = styled.div`
    min-height: 80vh;
    position: relative;

    @media screen and (max-width: 768px) {
        min-height: 70vh;
    }
`

const BackgroundBlue = styled.div`
    background: linear-gradient(94.06deg, #4364f7 -55.41%, #1b1464 64.28%);
    border-radius: 0px 0px 300px 0px;

    width: 60%;
    height: 60vh;

    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 3rem;

        @media screen and (min-width: 1024px) {
        }
    }

    @media screen and (min-width: 1600px) {
        padding: 6rem 0rem 0rem 19.5%;
    }

    @media screen and (max-width: 1600px) {
        padding: 6rem 0rem 0rem 13%;
    }

    @media screen and (max-width: 1440px) {
        padding: 6rem 0rem 0rem 8%;
    }
    @media screen and (max-width: 1240px) {
        padding: 6rem 0rem 0rem 5%;
    }

    @media screen and (max-width: 768px) {
        height: 50vh;
        padding: 6rem 0rem 0rem 3%;
    }

    @media screen and (max-width: 700px) {
        height: 60vh;
        padding: 6rem 0rem 0rem 3%;
        width: 100%;
    }
`

const SloganServices = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 64px;
    /* or 123% */

    width: 60%;

    letter-spacing: 0.327px;

    color: #ffffff;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
    }
`

const HeadingServices = styled.h2`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    /* Blanc */

    color: #ffffff;

    width: 80%;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
        line-height: 22px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 22px;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    height: 60vh;
    object-fit: contain;
    z-index: -2;

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 50vh;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`
