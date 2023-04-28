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
import { useRouter } from 'next/router'

const NumbersSection = () => {
    const nbClientFrance = 200
    const nbClientEtranger = 100

    const [count, setCount] = useState(0)
    const controls = useAnimation()

    const [count2, setCount2] = useState(0)
    const controls2 = useAnimation()

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const router = useRouter()

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            transition: {
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
        controls2.start({
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
        <RowWrapper ref={ref}>
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
                <div style={{ marginTop: '2rem' }}>
                    <RowImageWrapper>
                        <Image
                            src={associe2}
                            alt='associe2'
                            width={32}
                            height={32}
                        />
                        <Image
                            src={associe1}
                            alt='associe1'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={associe3}
                            alt='associe3'
                            width={32}
                            height={32}
                        />
                    </RowImageWrapper>
                    <h1>3</h1>
                    <h2>{t('associes')}</h2>
                </div>
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
                <div style={{ marginTop: '2rem' }}>
                    <RowImageWrapper>
                        <Image
                            src={france}
                            width={32}
                            height={32}
                            alt='france'
                        />
                        <Image
                            src={world}
                            alt='office'
                            width={40}
                            height={40}
                        />
                        <Image
                            src={israel}
                            width={32}
                            height={32}
                            alt='israel'
                        />
                    </RowImageWrapper>
                    <h1>2</h1>
                    <h2>
                        {t('bureaux')} <br /> Paris - Tel Aviv
                    </h2>
                </div>
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
                    width={45}
                    height={45}
                />
                <h1>25</h1>
                <h2>{t('collaborateurs')}</h2>
            </NumberCard>

            <NumberCard
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0.5,
                }}
                transition={{
                    delay: 2,
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
                    src={france}
                    alt='france'
                    width={45}
                    height={45}
                />
                <motion.h1 animate={controls}>
                    <span>+</span>
                    {count}
                </motion.h1>
                <h2>{t('clients_francais')}</h2>
            </NumberCard>
            <NumberCard
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0.5,
                }}
                transition={{
                    delay: 2.25,
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
                <div
                    style={{
                        marginTop: router.locale === 'en' ? '2rem' : '0',
                    }}
                >
                    <Image
                        src={world}
                        alt='world'
                        width={38}
                        height={38}
                    />
                    <motion.h1 animate={controls2}>
                        <span>+</span>
                        {count2}
                    </motion.h1>
                    <h2>{t('clients_etrangers')}</h2>
                </div>
            </NumberCard>
            <Divider />
        </RowWrapper>
    )
}

const NumbersSectionContainer = styled(motion.div)`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const RowWrapper = styled(motion.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0;

    @media screen and (max-width: 600px) {
        flex-flow: column wrap;
    }
`

const RowImageWrapper = styled(motion.div)`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    line-height: 1.5;
`

const NumberCard = styled(motion.div)`
    padding: 1rem;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    /* shadow box 2 */

    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.07);
    border-radius: 20px;

    width: 177.52px;
    height: 288.3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 64px;
        /* identical to box height, or 160% */

        text-align: center;
        letter-spacing: 0.327px;

        color: #1b1464;
    }

    span {
        color: #0657cf;
    }

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #1b1464;
    }
`

const Divider = styled.div`
    height: 1px;
    border: 2px solid #f0f3f7;
    margin: 3rem auto;
    max-width: 1200px;
    width: 100%;
`

export default NumbersSection
