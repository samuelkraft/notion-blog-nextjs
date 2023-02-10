import styled from 'styled-components'
import {
    HomeSection01Container,
    HomeSection01Wrapper,
    SloganSection01,
    Tag,
    HeadingSection01,
} from './HomeSection01'

// Animation
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'

import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const HomeSection05 = () => {
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
                    <Tag style={{ width: '35%' }}>
                        <span>{t('whyUs')}</span>
                    </Tag>
                    <SloganSection01>{t('section05_title')}</SloganSection01>
                    <HeadingSection05>
                        <h2>
                            {t('section05_heading_pt1')}
                            <b>{t('section05_bold1')}</b>
                            {t('section05_heading_pt2')}
                        </h2>
                    </HeadingSection05>
                    <HeadingSection05>
                        <h2>
                            {t('section05_heading_pt3')}
                            <b>{t('section05_bold2')}</b>
                            {t('section05_heading_pt4')}
                        </h2>
                    </HeadingSection05>
                    <HeadingSection05>
                        <Link href='/services/administrative-services'>
                            <GradientButton
                                gradientColor='#0657CF'
                                type='button'
                                width={200}
                            >
                                {t('readMore')}
                            </GradientButton>
                        </Link>
                    </HeadingSection05>
                </motion.div>
                <ImageWrapper />
            </HomeSection01Wrapper>
        </HomeSection01Container>
    )
}

export const HomeSection05Container = styled(HomeSection01Container)``

export const HomeSection05Wrapper = styled(HomeSection01Wrapper)`
    display: flex;
    flex-flow: column;

    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    @media screen and (max-width: 465px) {
        flex-flow: column;
    }

    @media screen and (min-width: 768px) {
        font-size: 48px;
        flex-flow: column;
    }
    @media screen and (min-width: 1024px) {
        font-size: 50px;
        gap: 0rem;
    }
    @media screen and (min-width: 1440px) {
        font-size: 52px;
        .text-content {
            width: 100%;
        }
    }
`

const SloganSection05 = styled(SloganSection01)`
    @media screen and (min-width: 1440px) {
        width: 40rem;
    }
`

const HeadingSection05 = styled(HeadingSection01)`
    @media screen and (min-width: 1200px) {
        h2 {
            font-size: 20px;
        }
        width: 100%;
    }
`

const CardContainer = styled.div`
    margin-top: 3rem;
    @media screen and (max-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5rem;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 1441px) {
        display: grid;
        grid-template-columns: repeat(2, 525px);
        grid-gap: 3rem;
        justify-content: center;
        align-items: center;
    }
`

const BorderedCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 3rem;
    border: 3px solid #1b1464;
    border-radius: 51px;
    gap: 2rem;

    h3 {
        font-family: 'AllRoundGothic-Demi';
        font-size: 32px;
        color: #1b1464;
    }

    p {
        color: #1b1464;
        font-size: 20px;
    }

    @media screen and (min-width: 1440px) {
        height: 800px;
    }
`

const ImageWrapper = styled.div`
    border-top-right-radius: 25vw;
    border-bottom-left-radius: 25vw;
    border-bottom-right-radius: 25vw;
    background-image: url('https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 3rem;
    width: 100%;
    height: 50vh;
    align-self: center;

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
        height: 45vh;
        width: 100%;
        background-position: 50% 40%;
    }

    @media screen and (min-width: 1440px) {
        height: 60vh;
        background-position: 50% 50%;
    }
    @media screen and (min-width: 2100px) {
        height: 60vh;
        width: 25vw;
        background-position: 50% 40%;
        margin-right: 5rem;
    }
`

export default HomeSection05
