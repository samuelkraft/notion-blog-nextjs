import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const DetailServiceBanner = ({
    title,
    heading1,
    heading2,
    heading3,
    coverImage,
    color,
}) => {
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
            <TextWrapper>
                <h3>{heading1}</h3>
                <h3>
                    <b>{heading2} </b>
                </h3>
                <h3>{heading3}</h3>
            </TextWrapper>
        </DetailServiceBannerWrapper>
    )
}

export default DetailServiceBanner

const DetailServiceBannerWrapper = styled.div`
    min-height: 100vh;
`

const BackgroundGrey = styled.div`
    background: rgba(217, 224, 236, 0.3);
    border-radius: 0px 0px 0px 140px;
    min-height: 30vh;
    position: relative;
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

    .text-content {
        display: flex;
        justify-content: start;

        padding-top: 5%;
        padding-left: 10%;

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
`
const ImageWrapper = styled.div`
    position: absolute;
    z-index: 3;
    left: 55%;
    top: -20%;

    width: 500px;
    height: 600px;
`

const TextWrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-flow: column;
    gap: 10px;

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
