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
import { RowWrapper, ColumnWrapper } from './HomeSectionJuridique'
import check from '../../images/check.svg'
import fiscal from '../../images/fiscal_hero_img.png'
import { RoundedButton } from './HeroHomePage'

const HomeSectionFiscal = () => {
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
            <FiscalWrapper>
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Tag>
                        <span>{t('taxServices')}</span>
                    </Tag>
                    <SloganSection01>
                        {t('sectionFiscal_title')}
                    </SloganSection01>
                    <HeadingSection01>
                        <h2>
                            {t('sectionFiscal_bold1')}
                            {t('sectionFiscal_text1')}
                            {t('sectionFiscal_text2')}
                        </h2>
                    </HeadingSection01>

                    <ColumnWrapper>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check1'
                                    width={33}
                                    height={33}
                                />
                                <h2>
                                    <b>{t('sectionFiscal_bullet1_bold')}</b>
                                    {t('sectionFiscal_bullet1')}
                                </h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check2'
                                    width={33}
                                    height={33}
                                />
                                <h2>
                                    {t('sectionFiscal_bullet2')}
                                    <b>{t('sectionFiscal_bullet2_bold')}</b>
                                </h2>
                            </RowWrapper>
                        </HeadingSection01>
                        <HeadingSection01>
                            <RowWrapper className=''>
                                <Image
                                    src={check}
                                    alt='check3'
                                    width={33}
                                    height={33}
                                />
                                <h2>
                                    {t('sectionFiscal_bullet3')}
                                    <b>{t('sectionFiscal_bullet3_bold')}</b>
                                    {t('sectionFiscal_bullet3_2')}
                                </h2>
                            </RowWrapper>
                        </HeadingSection01>
                    </ColumnWrapper>
                    <HeadingSection01>
                        <div style={{ width: '167px' }}>
                            <RoundedButton href='/services/tax-services'>
                                {t('readMore')}
                            </RoundedButton>
                        </div>
                    </HeadingSection01>
                </motion.div>
                <ImageWrapperGradient>
                    <Image
                        src={fiscal}
                        fill
                        alt='conseiller fiscal'
                    />
                </ImageWrapperGradient>
            </FiscalWrapper>
        </HomeSection01Container>
    )
}

export const FiscalWrapper = styled(HomeSection01Wrapper)`
    @media screen and (min-width: 1024px) {
        flex-flow: row;
        justify-content: space-between;
        gap: 6rem;
    }
`

export const ImageWrapperGradient = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 1199px) {
        width: 480px;
        height: 580px;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 5rem;
    }

    @media screen and (max-width: 600px) {
        width: 300px;
        height: 300px;
    }

    @media screen and (max-width: 1250px) {
        width: 480px;
        height: 580px;
    }

    @media screen and (min-width: 1250px) {
        width: 520px;
        height: 600px;
    }
`

export default HomeSectionFiscal
