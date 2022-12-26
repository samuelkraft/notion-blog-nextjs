import Image from "next/image";
import styled from "styled-components";

import { HeroContainer } from "../homepage/HeroHomePage";

const HeroAboutPage = () => {
	return (
		<HeroContainer>
			<GridContainer>
				<ImageWrapper1 />
				<ImageWrapper2 />
				<ImageWrapper3 />
			</GridContainer>
		</HeroContainer>
	);
};

export default HeroAboutPage;

const GridContainer = styled.div`
	margin-top: 4rem;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	display: grid;

	@media screen and (max-width: 767px) {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
`;

const ImageWrapper1 = styled.div`
	position: relative;
	width: 20vw;
	height: 75vh;
	border-radius: 25vw 0px 25vw 25vw;
	background-image: url("/boss1.png");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	justify-self: end;

	@media screen and (max-width: 991px) {
		width: 26vw;
		height: 60vh;
	}

	@media screen and (max-width: 767px) {
		height: 45vh;
	}
	@media screen and (max-width: 479px) {
		height: 30vh;
	}
	@media screen and (min-width: 1920px) {
		width: 16vw;
		height: 60vh;
	}
`;

const ImageWrapper2 = styled.div`
	width: 20vw;
	height: 75vh;
	margin-top: -5vw;
	border-radius: 25vw;
	background-image: url("/boss2.png");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 1;
	grid-row-end: span 1;
	justify-self: center;

	@media screen and (max-width: 991px) {
		width: 26vw;
		height: 60vh;
	}

	@media screen and (max-width: 767px) {
		height: 45vh;
	}

	@media screen and (max-width: 479px) {
		height: 30vh;
	}

	@media screen and (min-width: 1920px) {
		width: 16vw;
		height: 60vh;
		margin-top: -3vw;
	}
`;

const ImageWrapper3 = styled.div`
	width: 20vw;
	height: 75vh;
	border-radius: 25vw 25vw 25vw 0px;
	background-image: url("/boss3.png");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 1;
	grid-row-end: span 1;

	@media screen and (max-width: 991px) {
		width: 26vw;
		height: 60vh;
	}

	@media screen and (max-width: 767px) {
		height: 45vh;
	}
	@media screen and (max-width: 479px) {
		height: 30vh;
	}

	@media screen and (min-width: 1920px) {
		width: 15vw;
		height: 60vh;
	}
`;
