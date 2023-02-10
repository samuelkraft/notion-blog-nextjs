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
import GradientButton from '../button/GradientButton'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

import check from '../../images/check.svg'

const HomeSectionJuridique = () => {
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
            <HomeSectionJuridiqueWrapper>
                <ImageWrapper />
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Tag>
                        <span>{t('legalServices')}</span>
                    </Tag>
                    <SloganSection01>
                        {t('sectionJuridique_title')}
                    </SloganSection01>
                    <HeadingSection01>
                        <h2>
                            {t('sectionJuridique_text1')}
                            <b>
                                <u> {t('sectionJuridique_bold1')}</u>
                            </b>
                            {t('sectionJuridique_text2')}
                        </h2>
                    </HeadingSection01>

                    <ColumnWrapper>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check1'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet1')}</h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check2'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet2')}</h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet3')}</h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet4')}</h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={50}
                                    height={50}
                                />
                                <h2>{t('sectionJuridique_bullet5')}</h2>
                            </RowWrapper>
                        </HeadingSection01>
                    </ColumnWrapper>
                    <HeadingSection01>
                        <Link href='/services/legal-services'>
                            <GradientButton
                                gradientColor='#0657CF'
                                type='button'
                                width={200}
                            >
                                {t('readMore')}
                            </GradientButton>
                        </Link>
                    </HeadingSection01>
                </motion.div>
            </HomeSectionJuridiqueWrapper>
        </HomeSection01Container>
    )
}

export const HomeSectionJuridiqueWrapper = styled(HomeSection01Wrapper)`
    flex-flow: column-reverse;

    @media screen and (min-width: 768px) {
        flex-flow: column-reverse;
    }

    @media screen and (min-width: 1024px) {
        flex-flow: column-reverse;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;
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
    gap: 1rem;
    align-items: start;
    margin-bottom: 2rem;
`

export const RowWrapper = styled.div`
    display: flex;
    gap: 2rem;
    line-height: 1.5;
    align-items: center;
`

export default HomeSectionJuridique
