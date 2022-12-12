import React from "react";
import { useTranslation } from "next-i18next";
import styled, { keyframes } from "styled-components";
import veepee from "../../images/veepee.png";
import varonis from "../../images/varonis.png";
import follow from "../../images/follow.png";
import kmart from "../../images/kmart.png";
import chateautec from "../../images/chateautec.png";
import complices from "../../images/complices.png";
import face2face from "../../images/face2face.png";
import planon from "../../images/planon.png";
import trucknet from "../../images/trucknet.png";

import Image from "next/image";

const InfiniteSlider = () => {
	const { t } = useTranslation("home");
	const images = [
		veepee,
		kmart,
		follow,
		chateautec,
		varonis,
		planon,
		complices,
		trucknet,
		face2face,
	];
	return (
		<div>
			<Heading>{t("trustedUs")}</Heading>
			<InfiniteSliderContainer className=''>
				<InfiniteSliderWrapper className=''>
					<BrandSlider>
						{images.map((i) => {
							return (
								<div className='' key={Math.random(0, 100)}>
									<Image src={i} alt={Math.random(0, 100)} />
								</div>
							);
						})}
						{images.map((i) => {
							return (
								<div className='' key={Math.random(0, 100)}>
									<Image src={i} alt={Math.random(0, 100)} />
								</div>
							);
						})}
					</BrandSlider>
				</InfiniteSliderWrapper>
			</InfiniteSliderContainer>
		</div>
	);
};

const Heading = styled.h3`
	font-family: "AllRoundGothic-Demi";
	text-transform: uppercase;
	font-size: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1b1464;

	@media screen and (min-width: 320px) {
		font-size: 18px;
	}
	@media screen and (min-width: 375px) {
		font-size: 24px;
	}
	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
`;

const InfiniteSliderContainer = styled.div`
	margin: 3rem 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5rem;

	@media screen and (max-width: 1024px) {
		margin: 3rem 0;
		padding: 0 2rem;
	}
`;

const InfiniteSliderWrapper = styled.div`
	width: 300%;
	position: relative;
	overflow: hidden;
	height: 5rem;
`;

const SlideInfinite = keyframes`
	
		0% {
			left: 0;
		}
	
		100% {
			left: -100%;
		}
	
`;

const BrandSlider = styled.div`
	width: 300%;
	display: flex;
	align-items: center;
	height: 5rem;
	justify-content: space-around;
	position: absolute;
	left: 0;
	gap: 2rem;
	animation-name: ${SlideInfinite};
	animation-duration: 8s;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
`;

export default InfiniteSlider;
