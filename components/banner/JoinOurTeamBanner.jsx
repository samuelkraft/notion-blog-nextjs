import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SloganServices } from './ServicesBanner'
import { RoundedButton } from '../homepage/HeroHomePage'
import team from '../../images/pik_consulting.svg'
import Image from 'next/image'

const JoinOurTeamBanner = () => {
    const { t } = useTranslation('common')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <Background>
            <BlueGradient>
                <div className='text-content'>
                    <h1>{t('joinOurTeam')}</h1>
                    <h2>{t('joinOurTeamText')}</h2>

                    <div style={{ width: '167px' }}>
                        <RoundedButton
                            href="href='https://www.linkedin.com/company/asp-experts/"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {t('seeMore')}
                        </RoundedButton>
                    </div>
                </div>
                <ImageWrapper>
                    {/* <Image
                        src='/team.jpg'
                        alt='team'
                        fill
                    /> */}
                </ImageWrapper>
            </BlueGradient>
        </Background>
    )
}

export default JoinOurTeamBanner

const Background = styled.div`
    background: rgba(217, 224, 236, 0.3);
    border-radius: 0px 0px 156px 0px;

    min-height: 45vh;
    position: relative;

    @media screen and (max-width: 768px) {
        min-height: 40vh;
    }
`

const BlueGradient = styled.div`
    background: linear-gradient(21.66deg, #4364f7 22.39%, #1b1464 95.86%);
    color: white;
    border-radius: 0px 0px 0px 0px;
    min-height: 45vh;
    width: 60%;
    position: relative;

    @media screen and (max-width: 1200px) {
        width: 65%;
    }

    @media screen and (max-width: 768px) {
        border-bottom-right-radius: 220px;
        min-height: 40vh;
        width: 100%;
    }

    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 2rem;

        h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 55px;

            width: 60%;

            letter-spacing: 0.327px;

            color: #ffffff;

            @media screen and (max-width: 1200px) {
                font-size: 32px;
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
        }

        h2 {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            /* Blanc */

            color: #ffffff;

            width: 60%;

            @media screen and (max-width: 1200px) {
                font-size: 20px;
                line-height: 22px;
            }
            @media screen and (max-width: 768px) {
                font-size: 18px;
                line-height: 22px;
            }
        }
    }

    @media screen and (min-width: 1600px) {
        padding: 3rem 0rem 0rem 19.5%;
    }

    @media screen and (max-width: 1600px) {
        padding: 3rem 0rem 0rem 13%;
    }

    @media screen and (max-width: 1440px) {
        padding: 3rem 0rem 0rem 8%;
    }
    @media screen and (max-width: 1240px) {
        padding: 3rem 0rem 0rem 5%;
    }

    @media screen and (max-width: 768px) {
        height: 50vh;
        padding: 3rem 0rem 0rem 8%;
    }

    @media screen and (max-width: 700px) {
        height: 60vh;
        padding: 3rem 0rem 0rem 8%;
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 80%;

    width: 40vw;
    height: 45vh;
    background-image: url('/team.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top-left-radius: 250px;
    border-bottom-right-radius: 220px;

    @media screen and (max-width: 1600px) {
        left: 70%;
        width: 45vw;
    }

    @media screen and (max-width: 1440px) {
        width: 50vw;
    }

    @media screen and (max-width: 1200px) {
        width: 55vw;
        left: 60%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
