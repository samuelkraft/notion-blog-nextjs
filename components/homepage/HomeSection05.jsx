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
import american from '../../images/american.svg'
import { RoundedButton } from './HeroHomePage'
import Image from 'next/image'

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
        <Background>
            <HomeSection05Container
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
                <HomeSection05Layout>
                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <Tag style={{ width: '50%' }}>
                            <span>{t('administrativeServices')}</span>
                        </Tag>
                        <SloganSection01>
                            {t('section05_title')}
                        </SloganSection01>
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
                            <div style={{ width: '167px' }}>
                                <RoundedButton href='/services/administrative-services'>
                                    {t('readMore')}
                                </RoundedButton>
                            </div>
                        </HeadingSection05>
                    </motion.div>
                    <ImageWrapper>
                        <Image src={american} />
                    </ImageWrapper>
                    <BackgroundGradient />
                </HomeSection05Layout>
            </HomeSection05Container>
        </Background>
    )
}

const Background = styled.div`
    background: rgba(217, 224, 236, 0.2);
    border-radius: 40px 0px;
    position: relative;
    z-index: 1;
`

const BackgroundGradient = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 600px;
    height: 600px;
    background: linear-gradient(21.66deg, #4364f7 22.39%, #1b1464 95.86%);
    border-radius: 300px 0px 0px 0px;

    @media screen and (max-width: 1200px) {
        width: 500px;
        height: 600px;
    }

    @media screen and (max-width: 768px) {
        width: 400px;
    }

    @media screen and (max-width: 550px) {
        width: 300px;
    }
`

export const HomeSection05Container = styled(motion.div)`
    padding: 3rem 0;
`

const HomeSection05Layout = styled(HomeSection01Wrapper)`
    .text-content {
        padding: 3rem;
    }
`

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
    }
`

const HeadingSection05 = styled(HeadingSection01)``

const ImageWrapper = styled.div`
    z-index: 2;

    @media screen and (min-width: 1800px) {
        transform: translate(20px, 100px);
    }

    @media screen and (max-width: 1799px) {
        transform: translate(-200px, 102px);
    }

    @media screen and (max-width: 1200px) {
        transform: translate(-200px, 155px);
    }

    @media screen and (max-width: 1024px) {
        transform: translate(0px, 49px);
    }
`

export default HomeSection05
