import styled from 'styled-components'
import {
    HomeSection01Container,
    HomeSection01Wrapper,
    SloganSection01,
    Tag,
    HeadingSection01,
} from './HomeSection01'

import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef } from 'react'
import { RoundedButton } from './HeroHomePage'
import check from '../../images/check.svg'
import { Center } from '@mantine/core'

const HomeSectionJuridique = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)

    return (
        <Background>
            <HomeSection01Container>
                <HomeSectionJuridiqueWrapper>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <TagJuridique>
                            <span>{t('legalServices')}</span>
                        </TagJuridique>
                        <SloganJuridique>
                            {t('sectionJuridique_title')}
                        </SloganJuridique>
                        <HeadingJuridique>
                            <h2>
                                {t('sectionJuridique_text1')}

                                {t('sectionJuridique_bold1')}

                                {t('sectionJuridique_text2')}
                            </h2>
                        </HeadingJuridique>

                        <CardContainer>
                            <Card>
                                <Image
                                    src={check}
                                    alt='check1'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet1')}</h2>
                            </Card>
                            <Card>
                                <Image
                                    src={check}
                                    alt='check2'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet2')}</h2>
                            </Card>
                            <Card>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet3')}</h2>
                            </Card>
                            <Card>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet4')}</h2>
                            </Card>
                            <Card>
                                <div className='long-text'>
                                    <Image
                                        src={check}
                                        alt='check3'
                                        width={50}
                                        height={50}
                                    />
                                    <h2>{t('sectionJuridique_bullet5')}</h2>
                                </div>
                            </Card>
                        </CardContainer>

                        <Center>
                            <div style={{ width: '167px' }}>
                                <RoundedButton href='/services/legal-services'>
                                    {t('readMore')}
                                </RoundedButton>
                            </div>
                        </Center>
                    </motion.div>
                </HomeSectionJuridiqueWrapper>
                <BackgroundBlur />
            </HomeSection01Container>
        </Background>
    )
}

const Background = styled(motion.div)`
    background: #1b1464;
    border-radius: 40px;
`
export const SloganJuridique = styled(SloganSection01)`
    color: white;
    text-align: center;
    font-weight: 600;
    align-self: center;

    @media screen and (max-width: 465px) {
        width: 90%;
        font-size: 25px;
        line-height: 38px;
    }

    @media screen and (min-width: 768px) {
        width: 80%;
    }
    @media screen and (min-width: 1024px) {
        width: 60%;
    }
    @media screen and (min-width: 1200px) {
        width: 50%;
    }
`

const TagJuridique = styled(Tag)`
    color: white;
    text-align: center;
    width: 100%;
    font-weight: 400;
`

const HeadingJuridique = styled(HeadingSection01)`
    h2 {
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        color: white;
        text-align: center;
        align-self: center;

        @media screen and (min-width: 1024px) {
            width: 80%;
        }

        @media screen and (min-width: 1200px) {
            width: 70%;
        }

        @media screen and (max-width: 1024px) {
            width: 70%;
        }

        @media screen and (max-width: 600px) {
            width: 90%;
        }
    }
`
const CardContainer = styled.div`
    margin: 5rem 0;
    display: flex;
    gap: 13px;
    line-height: 1.5;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`

const Card = styled.div`
    border: 1px solid white;
    border-radius: 0px 40px 0px 40px;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem;

    width: 25%;
    height: 280px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    gap: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.05rem;

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 25%;
    }

    .long-text {
        transform: translateY(16px);

        h2 {
            transform: translateY(16px);
        }

        @media screen and (max-width: 1024px) {
            transform: translateY(0px);

            h2 {
                transform: translateY(0px);
            }
        }
    }
`

const BackgroundBlur = styled.div`
    position: absolute;
    top: 50;
    left: 50;

    width: 352.73px;
    height: 503.04px;

    background: rgba(6, 87, 207, 0.6);
    filter: blur(200px);
`

export const HomeSectionJuridiqueWrapper = styled(HomeSection01Wrapper)`
    flex-flow: column;

    @media screen and (min-width: 768px) {
        flex-flow: column;
    }

    @media screen and (min-width: 1024px) {
        flex-flow: column;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 5rem;
    }
`

export const ImageWrapper = styled.div`
    border-top-left-radius: 25vw;
    border-bottom-left-radius: 25vw;
    background-image: url('https://images.pexels.com/photos/5668837/pexels-photo-5668837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 100%;
    height: 40vh;
    align-self: center;
    @media screen and (max-width: 479px) {
        margin-top: 3rem;
        width: 100%;
        height: 50vh;
    }

    @media screen and (min-width: 767px) {
        margin-top: 3rem;
        height: 60vh;
        width: 100%;
    }

    @media screen and (min-width: 991px) {
        height: 40vh;
        width: 100%;
        background-position: 50% 40%;
    }

    @media screen and (min-width: 1200px) {
        transform: translateX(-20%);
    }

    @media screen and (min-width: 1440px) {
        height: 60vh;
        width: 100%;
        background-position: 50% 50%;
        margin-right: 5rem;
        transform: translateX(0%);
    }
    @media screen and (min-width: 2100px) {
        height: 60vh;
        width: 25vw;
        background-position: 50% 40%;
        margin-right: 5rem;
    }
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const RowWrapper = styled.div`
    display: flex;
    gap: 2rem;
    line-height: 1.5;
    align-items: center;
`

export default HomeSectionJuridique
