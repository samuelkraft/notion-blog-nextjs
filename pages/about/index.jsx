import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import AboutSection01 from "../../components/about/AboutSection01";
import AboutSection02 from "../../components/about/AboutSection02";
import AboutSection03 from "../../components/about/AboutSection03";
import AboutSection04 from "../../components/about/AboutSection04";
import AboutSection05 from "../../components/about/AboutSection05";
import HeroAboutPage from "../../components/about/HeroAboutPage";
import HiringForm from "../../components/about/HiringForm";
import HeaderMegaMenu from "../../components/header/HeaderMegaMenu";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import {
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	slider,
	sliderContainer,
} from "../../lib/animation";
import styled from "styled-components";

const AboutPage = ({}) => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	return (
		<motion.div variants={sliderContainer} initial='hidden' animate='show'>
			<Frame1 variants={slider}></Frame1>
			<Frame2 variants={slider}></Frame2>
			<Frame3 variants={slider}></Frame3>
			<Frame4 variants={slider}></Frame4>
			<motion.div variants={pageAnimation}>
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
	);
};

const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
		revalidate: 60,
	};
};

export { getStaticProps };

// Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #1b1464;
	z-index: 2;
`;
const Frame2 = styled(Frame1)`
	background: #3d33a8;
`;
const Frame3 = styled(Frame1)`
	background: #0657cf;
`;
const Frame4 = styled(Frame1)`
	background: #4364f7;
`;

export default AboutPage;
