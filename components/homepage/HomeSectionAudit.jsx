import styled from 'styled-components'
import Image from 'next/image'
import { HomeSection01Container, SloganSection01, Tag } from './HomeSection01'

import { motion, useInView } from 'framer-motion'
import { titleAnim } from '../../lib/animation'
import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { HeadingSection02 } from './HomeSection02'
import audit from '../../images/audit_hero_img.png'
import { HomeSection03Wrapper } from './HomeSection03'
import { ImageWrapperGradient } from './HomeSectionFiscal'
import { RoundedButton } from './HeroHomePage'

const HomeSectionAudit = () => {
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
            <HomeSection03Wrapper>
                <ImageWrapperGradient>
                    <Image
                        src={audit}
                        fill
                        alt='Audit'
                    />
                </ImageWrapperGradient>
                <motion.div
                    className='text-content'
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                >
                    <Tag>
                        <span>{t('auditServices')}</span>
                    </Tag>
                    <SloganSection01>{t('sectionAudit_title')}</SloganSection01>
                    <HeadingSection02>
                        <h2>
                            {t('sectionAudit_text1')}
                            <b>{t('sectionAudit_bold1')}</b>
                            {t('sectionAudit_text2')}
                            <b>{t('sectionAudit_bold2')}</b>
                        </h2>
                    </HeadingSection02>

                    <HeadingSection02>
                        <h2>{t('sectionAudit_text3')}</h2>
                    </HeadingSection02>
                    <HeadingSection02>
                        <h2>{t('sectionAudit_text4')}</h2>
                    </HeadingSection02>
                    <HeadingSection02>
                        <div style={{ width: '157px' }}>
                            <RoundedButton href='/services/audit-services'>
                                {t('readMore')}
                            </RoundedButton>
                        </div>
                    </HeadingSection02>
                </motion.div>
            </HomeSection03Wrapper>
        </HomeSection01Container>
    )
}

export default HomeSectionAudit
