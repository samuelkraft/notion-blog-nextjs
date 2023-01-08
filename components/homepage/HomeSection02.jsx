import {
	HomeSection01Container,
	HomeSection01Wrapper,
	HeadingSection01,
	SloganSection01,
	Tag,
} from "./HomeSection01";
import GradientButton from "../button/GradientButton";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";

import Link from "next/link"

const HomeSection02 = () => {
	const { t } = useTranslation("common");

	return (
		<HomeSection01Container>
			<HomeSection02Wrapper>
				<ImageWrapper></ImageWrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Tag>
						<span>{t("whyUs")}</span>
					</Tag>
					<SloganSection01>
						<h1>{t("section02_title")}</h1>
					</SloganSection01>
					<HeadingSection01>
						<h2>
							{t("section02_heading_pt1")}
							<b>
								<u> {t("section02_bold1")}</u>
							</b>
							<b>{t("section02_bold2")}</b>
							{t("section02_heading_pt2")}
						</h2>
					</HeadingSection01>
					<HeadingSection01>
						<h2>
							{t("section02_heading_pt3")}
							<b>{t("section02_bold3")}</b>
							{t("section02_heading_pt4")}
						</h2>
					</HeadingSection01>

					<HeadingSection01>
						<Link href='/services/accounting-services'>
							<GradientButton
								gradientColor='#0657CF'
								component='button'
								width={200}>
								{t("readMore")}
							</GradientButton>
						</Link>
					</HeadingSection01>
				</motion.div>
			</HomeSection02Wrapper>
		</HomeSection01Container>
	);
};

export default HomeSection02;

const HomeSection02Wrapper = styled(HomeSection01Wrapper)`
	@media screen and (max-width: 1023px) {
		flex-direction: column-reverse;
	}

	@media screen and (min-width: 1024px) {
		align-items: center;
		.text-content {
			width: 50%;
		}
	}
`;

const ImageWrapper = styled.div`
	border-top-left-radius: 25vw;
	border-bottom-left-radius: 25vw;
	border-bottom-right-radius: 25vw;
	background-image: url("https://images.unsplash.com/photo-1624797432677-6f803a98acb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80");
	background-position: 50% 0%;
	background-size: cover;
	background-repeat: no-repeat;
	margin-top: 3rem;
	width: 100%;
	height: 80vh;

	@media screen and (max-width: 479px) {
		margin-top: 3rem;
		width: 100%;
		height: 50vh;
	}

	@media screen and (min-width: 767px) {
		margin-top: 3rem;
		height: 80vh;
		width: 100%;
	}

	@media screen and (min-width: 991px) {
		height: 90vh;
		width: 40vw;
		background-position: 50% 0%;
	}

	@media screen and (min-width: 1024px) {
		height: 140vh;
	}

	@media screen and (min-width: 1440px) {
	}
`;
