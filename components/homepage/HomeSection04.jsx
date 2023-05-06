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
import { useEffect, useRef, useState } from 'react'
import expertiseRH from '../../images/expertise_RH.svg'
import Image from 'next/image'
import { RoundedButton } from './HeroHomePage'
import { BackgroundBlur } from './HomeSection01'
const HomeSection04 = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [opened, setOpened] = useState(false)

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
            <HomeSection04Wrapper>
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Tag>
                        <span>{t('payrollServices')}</span>
                    </Tag>
                    <SloganSection01>{t('section04_title')}</SloganSection01>
                    <HeadingSection01>
                        <h2>
                            {t('section04_heading_pt1')}
                            <b>
                                <u> {t('section04_bold1')}</u>
                            </b>
                            {t('section04_heading_pt2')}
                            <b>{t('section04_bold2')}</b>
                            {t('section04_heading_pt3')}
                            <b>{t('section04_bold3')}</b>
                            {t('section04_heading_pt4')}
                        </h2>
                    </HeadingSection01>
                    <HeadingSection01>
                        <div
                            className=''
                            style={{ width: '158px' }}
                        >
                            <RoundedButton href='/services/payroll-services'>
                                {t('readMore')}
                            </RoundedButton>
                        </div>
                    </HeadingSection01>
                </motion.div>
                <ImageWrapper>
                    <BackgroundBlur />

                    <Image
                        src={expertiseRH}
                        fill
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        alt='expertiseRH'
                        transition={{
                            delay: 5,
                            default: {
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                            scale: {
                                type: 'spring',
                                damping: 10,
                                stiffness: 100,
                                restDelta: 0.001,
                            },
                        }}
                    />
                </ImageWrapper>
            </HomeSection04Wrapper>
        </HomeSection01Container>
    )
}

const HomeSection04Wrapper = styled(HomeSection01Wrapper)`
    @media screen and (min-width: 1024px) {
        flex-flow: row;
        justify-content: space-between;
        gap: 5rem;
    }
`

const ImageWrapper = styled(motion.div)`
    position: relative;
    z-index: 1;
    width: 500px;
    height: 500px;
    margin-top: 2rem;
    justify-self: center;

    @media screen and (max-width: 600px) {
        width: 300px;
        height: 300px;
    }
`

const ImageWrapper1 = styled(motion.div)`
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 20vw;
    height: 50vh;
    border-top-right-radius: 25vw;
    border-bottom-left-radius: 25vw;
    border-bottom-right-radius: 25vw;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630fb0b4b919f6551863564a_image-why-us-01.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 5;

    @media screen and (max-width: 991px) {
        justify-self: start;
        width: 40vw;
        height: 75vw;
    }
    @media screen and (min-width: 769px) and (max-width: 1200px) {
        justify-self: center;
        width: 25vw;
        height: 40vw;
    }

    @media screen and (max-width: 767px) {
        height: 40vh;
    }

    @media screen and (max-width: 479px) {
        height: 40vh;
    }

    @media screen and (min-width: 1440px) {
        width: 12vw;
        height: 25vw;
    }

    @media screen and (min-width: 1800px) {
        width: 15vw;
        height: 25vw;
    }
`
const ImageWrapper2 = styled(motion.div)`
    width: 12vw;
    height: 12vw;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    background-image: url('https://assets.website-files.com/62e87007d1ea4833faeaf799/630fb7c04f5bb53842dd0208_why-us-image-02.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 4;

    @media screen and (max-width: 1200px) {
        justify-self: start;
        width: 36vw;
        height: 36vw;
    }

    @media screen and (max-width: 767px) {
        justify-self: start;
    }

    @media screen and (max-width: 479px) {
        justify-self: start;
    }
`

export default HomeSection04
