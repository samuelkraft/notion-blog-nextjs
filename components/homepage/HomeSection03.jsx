import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import {
    SloganSection01,
    HomeSection01Container,
    HeadingSection01,
    HomeSection01Wrapper,
    Tag,
} from './HomeSection01'
import { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import map from '../../images/france_map.svg'
import Image from 'next/image'
import { titleAnim, fade } from '../../lib/animation'

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
        <HomeSection03Container>
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
                    <ImageWrapper>
                        <Image
                            src={map}
                            fill
                            alt='france map'
                        />
                    </ImageWrapper>
                    <BlockContainer />

                    <motion.div
                        className='text-content'
                        variants={titleAnim}
                        initial='hidden'
                        animate='show'
                    >
                        <Tag>{t('section03_tag')}</Tag>
                        <SloganSection03>
                            {t('section03_title')}
                        </SloganSection03>
                        <HeadingSection01>
                            <h2>
                                {t('section03_heading_pt1')}
                                <b>{t('section03_bold1')}</b>
                                {t('section03_heading_pt2')}
                                <b>{t('section03_bold2')}</b>
                                {t('section03_heading_pt3')}
                            </h2>
                        </HeadingSection01>
                        <HeadingSection01>
                            <h2>
                                {t('section03_heading_pt3_2')}

                                <b>{t('section03_bold3')}</b>
                                {t('section03_heading_pt4')}
                            </h2>
                        </HeadingSection01>
                    </motion.div>
                </HomeSection03Wrapper>
            </HomeSection01Container>
        </HomeSection03Container>
    )
}

const HomeSection03Container = styled.div`
    background: rgba(217, 224, 236, 0.2);
    border-radius: 40px 0px;
    position: relative;
`
export const HomeSection03Wrapper = styled.div`
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;

    .text-content {
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    @media screen and (min-width: 1024px) {
        flex-flow: row;
        gap: 6rem;
    }
    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 2rem;
    }
    @media screen and (min-width: 1440px) {
        flex-flow: row;
        gap: 5rem;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    top: 50;
    left: 0;
    width: 45%;
    height: 500px;

    @media screen and (max-width: 1200px) {
        width: 40%;
        top: 20%;
    }

    @media screen and (max-width: 1024px) {
        top: 45%;
        bottom: 0%;
        width: 65%;
    }

    @media screen and (max-width: 768px) {
        width: 80% !important ;
    }

    @media screen and (max-width: 480px) {
        top: 60%;
    }
`
const BlockContainer = styled.div`
    width: 500px;
    height: 500px;
    @media screen and (max-width: 1024px) {
        width: 400px;
        height: 400px;
        margin-top: 5rem;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`

const SloganSection03 = styled(SloganSection01)``

export default HomeSection03
