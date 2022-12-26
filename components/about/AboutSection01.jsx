import styled from "styled-components";
import Image from "next/image";
import { HeroContainer } from "../homepage/HeroHomePage";
import { Tag } from "../homepage/HomeSection01";
import { useTranslation } from "next-i18next";

import logoArrow from "../../images/logo_arrow.png";

const AboutSection01 = () => {
	const { t } = useTranslation("common");
	return (
		<AboutSection01Container>
			<AboutSection01Wrapper>
				<Tag style={{ width: "30%" }}>
					<span>{t("about")}</span>
				</Tag>

				<SloganAbout>{t("slogan")}</SloganAbout>

				<OurStoryContainer>
					<StoryContainer>
						<Tag>
							<span>{t("ourStory")}</span>
						</Tag>

						<h1>{t("whoAreWe")}</h1>
						<Story>
							<Image src={logoArrow} alt='logo arrow' />
							<h3>{t("story1")}</h3>
						</Story>
						<Story>
							<Image src={logoArrow} alt='logo arrow' />
							<h3>{t("story2")}</h3>
						</Story>
					</StoryContainer>

					<StoryImageWrapper />
				</OurStoryContainer>

				<OurStoryContainer2>
					<StoryImageWrapper2 />

					<StoryContainer>
						<Story>
							<Image src={logoArrow} alt='logo arrow' />
							<h3>{t("story3")}</h3>
						</Story>
						<Story>
							<Image src={logoArrow} alt='logo arrow' />
							<h3>{t("story4")}</h3>
						</Story>
					</StoryContainer>
				</OurStoryContainer2>
			</AboutSection01Wrapper>
		</AboutSection01Container>
	);
};

export default AboutSection01;

export const AboutSection01Container = styled.div`
	margin-top: 4rem;

	padding: 2rem;
	@media screen and (min-width: 768px) {
		padding: 1rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 1rem 6%;
	}

	@media screen and (min-width: 1440px) {
		padding: 1rem 8%;
	}
	@media screen and (min-width: 1800px) {
		padding: 1rem 10%;
	}

	@media screen and (min-width: 2100px) {
		padding: 1rem 16%;
	}
	@media screen and (min-width: 2500px) {
		padding: 1rem 25%;
	}
`;

const AboutSection01Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	text-align: center;
`;

export const SloganAbout = styled.h1`
	font-family: "AllRoundGothic-Demi";
	font-size: 42px;
	color: #1b1464;
	line-height: 1.2;
	@media screen and (max-width: 465px) {
		font-size: 42px;
	}

	@media screen and (min-width: 768px) {
		font-size: 48px;
		width: 40rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 58px;
		width: 70%;
		margin-top: 3.5rem;
	}
	@media screen and (min-width: 1440px) {
		font-size: 72px;
		width: 70%;
	}
`;

const OurStoryContainer = styled.div`
	margin-top: 4rem;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	align-items: center;

	@media screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column-reverse;
		grid-column-gap: 4rem;
		grid-row-gap: 4rem;
		grid-template-columns: 1fr;
	}
`;

const StoryContainer = styled.div`
	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 1;
	grid-row-end: span 1;
	align-self: center;

	h1 {
		font-size: 52px;
		font-family: "AllRoundGothic-Demi";
		color: #1b1464;
		text-align: left;
		margin: 3rem 0;
	}
`;

const Story = styled.div`
	display: flex;
	gap: 3rem;
	margin: 3rem 0;
	align-items: center;
	h3 {
		font-size: 20px;
		color: #1b1464;
		text-align: left;

		@media screen and (max-width: 500px) {
			font-size: 18px;
		}
	}
`;

const StoryImageWrapper = styled.div`
	width: 100%;
	height: 30vh;
	border-top-right-radius: 12vw;
	border-bottom-left-radius: 12vw;
	background-image: url("/big3.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	justify-self: end;

	@media screen and (max-width: 550px) {
		width: 100%;
		height: 30vh;
	}

	@media screen and (min-width: 551px) {
		width: 100%;
		height: 60vh;
		border-top-right-radius: 25vw;
		border-bottom-left-radius: 25vw;
	}
	@media screen and (min-width: 1200px) {
		width: 100%;
		height: 50vh;
		border-top-right-radius: 12vw;
		border-bottom-left-radius: 12vw;
	}
	@media screen and (min-width: 1440px) {
		width: 95%;
		height: 50vh;
		border-top-right-radius: 12vw;
		border-bottom-left-radius: 12vw;
	}

	@media screen and (min-width: 2560px) {
		width: 30vw;
		height: 50vh;
		border-top-right-radius: 12vw;
		border-bottom-left-radius: 12vw;
	}
`;

const StoryImageWrapper2 = styled(StoryImageWrapper)`
	background-image: url("/team.jpg");
`;

const OurStoryContainer2 = styled(OurStoryContainer)`
	@media screen and (max-width: 1200px) {
		flex-direction: column;
	}
`;
