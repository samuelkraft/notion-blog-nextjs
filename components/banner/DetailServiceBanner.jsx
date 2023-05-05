import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const DetailServiceBanner = ({ title, textContent, coverImage, color }) => {
    return (
        <DetailServiceBannerWrapper>
            <BackgroundGrey>
                <BackgroundBlue>
                    <div className='text-content'>
                        <h1>{title}</h1>
                    </div>

                    <ImageWrapper>
                        <Image
                            src={coverImage}
                            fill
                            alt='cover'
                        />
                    </ImageWrapper>
                </BackgroundBlue>
                <BackgroundService color={color} />
            </BackgroundGrey>

            <BackgroundBlueMobile>
                <div className='text-content'>
                    <h1>{title}</h1>
                </div>
            </BackgroundBlueMobile>
            <BackgroundServiceMobile color={color} />

            <ImageWrapperMobile src='/adminServices.png' />
            <TextWrapper>{textContent}</TextWrapper>
        </DetailServiceBannerWrapper>
    )
}

export default DetailServiceBanner

const DetailServiceBannerWrapper = styled.div`
    min-height: 100vh;
    position: relative;
`

const BackgroundGrey = styled.div`
    background: rgba(217, 224, 236, 0.3);
    border-radius: 0px 0px 0px 140px;
    min-height: 30vh;
    position: relative;

    @media screen and (max-width: 1160px) {
        display: none;
    }
`
const BackgroundBlue = styled.div`
    background: #1b1464;
    border-radius: 0px 0px 0px 135.183px;
    min-height: 30vh;
    position: absolute;
    z-index: 2;
    width: 90%;
    top: 50%;
    left: 10%;

    @media screen and (max-width: 1799px) {
        left: 5%;
        width: 95%;
    }

    @media screen and (max-width: 1380px) {
        left: 0%;
        width: 100%;
    }

    .text-content {
        display: flex;
        justify-content: start;

        @media screen and (max-width: 1799px) {
            padding-top: 4.5%;
            padding-left: 10%;
        }
        @media screen and (max-width: 1380px) {
            padding-top: 7%;
            padding-left: 6%;
        }

        @media screen and (min-width: 1800px) {
            padding-top: 5%;
            padding-left: 10%;
        }

        h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 56px;
            /* or 140% */

            letter-spacing: 0.327px;

            color: #ffffff;
            width: 45%;

            @media screen and (max-width: 1799px) {
                width: 55%;
            }

            @media screen and (max-width: 1380px) {
                width: 55%;
                font-size: 35px;
                line-height: 48px;
            }
        }
    }
`

const BackgroundService = styled.div`
    background: ${(props) => props.color};
    border-radius: 0px 0px 0px 135.183px;
    min-height: 31vh;
    top: 50%;
    left: 10%;
    position: absolute;
    z-index: 1;
    width: 90%;

    @media screen and (max-width: 1799px) {
        left: 5%;
        width: 95%;
    }

    @media screen and (max-width: 1380px) {
        left: 0%;
        width: 100%;
    }
`
const ImageWrapper = styled.div`
    position: absolute;
    z-index: 3;
    left: 60%;
    top: -20%;

    width: 500px;
    height: 600px;

    @media screen and (max-width: 1380px) {
        top: -10%;
        width: 450px;
        height: 600px;
    }
`

const TextWrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-flow: column;
    gap: 10px;

    @media screen and (max-width: 1799px) {
        padding: 12% 15% 10% 14.5%;
        width: 70%;
    }

    @media screen and (max-width: 1380px) {
        padding: 15% 15% 10% 6%;
    }

    @media screen and (max-width: 1160px) {
        justify-content: center;
        align-items: center;
        padding: 5%;
        width: 100%;
    }

    @media screen and (min-width: 1800px) {
        padding: 10% 15% 10% 19%;
        width: 70%;
    }

    padding: 10% 15% 10% 19%;
    width: 70%;

    h3 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 154.15%;
        /* or 25px */

        color: #1b1464;
    }
`
const BackgroundBlueMobile = styled.div`
    background: #1b1464;
    position: relative;
    z-index: 1;
    min-height: 50vh;

    @media screen and (min-width: 1160px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        min-height: 35vh;
    }

    .text-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        padding-top: 18%;
        padding-left: 5%;

        @media screen and (max-width: 768px) {
            padding-top: 18%;
            padding-left: 5%;
        }

        h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            line-height: 36px;
            /* or 144% */

            letter-spacing: 0.327px;

            /* Blanc */

            color: #ffffff;
            width: 80%;
            @media screen and (max-width: 1160px) {
                font-size: 35px;
                line-height: 48px;
            }

            @media screen and (max-width: 768px) {
                font-size: 25px;
                line-height: 36px;
                /* or 144% */

                letter-spacing: 0.327px;
            }
        }
    }
`

const BackgroundServiceMobile = styled.div`
    background: ${(props) => props.color};
    width: 100%;
    min-height: 1vh;

    @media screen and (min-width: 1160px) {
        display: none;
    }
`

const ImageWrapperMobile = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 50vh;
    border-bottom-right-radius: 30px;

    @media screen and (min-width: 1160px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        height: 50vh;
    }
`
