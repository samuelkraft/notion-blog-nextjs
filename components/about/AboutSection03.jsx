import { AboutSection01Container, SloganAbout } from "./AboutSection01";
import { AboutSection02Wrapper } from "./AboutSection02";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { Carousel } from "@mantine/carousel";

const AboutSection03 = () => {
	const { t } = useTranslation("common");

	return (
		<AboutSection01Container>
			<AboutSection02Wrapper>
				<SloganAbout>{t("ourTeam")}</SloganAbout>
				<Carousel
					withIndicators
					height={700}
					slideSize='33.333333%'
					slideGap='xl'
					breakpoints={[
						{ maxWidth: "md", slideSize: "50%" },
						{ maxWidth: "sm", slideSize: "100%", slideGap: 0 },
					]}
					loop
					nextControlIcon={<IconArrowRight size={24} color='#C6D0EB' />}
					previousControlIcon={<IconArrowLeft size={24} color='#C6D0EB' />}
					align='start'
					styles={(theme) => ({
						root: {},

						control: {
							width: "3rem",
							height: "3rem",
							border: "1px solid #C6D0EB",

							"&:hover": {
								backgroundColor: "#3672F8",
							},
						},

						controls: {
							top: "none",
							bottom: "-12rem",
							justifyContent: "right",
							gap: "1rem",

							"@media screen and (max-width: 768px)": {
								bottom: "-16rem",
							},
						},

						indicator: {
							backgroundColor: "#3672F8",
						},
					})}>
					<Carousel.Slide>
						<TeamMemberCard></TeamMemberCard>
					</Carousel.Slide>
				</Carousel>
			</AboutSection02Wrapper>
		</AboutSection01Container>
	);
};

export default AboutSection03;

const TeamMemberCard = styled.div`
	width: 400px;
	border: 3px solid #1b1464;
	border-radius: 51px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	gap: 2rem;
	@media screen and (max-width: 768px) {
		width: 320px;
	}

	@media screen and (min-width: 1024px) {
		width: 380px;
	}

	@media screen and (min-width: 1440px) {
		width: 500px;
		padding: 5rem;
	}
`;
