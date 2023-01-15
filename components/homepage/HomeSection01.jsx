import React from 'react'

import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'
import styled from 'styled-components'

// Animation
import { motion, useInView } from 'framer-motion'
import { titleAnim, fade } from '../../lib/animation'
import { Slogan, Heading, HeroWrapper } from './HeroHomePage'

import circle_1 from '../../images/circle_1.svg'
import circle_2 from '../../images/circle_2.svg'
import circle_3 from '../../images/circle_3.svg'
import circle_4 from '../../images/circle_4.svg'
import circle_5 from '../../images/circle_5.svg'
import circle_6 from '../../images/circle_6.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const HomeSection01 = () => {
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
						<span>{t('whyUs')}</span>
					</Tag>
					<SloganSection01>
						<motion.h1
							initial={{ y: 200, opacity: 0.5 }}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								duration: 1,
								delay: 3,
								ease: 'easeInOut',
							}}
						>
							{t('section01_title')}
						</motion.h1>
					</SloganSection01>
					<motion.div
						initial={{ y: 200, opacity: 0.5 }}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 3,
							ease: 'easeInOut',
						}}
					>
						<HeadingSection01>
							<h2>
								{t('section01_heading_pt1')}
								<b>{t('section01_bold1')}</b>
								{t('section01_heading_pt2')}
							</h2>
						</HeadingSection01>
						<HeadingSection01>
							<h2>
								{t('section01_heading_pt3')}
								<b>{t('section01_bold2')}</b>
								{t('section01_heading_pt4')}
							</h2>
						</HeadingSection01>
						<HeadingSection01 style={{ marginBottom: '3rem' }}>
							<h2>
								{t('our')}
								<b>{t('section01_bold3')}</b>
								{t('section01_heading_pt5')}
							</h2>
						</HeadingSection01>
						<Link href='/services'>
							<GradientButton
								gradientColor='#0657CF'
								type='button'
								width={200}
							>
								{t('readMore')}
							</GradientButton>
						</Link>
					</motion.div>
				</motion.div>
				<FeaturesCardContainer>
					<FeaturesCard>
						<Image
							src={circle_1}
							alt='comptable_dedie'
						/>
						<div className='text-content'>
							{t('comptable_dedie')}
						</div>
					</FeaturesCard>
					<FeaturesCard2>
						<Image
							src={circle_2}
							alt='administrativeServices'
						/>
						<div className='text-content'>
							{t('administrativeServices')}
						</div>
					</FeaturesCard2>
					<FeaturesCard3>
						<Image
							src={circle_3}
							alt='expertiseRH'
						/>
						<div className='text-content'>
							{t('expertiseRH')}
						</div>
					</FeaturesCard3>
					<FeaturesCard4>
						<Image
							src={circle_4}
							alt='conseilJuridique'
						/>
						<div className='text-content'>
							{t('conseilJuridique')}
						</div>
					</FeaturesCard4>
					<FeaturesCard5>
						<Image
							src={circle_5}
							alt='conseillerFiscal'
						/>
						<div className='text-content'>
							{t('conseillerFiscal')}
						</div>
					</FeaturesCard5>
					<FeaturesCard6>
						<Image
							src={circle_6}
							alt='auditServices'
						/>
						<div className='text-content'>
							{t('auditServices')}
						</div>
					</FeaturesCard6>
				</FeaturesCardContainer>
			</HomeSection01Wrapper>
		</HomeSection01Container>
	)
}

export default HomeSection01

export const HomeSection01Container = styled(motion.div)`
	padding: 2rem;
	@media screen and (min-width: 768px) {
		padding: 3rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 3rem 12%;
	}

	@media screen and (min-width: 1440px) {
		padding: 3rem 12%;
	}
	@media screen and (min-width: 1800px) {
		padding: 3rem 8%;
	}

	@media screen and (min-width: 2100px) {
		padding: 3rem 16%;
	}
	@media screen and (min-width: 2500px) {
		padding: 3rem 25%;
	}
`

export const HomeSection01Wrapper = styled(HeroWrapper)`
	.text-content {
		@media screen and (min-width: 1024px) {
			margin-top: 0rem;
		}

		@media screen and (min-width: 1440px) {
			margin-top: 0rem;
			gap: 2rem;
		}
	}

	@media screen and (min-width: 768px) {
		font-size: 48px;
		flex-flow: column;
	}

	@media screen and (min-width: 1024px) {
		font-size: 48px;
		flex-flow: column;
		justify-content: center;
	}

	@media screen and (min-width: 1200px) {
		font-size: 50px;
		justify-content: space-evenly;
		flex-flow: row;
		gap: 2rem;
	}
	@media screen and (min-width: 1440px) {
		font-size: 52px;
		flex-flow: row;
		justify-content: space-evenly;
		gap: 5rem;
	}
`

export const HeadingSection01 = styled(Heading)`
	margin-top: 1.5rem;
	h2 {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #1b1464;
		line-height: 29px;
	}

	@media screen and (max-width: 465px) {
		h2 {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: 20px;
		}
	}

	@media screen and (min-width: 1024px) {
		h2 {
			font-size: 22px;
		}
		width: 100%;
	}

	@media screen and (min-width: 1200px) {
		h2 {
			font-size: 20px;
		}
		width: 90%;
	}
`

export const SloganSection01 = styled(Slogan)`
	h1 {
		font-family: 'AllRoundGothic-Demi';
		font-size: 42px;
		color: #1b1464;
		line-height: 1.2;

		@media screen and (max-width: 465px) {
			font-size: 42px;
		}

		@media screen and (min-width: 768px) {
			font-size: 52px;
			width: 40rem;
		}
		@media screen and (min-width: 1200px) {
			font-size: 56px;
			width: 30rem;
			margin-top: 3.5rem;
		}
		@media screen and (min-width: 1440px) {
			width: 40rem;
			font-size: 64px;
			line-height: 77px;
			letter-spacing: 0.327px;
		}
	}
`

export const FeaturesCardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	z-index: 10;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;

	align-items: center;
	justify-items: center;
	justify-content: center;

	@media screen and (min-width: 320px) {
		grid-template-columns: 1fr;
		justify-self: center;
	}

	@media screen and (min-width: 768px) {
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-columns: 300px 300px;
	}

	@media screen and (min-width: 1200px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
	}

	margin-top: 5rem;
`

export const FeaturesCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 2.5px solid #1b1464;
	border-radius: 51px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 2rem;
	width: 300px;
	height: 280px;
	position: relative;

	.text-content {
		margin-top: 2rem;
		font-family: 'AllRoundGothic-Demi';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 48px;
		letter-spacing: 0.327px;
		color: #1b1464;
	}

	@media screen and (min-width: 320px) {
		width: 300px;
		height: 280px;
	}

	@media screen and (min-width: 1200px) {
		width: 230px;
		height: 300px;

		.text-content {
			margin-top: 2rem;
			font-size: 26px;
		}
	}
	@media screen and (min-width: 1440px) {
		width: 300px;
		height: 280px;

		.text-content {
			margin-top: 2rem;
			font-size: 32px;
		}
	}
`

const FeaturesCard2 = styled(FeaturesCard)`
	transform: translateY(-3rem);
	@media screen and (min-width: 320px) {
		transform: translateY(0);
	}

	@media screen and (min-width: 768px) {
		transform: translateY(-3rem);
	}
`
const FeaturesCard3 = styled(FeaturesCard)``
const FeaturesCard4 = styled(FeaturesCard2)``
const FeaturesCard5 = styled(FeaturesCard)``
const FeaturesCard6 = styled(FeaturesCard2)``

export const Tag = styled.div`
	text-transform: uppercase;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	text-align: center;
	letter-spacing: 0.08em;
	width: 60%;
	border: 1.5px solid #000000;
	border-radius: 16px;
	padding: 0.5rem 1rem;
	@media screen and (max-width: 1024px) {
		margin: 2rem 0;
	}
`
