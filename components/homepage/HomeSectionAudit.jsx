import styled from 'styled-components'
import {
    HomeSection01Container,
    HomeSection01Wrapper,
    SloganSection01,
    Tag,
    HeadingSection01,
} from './HomeSection01'

import { motion, useInView } from 'framer-motion'
import { titleAnim } from '../../lib/animation'
import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { HomeSectionJuridiqueWrapper } from './HomeSectionJuridique'
import { HeadingSection02 } from './HomeSection02'

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
            <HomeSectionJuridiqueWrapper>
                <ImageWrapperAudit />
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
                        <Link href='/services/audit-services'>
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
            </HomeSectionJuridiqueWrapper>
        </HomeSection01Container>
    )
}

const ImageWrapperAudit = styled.div`
    border-top-left-radius: 8vw;
    border-bottom-left-radius: 8vw;
    border-top-right-radius: 8vw;
    border-bottom-right-radius: 8vw;
    background-image: url('https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
        height: 60vh;
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
        height: 60vh;
        width: 100%;
        background-position: 50% 50%;
        margin-right: 5rem;
        transform: translateX(0%);
    }
    @media screen and (min-width: 2100px) {
        height: 50vh;
        width: 25vw;
        border-top-left-radius: 6vw;
        border-bottom-left-radius: 6vw;
        border-top-right-radius: 6vw;
        border-bottom-right-radius: 6vw;
        background-position: 50% 40%;
        margin-right: 5rem;
    }
`

export default HomeSectionAudit
