import { useTranslation } from 'next-i18next'
import styled, { keyframes } from 'styled-components'
import veepee from '../../images/veepee.png'
import varonis from '../../images/varonis.png'
import follow from '../../images/follow.png'
import kmart from '../../images/kmart.png'
import chateautec from '../../images/chateautec.png'
import complices from '../../images/complices.png'
import face2face from '../../images/face2face.png'
import planon from '../../images/planon.png'
import trucknet from '../../images/trucknet.png'
import louboutin from '../../images/louboutin.png'
import segway from '../../images/segway.png'
import wilkie from '../../images/wilkie.png'
import neuberger from '../../images/neuberger.png'
import unitedHaztalan from '../../images/unitedHaztalan.png'
import vestiaireCollectif from '../../images/vestiaireCollectif.png'
import latham from '../../images/latham.png'
import airCullinaire from '../../images/airCullinaire.png'
import stoick from '../../images/stoick.png'
import foodGates from '../../images/foodGates.png'
import pangea from '../../images/pangea.png'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const InfiniteSlider = () => {
    const { t } = useTranslation('common')
    const images = [
        face2face,
        pangea,
        foodGates,
        stoick,
        trucknet,
        complices,
        planon,
        chateautec,
        airCullinaire,
        varonis,
        unitedHaztalan,
        neuberger,
        segway,
        latham,
        wilkie,
        vestiaireCollectif,
        louboutin,
        follow,
        kmart,
        veepee,
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

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
                when: 'afterChildren',
            }}
            ref={ref}
        >
            <Heading>{t('trustedUs')}</Heading>
            <InfiniteSliderContainer>
                <InfiniteSliderWrapper>
                    <BrandSlider>
                        {images.map((i) => {
                            return (
                                <div key={Math.random(0, 100)}>
                                    <Image
                                        src={i}
                                        alt={i.toString()}
                                    />
                                </div>
                            )
                        })}
                        {images.map((i) => {
                            return (
                                <div key={Math.random(0, 100)}>
                                    <Image
                                        src={i}
                                        alt={i.toString()}
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

const Heading = styled.h3`
    font-family: 'AllRoundGothic-Demi';
    text-transform: uppercase;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1b1464;
    margin: 3rem 0rem;
    @media screen and (min-width: 320px) {
        font-size: 18px;
    }
    @media screen and (min-width: 375px) {
        font-size: 24px;
    }
    @media screen and (min-width: 768px) {
        font-size: 32px;
    }
`

const InfiniteSliderContainer = styled.div`
    margin: 3rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem;
`

const InfiniteSliderWrapper = styled.div`
    width: 400%;
    position: relative;
    overflow: hidden;
    height: 8rem;
`

const SlideInfinite = keyframes`
	
		0% {
			left: 0;
		}

		25% {
			left: -75%;
		}
		
		50% {
			left: -150%;
		}

		75% {
			left: -225%;
		}
		100% {
			left: -300%;
		}
	
`

const SlideInfiniteMobile = keyframes`
	
		0% {
			left: 0;
		}

		25% {
			left: -375%;
		}
		
		50% {
			left: -750%;
		}

		75% {
			left: -1000%;
		}
		100% {
			left: -1500%;
		}
	
`

const BrandSlider = styled.div`
    width: 400%;
    display: flex;
    align-items: center;
    height: 8rem;
    justify-content: space-around;
    position: absolute;
    left: 0;
    gap: 2rem;
    animation-name: ${SlideInfinite};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;

    @media screen and (max-width: 500px) {
        width: 1200%;
        animation-name: ${SlideInfiniteMobile};
        animation-duration: 25s;
    }
`

export default InfiniteSlider
