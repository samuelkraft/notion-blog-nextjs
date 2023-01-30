import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import { SloganSection01, HeadingSection01 } from './HomeSection01'
import { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

const HomeSection03 = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <HomeSection03Container
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
            <TextContent>
                <SloganSection03>{t('section03_title')}</SloganSection03>
                <HeadingSection03>
                    {t('section03_heading_pt1')}
                    <b>
                        <u>{t('section03_bold1')}</u>
                    </b>
                    {t('section03_heading_pt2')}
                    <b>
                        <u>{t('section03_bold2')}</u>
                    </b>
                    {t('section03_heading_pt3')}
                    <b>
                        <u>{t('section03_bold3')}</u>
                    </b>
                    {t('section03_heading_pt4')}
                </HeadingSection03>
            </TextContent>
        </HomeSection03Container>
    )
}

const HomeSection03Container = styled(motion.div)`
    background: rgba(217, 224, 236, 0.2);
`

const TextContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    align-self: center;
    padding: 8rem 18rem;
    grid-gap: 1.6rem;
    @media screen and (max-width: 500px) {
        padding: 2rem;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        padding: 8rem 15rem;
    }
`

const HeadingSection03 = styled.h2`
    fontsize: 1.6rem;
    color: #1b1464;
`

const SloganSection03 = styled(SloganSection01)`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'AllRoundGothic-Demi';
    font-size: 42px;
    color: #1b1464;
    line-height: 1.2;

    @media screen and (max-width: 465px) {
        font-size: 42px;
    }

    @media screen and (min-width: 768px) {
        font-size: 38px;
        width: 100%;
    }
    @media screen and (min-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 46px;
        letter-spacing: 0.327px;
    }
`

export default HomeSection03
