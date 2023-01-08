import styled from "styled-components";
import {
	HomeSection01Container,
	HomeSection01Wrapper,
	SloganSection01,
	Tag,
	HeadingSection01,
} from "./HomeSection01";

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";

import { useTranslation } from "next-i18next";
import GradientButton from "../button/GradientButton";
import Link from "next/link";

const HomeSection05 = () => {
	const { t } = useTranslation("common");
	return (
		<HomeSection05Container>
			<HomeSection05Wrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Tag style={{ width: "35%" }}>
						<span>{t("whyUs")}</span>
					</Tag>
					<SloganSection01>
						<h1>{t("section05_title")}</h1>
					</SloganSection01>
					<HeadingSection01>
						<h2>
							{t("section05_heading_pt1")}
							<b>{t("section05_bold1")}</b>
							{t("section05_heading_pt2")}
						</h2>
					</HeadingSection01>
					<HeadingSection01>
						<h2>
							{t("section05_heading_pt3")}
							<b>{t("section05_bold2")}</b>
							{t("section05_heading_pt4")}
						</h2>
					</HeadingSection01>
					<HeadingSection01>
						<Link href='/services/administrative-services'>
							<GradientButton
								gradientColor='#0657CF'
								component='button'
								width={200}>
								{t("readMore")}
							</GradientButton>
						</Link>
					</HeadingSection01>
				</motion.div>
				<CardContainer>
					<BorderedCard>
						<h3>{t("section05_card1_title")}</h3>

						<p>
							{t("section05_card1_text1")}
							<b>{t("section05_card1_text_bold1")}</b>
							{t("section05_card1_text2")}
						</p>

						<p>
							{t("section05_card1_text3")}
							<b>
								<u>{t("section05_card1_text_bold2")}</u>
							</b>
							{t("section05_card1_text4")}
							<b>{t("section05_card1_text_bold3")}</b>
							{t("section05_card1_text5")}
						</p>

						<p>
							{t("section05_card1_text6")}
							<b>{t("section05_card1_text_bold4")}</b>
							{t("section05_card1_text7")}
						</p>
					</BorderedCard>

					<BorderedCard>
						<h3>{t("section05_card2_title")}</h3>

						<p>
							{t("section05_card2_text1")}
							<b>{t("section05_card2_text_bold1")}</b>
							{t("section05_card2_text2")}
							<b>{t("section05_card2_text_bold2")}</b>
							{t("section05_card2_text3")}
						</p>

						<p>
							{t("section05_card2_text4")}
							<b>{t("section05_card2_text_bold3")}</b>
							{t("section05_card2_text5")}
						</p>
					</BorderedCard>
				</CardContainer>
			</HomeSection05Wrapper>
		</HomeSection05Container>
	);
};

export const HomeSection05Container = styled(HomeSection01Container)`
	@media screen and (max-width: 768px) {
		margin-top: 0rem;
	}

	@media screen and (min-width: 1024px) {
		margin-top: 15rem;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 25rem;
	}
`;

export const HomeSection05Wrapper = styled(HomeSection01Wrapper)`
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
		gap: 5rem;
	}
	@media screen and (min-width: 1440px) {
		font-size: 52px;
	}
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 525px);
	grid-gap: 5rem;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1200px) {
		margin-top: 3rem;
		grid-template-columns: 1fr;
	}
`;

const BorderedCard = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
	padding: 3rem;
	border: 3px solid #1b1464;
	border-radius: 51px;
	gap: 2rem;

	h3 {
		font-family: "AllRoundGothic-Demi";
		font-size: 32px;
		color: #1b1464;
	}

	p {
		color: #1b1464;
		font-size: 20px;
	}

	@media screen and (min-width: 1200px) {
		height: 800px;
	}
`;

export default HomeSection05;
