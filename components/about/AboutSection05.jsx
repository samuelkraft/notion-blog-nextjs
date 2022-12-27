import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { AboutSection01Container } from "./AboutSection01";
import { AboutSection02Wrapper } from "./AboutSection02";
import { IconArrowRight } from "@tabler/icons";
import BorderedButton from "../button/BorderedButton";

const AboutSection05 = () => {
	const { t } = useTranslation("common");
	return (
		<AboutSection05Container>
			<AboutSection02Wrapper>
				<AboutSection05Wrapper>
					<JoinOurTeamContainer>
						<h1>{t("joinOurTeam")}</h1>
						<h3>{t("joinOurTeamText")}</h3>
						<a href='' passHref>
							<BorderedButton
								borderColor='white'
								textColor='white'
								hoverable={false}
								externalUrl={false}
								rightIcon={<IconArrowRight size={16} />}
								fontSize={16}>
								En savoir plus
							</BorderedButton>
						</a>
					</JoinOurTeamContainer>
					<ImageWrapper />
				</AboutSection05Wrapper>
			</AboutSection02Wrapper>
		</AboutSection05Container>
	);
};

const AboutSection05Container = styled(AboutSection01Container)`
	margin-top: 0rem;
`;

const JoinOurTeamContainer = styled.div`
	background: linear-gradient(109.75deg, #4364f7 0.82%, #1b1464 100%);
	border-radius: 51px;
	color: white;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	align-items: flex-start;
	justify-content: center;

	h1 {
		font-family: "AllRoundGothic-Demi";
		font-size: 48px;
		letter-spacing: 0.327px;
		text-align: left;
		@media screen and (max-width: 768px) {
			font-size: 36px;
		}
	}

	h3 {
		font-size: 22px;
		letter-spacing: 0.327px;
		text-align: left;

		@media screen and (max-width: 768px) {
			font-size: 18px;
		}
		@media screen and (max-width: 425px) {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 768px) {
		padding: 3rem;
	}

	@media screen and (max-width: 425px) {
		padding: 2rem;
	}
`;

const AboutSection05Wrapper = styled.div`
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	@media screen and (min-width: 1440px) {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: 35% 65%;
	}
`;

const ImageWrapper = styled.div`
	background: url("/team.jpg");
	border-radius: 51px;
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	height: 80vh;
	width: 100%;

	@media screen and (max-width: 425px) {
		height: 30vh;
	}
`;

export default AboutSection05;
