import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'next-i18next'
import cic from '../../images/cic.png'
import businessFrance from '../../images/businessFrance.png'
import caillaut from '../../images/caillaut.png'
import chooseParis from '../../images/chooseParis.png'
import franco from '../../images/franco.png'
import frenchAmerican from '../../images/frenchAmerican.png'
import pennylane from '../../images/pennylane.png'
import memories from '../../images/memories.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HomeSection05Wrapper } from '../homepage/HomeSection05'
import { HeroContainer } from '../homepage/HeroHomePage'
import Image from 'next/image'
import { SloganSection01 } from '../homepage/HomeSection01'

const AboutSection04 = () => {
    const { t } = useTranslation('common')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const partners = [
        cic,
        businessFrance,
        pennylane,
        caillaut,
        memories,
        chooseParis,
        frenchAmerican,
        franco,
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
                when: 'beforeChildren',
            }}
            ref={ref}
        >
            <OurPartners>
                <SloganSection01>{t('ourPartners')}</SloganSection01>
            </OurPartners>
            <InfiniteSliderContainer>
                <InfiniteSliderWrapper>
                    <BrandSlider>
                        {partners.map((i) => {
                            return (
                                <div key={Math.random(0, 100)}>
                                    <Image
                                        src={i}
                                        alt={i.toString()}
                                        height={100}
                                    />
                                </div>
                            )
                        })}
                        {partners.map((i) => {
                            return (
                                <div key={Math.random(0, 100)}>
                                    <Image
                                        src={i}
                                        alt={i.toString()}
                                        height={100}
                                    />
                                </div>
                            )
                        })}
                    </BrandSlider>
                </InfiniteSliderWrapper>
            </InfiniteSliderContainer>
        </motion.div>
    )
}

export default AboutSection04

const OurPartners = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InfiniteSliderContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        margin: 2rem 0;
    }
`

const InfiniteSliderWrapper = styled.div`
    width: 180%;
    position: relative;
    overflow: hidden;
    height: 15rem;
`

const SlideInfinite = keyframes`
	
		0% {
			left: 0;
		}
	
		100% {
			left: -80%;
		}
	
`

const BrandSlider = styled.div`
    width: 180%;
    display: flex;
    align-items: center;
    height: 15rem;
    justify-content: space-around;
    position: absolute;
    left: 0;
    gap: 2rem;
    animation-name: ${SlideInfinite};
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease-in-out;
`
