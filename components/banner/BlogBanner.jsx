import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import ellipseCyan from '../../images/ellipse_cyan.svg'
import ellipseOrange from '../../images/ellipse_orange.svg'

const BlogBanner = () => {
    const { t } = useTranslation('common')

    return (
        <Banner>
            <SloganBlogBanner>{t('theBlog')}</SloganBlogBanner>
            <EllipseCyanWrapper>
                <Image
                    src={ellipseCyan}
                    alt='ellipseCyan'
                    fill
                />
            </EllipseCyanWrapper>
            <EllipseOrangeWrapper>
                <Image
                    src={ellipseOrange}
                    alt='ellipseOrange'
                    fill
                />
            </EllipseOrangeWrapper>
        </Banner>
    )
}

export default BlogBanner

const Banner = styled.div`
    background: linear-gradient(191.56deg, #4364f7 -29.1%, #1b1464 188.41%);
    border-radius: 0px 0px 40px 40px;

    min-height: 30vh;
    color: white;

    position: relative;
`

const SloganBlogBanner = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 64px;
    /* or 123% */

    text-align: center;
    letter-spacing: 0.327px;

    color: #ffffff;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5%;

    @media screen and (max-width: 1600px) {
        padding: 8%;
    }

    @media screen and (max-width: 1300px) {
        padding: 10%;
    }

    @media screen and (max-width: 1200px) {
        font-size: 40px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
        padding: 12%;
    }
    @media screen and (max-width: 1200px) {
        padding: 15%;
    }

    @media screen and (max-width: 768px) {
        padding: 25%;
    }

    @media screen and (max-width: 580px) {
        padding: 35%;
        font-size: 25px;
        line-height: 38px;
        leading-trim: both;
        text-edge: cap;
        letter-spacing: -1.5px;
    }
`

const EllipseCyanWrapper = styled.div`
    position: absolute;
    bottom: 30%;
    left: 20%;
    width: 80.47px;
    height: 73.68px;

    @media screen and (max-width: 768px) {
        bottom: 40%;
        left: 10%;
        width: 40px;
        height: 40px;
    }
`

const EllipseOrangeWrapper = styled.div`
    position: absolute;
    bottom: 45%;
    right: 20%;

    width: 50.47px;
    height: 63.68px;

    @media screen and (max-width: 768px) {
        bottom: 50%;
        right: 10%;
    }
`
