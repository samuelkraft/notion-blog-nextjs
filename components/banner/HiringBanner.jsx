import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import hiringBanner from '../../images/hiring_banner.png'

const HiringBanner = () => {
    const { t } = useTranslation('common')

    return (
        <ImageWrapper>
            <Image
                src={hiringBanner}
                alt='join us'
                fill
            />

            <SloganHiringBanner>{t('joinUs')}</SloganHiringBanner>
        </ImageWrapper>
    )
}

export default HiringBanner

const ImageWrapper = styled.div`
    min-height: 60vh;
    position: relative;
    border-radius: 0px 0px 40px 40px;

    @media screen and (max-width: 1024px) {
        min-height: 50vh;
    }

    @media screen and (max-width: 768px) {
        min-height: 40vh;
    }
    @media screen and (max-width: 500px) {
        min-height: 30vh;
    }
`
const SloganHiringBanner = styled.div`
    position: absolute;
    top: 40%;
    left: 38%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 64px;
    /* or 123% */

    text-align: center;
    letter-spacing: 0.327px;

    color: #ffffff;

    @media screen and (max-width: 1200px) {
        font-size: 40px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
    }

    @media screen and (max-width: 1024px) {
        top: 40%;
        left: 38%;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
    }

    @media screen and (max-width: 580px) {
        top: 40%;
        left: 30%;
    }
`
