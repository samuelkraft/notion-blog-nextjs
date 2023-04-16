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
import { RoundedButton } from './HeroHomePage'

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
            <HomeSection01Wrapper>
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
                                <b>{t('section02_bold1')}</b>
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
                            <div
                                className=''
                                style={{ width: '156px' }}
                            >
                                <RoundedButton href='/services/accounting-services'>
                                    {t('readMore')}
                                </RoundedButton>
                            </div>
                        </HeadingSection02>
                    </motion.div>
                </motion.div>
                <BackgroundBlue>
                    <ImageWrapper></ImageWrapper>
                </BackgroundBlue>
            </HomeSection01Wrapper>
        </HomeSection01Container>
    )
}

export default HomeSection02

const SloganSection02 = styled(SloganSection01)`
    @media screen and (min-width: 1024px) {
        width: 30rem;
    }
    @media screen and (min-width: 1200px) {
        width: 46.5rem;
    }
`

export const HeadingSection02 = styled(HeadingSection01)``

const ImageWrapper = styled.div`
    border-radius: 300px 0px 300px 300px;
    background-image: url('https://img.freepik.com/free-photo/businesspeople-shaking-hands_107420-84877.jpg?w=740&t=st=1675455325~exp=1675455925~hmac=ec11c12670311cdf811cf9ff78a88e65808505555a244541e1f918ad67f66708');
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 375.2px;
    height: 678.01px;

    @media screen and (max-width: 479px) {
        margin-top: 3rem;
        width: 375.2px;
        height: 678.01px;
    }

    @media screen and (min-width: 767px) {
        margin-top: 3rem;
        width: 375.2px;
        height: 678.01px;
    }

    @media screen and (min-width: 991px) {
        width: 375.2px;
        height: 678.01px;
        background-position: 50% 40%;
    }

    @media screen and (min-width: 1200px) {
        transform: translate(-5%, -5%);
    }

    @media screen and (min-width: 1440px) {
        width: 375.2px;
        height: 678.01px;
        background-position: 50% 50%;
        margin-right: 5rem;
    }
    @media screen and (min-width: 2100px) {
        height: 60vh;
        width: 25vw;
        background-position: 50% 40%;
        margin-right: 5rem;
    }
`

const BackgroundBlue = styled.div`
    width: 375.2px;
    height: 678.01px;
    background: #0657cf;
    border-radius: 300px 0px 300px 300px;
`
