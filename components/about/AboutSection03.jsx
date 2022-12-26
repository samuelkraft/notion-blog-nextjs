import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import Image from "next/image";
import lea from "../../images/lea.png";
import david from "../../images/david.png";
import eva from "../../images/eva.png";
import joelle from "../../images/joelle.png";
import sabrina from "../../images/sabrina.png";
import deborah from "../../images/deborah.png";
import elsa from "../../images/elsa.png";
import elie from "../../images/elie.png";
import edwidge from "../../images/edwidge.png";
import sarah from "../../images/sarah.png";
import benjamin from "../../images/benjamin.png";
import shana from "../../images/shana.png";
import rachel from "../../images/rachel.png";
import hodaya from "../../images/hodaya.png";
import hana from "../../images/hana.png";
import sarfati from "../../images/sarfati.png";
import attali from "../../images/attali.png";

import {
	HomeSection05Container,
	HomeSection05Wrapper,
} from "../homepage/HomeSection05";

const AboutSection03 = () => {
	const { t } = useTranslation("common");
	const teamMembers = [
		{
			name: "Léa",
			role: t("headOfHR"),
			photo: lea,
		},
		{
			name: "David",
			role: t("seniorAccountant"),
			photo: david,
		},
		{
			name: "Eva",
			role: t("juniorAccountant"),
			photo: eva,
		},
		{
			name: "Joëlle",
			role: t("officeManager"),
			photo: joelle,
		},
		{
			name: "Sabrina",
			role: t("payrollSpecialist"),
			photo: sabrina,
		},
		{
			name: "Déborah",
			role: t("e-commerce"),
			photo: deborah,
		},
		{
			name: "Elsa",
			role: t("payrollSpecialist2"),
			photo: elsa,
		},
		{
			name: "Elie",
			role: t("payrollSpecialist3"),
			photo: elie,
		},
		{
			name: "Edwidge",
			role: t("hrSupport"),
			photo: edwidge,
		},
		{
			name: "Sarah",
			role: t("payrollSpecialist4"),
			photo: sarah,
		},
		{
			name: "Benjamin PIK",
			role: t("certifiedPublicAccountant"),
			photo: benjamin,
		},
		{
			name: "Shana",
			role: t("juniorAccountant"),
			photo: shana,
		},
		{
			name: "Rachel",
			role: t("seniorAccountant"),
			photo: rachel,
		},
		{
			name: "Hodaya",
			role: t("outsourcedHR"),
			photo: hodaya,
		},
		{
			name: "Hana",
			role: t("juniorAccountant"),
			photo: hana,
		},
		{
			name: "Samuel SARFATI",
			role: t("certifiedPublicAccountantLegal"),
			photo: sarfati,
		},
		{
			name: "Samuel ATTALI",
			role: t("certifiedPublicAccountant"),
			photo: attali,
		},
	];
	return (
		<AboutSection03Container>
			<HomeSection05Wrapper>
				<OurTeam>
					<h1>{t("ourTeam")}</h1>
				</OurTeam>
				<Carousel
					withIndicators
					height={900}
					loop
					slideSize='33,33%'
					slideGap='xl'
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
					{teamMembers.map((member) => (
						<Carousel.Slide key={member.name}>
							<TeamMemberCard>
								<Image src={member.photo} alt={member.name} />
								<h3>{member.name}</h3>
								<p>{member.role}</p>
							</TeamMemberCard>
						</Carousel.Slide>
					))}
				</Carousel>
			</HomeSection05Wrapper>
		</AboutSection03Container>
	);
};

export default AboutSection03;

export const AboutSection03Container = styled(HomeSection05Container)`
	@media screen and (max-width: 768px) {
		margin-top: 0rem;
	}

	@media screen and (min-width: 1024px) {
		margin-top: 0rem;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 0rem;
	}
`;

const OurTeam = styled.div`
	font-family: "AllRoundGothic-Demi";
	font-size: 42px;
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

const TeamMemberCard = styled.div`
	border: 3px solid #1b1464;
	border-radius: 51px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	gap: 2rem;
	text-align: center;
	color: #1b1464;
	box-shadow: rgba(56, 83, 236, 0.4) 5px 5px, rgba(88, 46, 240, 0.3) 10px 10px,
		rgba(46, 114, 240, 0.2) 15px 15px, rgba(46, 56, 240, 0.1) 20px 20px,
		rgba(46, 149, 240, 0.05) 25px 25px;
	height: 700px;

	h3 {
		font-size: 28px;
		font-family: "AllRoundGothic-Demi";
	}

	p {
		font-size: 1.2rem;
		font-weight: 500;
	}
`;
