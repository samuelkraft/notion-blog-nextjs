import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import AboutSection01 from '../../components/about/AboutSection01'
import AboutSection02 from '../../components/about/AboutSection02'
import AboutSection03 from '../../components/about/AboutSection03'
import AboutSection04 from '../../components/about/AboutSection04'
import AboutSection05 from '../../components/about/AboutSection05'
import HeroAboutPage from '../../components/about/HeroAboutPage'
import HiringForm from '../../components/about/HiringForm'
import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
	aboutPageAnimation,
	slider,
	sliderContainer,
} from '../../lib/animation'
import styled from 'styled-components'

const AboutPage = ({ }) => {
	const { t, i18n } = useTranslation('common', {
		bindI18n: 'languageChanged loaded',
	})

	const router = useRouter()

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ['common'])
	}, [router.locale])

	return (
		<>
			<Head>
				<title>{t('about_meta_title')}</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/site.webmanifest'
				/>
				<link
					rel='mask-icon'
					href='/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta
					name='msapplication-TileColor'
					content='#da532c'
				/>
				<meta
					name='theme-color'
					content='#ffffff'
				/>
				<meta
					name='description'
					content={t('home_meta_description')}
				/>
			</Head>
			<motion.div
				variants={sliderContainer}
				initial='hidden'
				animate='show'
			>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
				<motion.div variants={aboutPageAnimation}>
					<HeaderMegaMenu />
					<HeroAboutPage />
					<AboutSection01 />
					<AboutSection02 />
					<AboutSection03 />
					<AboutSection04 />
					<AboutSection05 />
					<HiringForm />
					<Footer />
				</motion.div>
			</motion.div>
		</>
	)
}

const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
		revalidate: 60,
	}
}

export { getStaticProps }

// Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #1b1464;
	z-index: 2;
`
const Frame2 = styled(Frame1)`
	background: #3d33a8;
`
const Frame3 = styled(Frame1)`
	background: #0657cf;
`
const Frame4 = styled(Frame1)`
	background: #4364f7;
`

export default AboutPage
