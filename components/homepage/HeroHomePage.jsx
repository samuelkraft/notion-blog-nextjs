import GradientButton from "../button/GradientButton";
import styled from "styled-components";
import Link from 'next/link'

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

const Hero = () => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	return (
		<HeroContainer>
			<HeroWrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Slogan>
						<h1>{t("slogan")}</h1>
					</Slogan>
					<Heading>
						<h2>{t("sloganSubtitle")}</h2>
					</Heading>
					<RowButtonContainer>
						<Link href='/services'>
							<GradientButton
								width='200px'
								size='lg'
								gradientColor='#0657CF'
								type='button'
							>
								{t("ourServices")}
							</GradientButton>
						</Link>
						<Link href='/#contact'>
							<GradientButton
								width='200px'
								size='lg'
								type='button'
								gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
							>
								{t("contactUs")}
							</GradientButton>
						</Link>
					</RowButtonContainer>
				</motion.div>
				<BlurCircleContainer>
					<HeroImageContainer variants={fade}>
						<ImageWrapper1></ImageWrapper1>
						<ImageWrapper2></ImageWrapper2>
						<ImageWrapper3></ImageWrapper3>
						<ImageWrapper4></ImageWrapper4>
					</HeroImageContainer>
					<BlurCircleBottomLeft />
				</BlurCircleContainer>
			</HeroWrapper>
		</HeroContainer>
	);
};

export const HeroContainer = styled.div`
	padding: 2rem;
	@media screen and (min-width: 768px) {
		padding: 1rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 1rem 6%;
	}

	@media screen and (min-width: 1440px) {
		padding: 1rem 12%;
	}
	@media screen and (min-width: 1800px) {
		padding: 1rem 8%;
	}

	@media screen and (min-width: 2100px) {
		padding: 1rem 16%;
	}
	@media screen and (min-width: 2500px) {
		padding: 1rem 25%;
	}
`;

export const HeroWrapper = styled.div`
	display: flex;
	flex-flow: column;

	.text-content {
		display: flex;
		flex-flow: column;
		justify-content: center;

		@media screen and (min-width: 1024px) {
			margin-top: -10rem;
		}

		@media screen and (min-width: 1440px) {
			margin-top: -20rem;
		}
	}

	@media screen and (max-width: 465px) {
		flex-flow: column;
	}

	@media screen and (min-width: 768px) {
		font-size: 48px;
		flex-flow: column;
	}
	@media screen and (min-width: 1024px) {
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
`;

export const Slogan = styled.div`
	h1 {
		font-family: "AllRoundGothic-Demi";
		font-size: 32px;
		color: #1b1464;
		line-height: 1.2;

		@media screen and (max-width: 465px) {
			font-size: 32px;
		}

		@media screen and (min-width: 768px) {
			font-size: 48px;
			width: 40rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 48px;
			width: 35rem;
			margin-top: 3.5rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 56px;
			width: 42rem;
		}
	}
`;

export const HeadingContainer = styled(motion.div)`
	margin: 1rem 0rem 1rem 0rem;
	position: relative;
`;

export const Heading = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: start;

	h2 {
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		color: #1b1464;
	}

	@media screen and (max-width: 465px) {
		h2 {
			font-size: 22px;
		}
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: 22px;
		}
	}
	@media screen and (min-width: 1024px) {
		h2 {
			font-size: 22px;
		}
		width: 28rem;
	}
`;

const RowButtonContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 2rem;

	@media screen and (max-width: 500px) {
		flex-flow: column;
	}
`;

export const HeroImageContainer = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	grid-template-rows: auto auto auto auto auto;
	z-index: 10;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 991px) {
		margin-top: 3rem;
	}
`;

const ImageWrapper1 = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 4;
	justify-self: end;

	width: 16vw;
	height: 28vw;
	border-radius: 25vw;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630fa7b82b57093487bddec2_img-header-01.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 40vw;
		height: 75vw;
	}
`;

const ImageWrapper2 = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 3;
	justify-self: center;

	width: 16vw;
	height: 16vw;
	border-top-left-radius: 100%;
	border-bottom-left-radius: 100%;
	border-bottom-right-radius: 100%;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630fa828f520d85444c34d0a_img-header-02.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 40vw;
		height: 40vw;
	}
`;

const ImageWrapper3 = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 4;
	grid-row-end: 4;
	justify-self: end;

	width: 16vw;
	height: 16vw;
	border-top-left-radius: 100%;
	border-top-right-radius: 100%;
	border-bottom-left-radius: 100%;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630faaccf520d86023c36924_img-header-03.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 40vw;
		height: 40vw;
	}
`;
const ImageWrapper4 = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 7;
	justify-self: center;

	width: 16vw;
	height: 28vw;
	border-radius: 25vw;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630fab901bd7f91a91abac3b_img-header-04.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 40vw;
		height: 75vw;
	}
`;

const BlurCircleContainer = styled.div`
	position: relative;
`;

const BlurCircleBottomLeft = styled.div`
	width: 600px;
	height: 800px;
	position: absolute;
	top: 0;
	right: 0;
	margin-top: -2rem;
	background: rgba(118, 173, 255, 0.53);
	filter: blur(100px);
	z-index: 1;
	transform: matrix(-0.21, -0.97, 0.99, -0.17, 0, 0);

	@media screen and (min-width: 320px) {
		width: 200px;
		height: 300px;
		left: 0;
		right: none;
	}

	
	@media screen and (min-width: 765px) {
		width: 300px;
		height: 500px;
		left: 0;
		right: none;
	}

	@media screen and (min-width: 1024px) {
		width: 200px;
		height: 500px;
		left: 0;
		right: none;
		margin-left: 4rem;
	}

	@media screen and (min-width: 1440px) {
		width: 500px;
		height: 550px;
	}
`;

export default Hero;
