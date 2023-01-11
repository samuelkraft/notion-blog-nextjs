import styled, { keyframes } from "styled-components";
import { useTranslation } from "next-i18next";
import { AboutSection03Container } from "./AboutSection03";
import cic from "../../images/cic.png";
import businessFrance from "../../images/businessFrance.png";
import caillaut from "../../images/caillaut.png";
import chooseParis from "../../images/chooseParis.png";
import franco from "../../images/franco.png";
import frenchAmerican from "../../images/frenchAmerican.png";
import pennylane from "../../images/pennylane.png";
import memories from "../../images/memories.png";

import { HomeSection05Wrapper } from "../homepage/HomeSection05";
import Image from "next/image";
const AboutSection04 = () => {
	const { t } = useTranslation("common");
	const partners = [
		cic,
		businessFrance,
		pennylane,
		caillaut,
		memories,
		chooseParis,
		frenchAmerican,
		franco,
	];
	return (
		<AboutSection03Container>
			<HomeSection05Wrapper>
				<OurPartners>
					<h1>{t("ourPartners")}</h1>
				</OurPartners>
				<InfiniteSliderContainer>
					<InfiniteSliderWrapper>
						<BrandSlider>
							{partners.map((i) => {
								return (
									<div key={Math.random(0, 100)}>
										<Image src={i} alt={i.toString()} />
									</div>
								);
							})}
							{partners.map((i) => {
								return (
									<div key={Math.random(0, 100)}>
										<Image src={i} alt={i.toString()} />
									</div>
								);
							})}
						</BrandSlider>
					</InfiniteSliderWrapper>
				</InfiniteSliderContainer>
			</HomeSection05Wrapper>
		</AboutSection03Container>
	);
};

export default AboutSection04;

const OurPartners = styled.div`
	font-family: "AllRoundGothic-Demi";
	font-size: 36px;
	color: #1b1464;
	line-height: 1.2;
	margin: 3rem 0;
	text-align: center;
	h1 {
		@media screen and (max-width: 465px) {
			font-size: 42px;
		}

		@media screen and (min-width: 768px) {
			font-size: 48px;
		}
		@media screen and (min-width: 1024px) {
			font-size: 58px;
			margin-top: 3.5rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 72px;
		}
	}
`;

const InfiniteSliderContainer = styled.div`
	margin: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1024px) {
		margin: 2rem 0;
	}
`;

const InfiniteSliderWrapper = styled.div`
	width: 200%;
	position: relative;
	overflow: hidden;
	height: 15rem;
`;

const SlideInfinite = keyframes`
	
		0% {
			left: 0;
		}
	
		100% {
			left: -200%;
		}
	
`;

const BrandSlider = styled.div`
	width: 200%;
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
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
`;
