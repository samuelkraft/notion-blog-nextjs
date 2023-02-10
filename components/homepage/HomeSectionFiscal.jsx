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
import { ImageWrapper, RowWrapper, ColumnWrapper } from './HomeSectionJuridique'
import check from '../../images/check.svg'

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
            <HomeSection01Wrapper>
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
                            <b>{t('sectionFiscal_bold1')}</b>
                            {t('sectionFiscal_text1')}
                        </h2>
                    </HeadingSection01>

                    <HeadingSection01>
                        <h2>{t('sectionFiscal_text2')}</h2>
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
                                    width={50}
                                    height={50}
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
                                    width={50}
                                    height={50}
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
                        <Link href='/services/tax-services'>
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
                <ImageWrapperFiscal />
            </HomeSection01Wrapper>
        </HomeSection01Container>
    )
}

const ImageWrapperFiscal = styled(ImageWrapper)`
    border-top-right-radius: 25vw;
    border-bottom-right-radius: 25vw;
    border-top-left-radius: 0vw;
    border-bottom-left-radius: 0vw;

    @media screen and (min-width: 1200px) {
        transform: translateX(0%);
    }
    background-image: url('https://img.freepik.com/free-photo/entrepreneur-man-brainstorming-management-strategy-working-hard-meeting-office_482257-8165.jpg?w=740&t=st=1675455856~exp=1675456456~hmac=f267d656bf142e394c7555db9a7755e4e92aac78c09117019440f8356bc47a3d');
`

export default HomeSectionFiscal
