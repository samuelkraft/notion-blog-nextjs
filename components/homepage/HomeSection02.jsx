import {
    HomeSection01Container,
    HomeSection01Wrapper,
    HeadingSection01,
    SloganSection01,
    Tag,
} from './HomeSection01'
import GradientButton from '../button/GradientButton'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import { useEffect, useRef } from 'react'

import Link from 'next/link'

const HomeSection02 = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <HomeSection01Container
            initial={{ opacity: 0 }}
            animate={{
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
                when: 'afterChildren',
            }}
            ref={ref}
        >
            <HomeSection02Wrapper>
                <ImageWrapper></ImageWrapper>
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Tag>
                        <span>{t('accountingServices')}</span>
                    </Tag>
                    <SloganSection02
                        initial={{ y: 200, opacity: 0.5 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 4.5,
                            ease: 'easeInOut',
                        }}
                    >
                        {t('section02_title')}
                    </SloganSection02>
                    <motion.div
                        initial={{ y: 200, opacity: 0.5 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 4.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <HeadingSection02>
                            <h2>
                                {t('section02_heading_pt1')}
                                <b>
                                    <u> {t('section02_bold1')}</u>
                                </b>
                                <b>{t('section02_bold2')}</b>
                                {t('section02_heading_pt2')}
                            </h2>
                        </HeadingSection02>
                        <HeadingSection02>
                            <h2>
                                {t('section02_heading_pt3')}
                                <b>{t('section02_bold3')}</b>
                                {t('section02_heading_pt4')}
                            </h2>
                        </HeadingSection02>

                        <HeadingSection02>
                            <Link href='/services/accounting-services'>
                                <GradientButton
                                    gradientColor='#0657CF'
                                    type='button'
                                    width={200}
                                >
                                    {t('readMore')}
                                </GradientButton>
                            </Link>
                        </HeadingSection02>
                    </motion.div>
                </motion.div>
            </HomeSection02Wrapper>
        </HomeSection01Container>
    )
}

export default HomeSection02

const HomeSection02Wrapper = styled(HomeSection01Wrapper)`
    @media screen and (max-width: 1199px) {
        flex-direction: column-reverse;
    }

    @media screen and (min-width: 1200px) {
        align-items: center;
        .text-content {
            width: 50%;
            transform: translateX(5%) !important;
        }
    }
`

const SloganSection02 = styled(SloganSection01)`
    @media screen and (min-width: 768px) {
        width: 40rem;
    }
    @media screen and (min-width: 1024px) {
        width: 30rem;
    }
    @media screen and (min-width: 1440px) {
        width: 35rem;
    }
`

export const HeadingSection02 = styled(HeadingSection01)`
    @media screen and (min-width: 1200px) {
        h2 {
            font-size: 20px;
        }
        width: 90%;
    }
`

const ImageWrapper = styled.div`
    border-top-left-radius: 25vw;
    border-bottom-left-radius: 25vw;
    border-bottom-right-radius: 25vw;
    background-image: url('https://img.freepik.com/free-photo/businesspeople-shaking-hands_107420-84877.jpg?w=740&t=st=1675455325~exp=1675455925~hmac=ec11c12670311cdf811cf9ff78a88e65808505555a244541e1f918ad67f66708');
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 100%;
    height: 50vh;

    @media screen and (max-width: 479px) {
        margin-top: 3rem;
        width: 100%;
        height: 50vh;
    }

    @media screen and (min-width: 767px) {
        margin-top: 3rem;
        height: 80vh;
        width: 100%;
    }

    @media screen and (min-width: 991px) {
        height: 60vh;
        width: 100%;
        background-position: 50% 40%;
    }

    @media screen and (min-width: 1200px) {
        transform: translateX(-20%);
    }

    @media screen and (min-width: 1440px) {
        height: 70vh;
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
