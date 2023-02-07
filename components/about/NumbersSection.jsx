import styled from 'styled-components'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import associe1 from '../../images/associe1.svg'
import associe2 from '../../images/associe2.svg'
import associe3 from '../../images/associe3.svg'
import france from '../../images/france.svg'
import handshake from '../../images/handshake.svg'
import israel from '../../images/israel.svg'
import world from '../../images/world.svg'
import { useTranslation } from 'next-i18next'
import { useState, useEffect, useRef } from 'react'

const NumbersSection = () => {
    const nbClientFrance = 200
    const nbClientEtranger = 100

    const [count, setCount] = useState(0)
    const controls = useAnimation()

    const [count2, setCount2] = useState(0)
    const controls2 = useAnimation()

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 2,
                ease: 'easeInOut',
            },
        })
        let intervalId = setInterval(() => {
            setCount((c) => {
                if (c >= nbClientFrance - 1) {
                    clearInterval(intervalId)
                }
                return c + 1
            })
        }, 50)
        return () => clearInterval(intervalId)
    }, [controls, nbClientFrance])

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 2,
                ease: 'easeInOut',
            },
        })
        let intervalId = setInterval(() => {
            setCount2((c) => {
                if (c >= nbClientEtranger - 1) {
                    clearInterval(intervalId)
                }
                return c + 1
            })
        }, 100)
        return () => clearInterval(intervalId)
    }, [controls2, nbClientEtranger])

    const { t } = useTranslation('common')
    return (
        <>
            <NumbersSectionContainer ref={ref}>
                <NumberCard
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 1.25,
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
                >
                    <RowImageWrapper>
                        <Image
                            src={associe2}
                            alt='associe2'
                            width={60}
                            height={60}
                        />
                        <Image
                            src={associe1}
                            alt='associe1'
                            width={80}
                            height={80}
                        />
                        <Image
                            src={associe3}
                            alt='associe3'
                            width={60}
                            height={60}
                        />
                    </RowImageWrapper>
                    <h1>3</h1>
                    <h2>Associés</h2>
                </NumberCard>
                <NumberCard
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 1.5,
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
                >
                    <RowImageWrapper>
                        <Image
                            src={france}
                            width={60}
                            height={60}
                            alt='france'
                        />
                        <Image
                            src={world}
                            alt='office'
                            width={80}
                            height={80}
                        />
                        <Image
                            src={israel}
                            width={60}
                            height={60}
                            alt='israel'
                        />
                    </RowImageWrapper>
                    <h1>2</h1>
                    <h2>
                        Bureaux <br /> Paris - Tel Aviv
                    </h2>
                </NumberCard>
                <NumberCard
                    className='secondary'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0.5,
                    }}
                    transition={{
                        delay: 1.75,
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
                >
                    <Image
                        src={handshake}
                        alt='handshake'
                        width={80}
                        height={80}
                    />
                    <h1>25</h1>
                    <h2>Collaborateurs</h2>
                </NumberCard>
            </NumbersSectionContainer>

            <RowWrapper>
                <NumberCard animate={controls}>
                    <Image
                        src={france}
                        alt='france'
                        width={80}
                        height={80}
                    />
                    <h1>
                        <span>+</span>
                        {count}
                    </h1>
                    <h2>Clients français</h2>
                </NumberCard>
                <NumberCard animate={controls2}>
                    <Image
                        src={world}
                        alt='world'
                        width={80}
                        height={80}
                    />
                    <h1>
                        <span>+</span>
                        {count2}
                    </h1>
                    <h2>Clients étranger</h2>
                </NumberCard>
            </RowWrapper>
        </>
    )
}

const NumbersSectionContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        .secondary {
            transform: translateX(50%);
        }
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        .secondary {
            transform: translateX(0%);
        }
    }
`

const RowWrapper = styled(motion.div)`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 1rem;

    @media screen and (max-width: 900px) {
        flex-flow: column;
    }
`

const RowImageWrapper = styled(motion.div)`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    line-height: 1.5;
`

const NumberCard = styled(motion.div)`
    padding: 2rem;
    background-color: #fff;
    border-radius: 30px;
    border: 3px solid #1b109e;
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: rgba(76, 95, 200, 0.4) 5px 5px, rgba(48, 13, 177, 0.3) 10px 10px,
        rgba(46, 114, 240, 0.2) 15px 15px, rgba(46, 56, 240, 0.1) 20px 20px,
        rgba(46, 149, 240, 0.05) 25px 25px;
    h1 {
        font-size: 3.5rem;
        color: #1b1464;
        font-family: 'AllRoundGothic-Demi';
    }

    span {
        color: #0657cf;
    }

    h2 {
        font-size: 1.5rem;
        color: #1b109e;
        font-family: 'Gilroy';
        font-weight: 600;
    }
`

export default NumbersSection
