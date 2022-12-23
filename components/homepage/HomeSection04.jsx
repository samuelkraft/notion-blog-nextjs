import styled from "styled-components";
import {
	HomeSection01Container,
	HomeSection01Wrapper,
	SloganSection01,
	Tag,
	HeadingSection01,
} from "./HomeSection01";
import check from "../../images/check.svg";
// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import GradientButton from "../button/GradientButton";
import { HeroImageContainer } from "./HeroHomePage";
import Link from "../Link";

const HomeSection04 = () => {
	const { t } = useTranslation("home");

	return (
		<HomeSection01Container>
			<HomeSection01Wrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Tag>
						<span>{t("whyUs")}</span>
					</Tag>
					<SloganSection01>
						<h1>{t("section04_title")}</h1>
					</SloganSection01>
					<HeadingSection01>
						<h2>
							{t("section04_heading_pt1")}
							<b>
								<u> {t("section04_bold1")}</u>
							</b>
							{t("section04_heading_pt2")}
							<b>{t("section04_bold2")}</b>
							{t("section04_heading_pt3")}
							<b>{t("section04_bold3")}</b>
							{t("section04_heading_pt4")}
						</h2>
					</HeadingSection01>
					<HeadingSection01>
						<RowWrapper className=''>
							<Image src={check} alt='check1' width={50} height={50} />
							<h2>{t("section04_check1")}</h2>
						</RowWrapper>
					</HeadingSection01>
					<HeadingSection01>
						<RowWrapper className=''>
							<Image src={check} alt='check2' width={50} height={50} />
							<h2>{t("section04_check2")}</h2>
						</RowWrapper>
					</HeadingSection01>
					<HeadingSection01>
						<RowWrapper className=''>
							<Image src={check} alt='check3' width={50} height={50} />
							<h2>{t("section04_check3")}</h2>
						</RowWrapper>
					</HeadingSection01>
					<div style={{ marginTop: "2rem" }}>
						<Link href='/services/accounting-services'>
							<GradientButton
								gradientColor='#0657CF'
								component='button'
								width={200}>
								{t("readMore")}
							</GradientButton>
						</Link>
					</div>
				</motion.div>
				<HeroImageContainerSection04 variants={fade}>
					<ImageWrapper1></ImageWrapper1>
					<ImageWrapper2></ImageWrapper2>
				</HeroImageContainerSection04>
			</HomeSection01Wrapper>
		</HomeSection01Container>
	);
};

const HeroImageContainerSection04 = styled(HeroImageContainer)`
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 1024px) {
		margin-top: 20rem;
	}
`;

const RowWrapper = styled.div`
	display: flex;
	gap: 2rem;
	line-height: 1.5;
	align-items: center;
`;

const ImageWrapper1 = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
	width: 28vw;
	height: 80vh;
	border-top-right-radius: 25vw;
	border-bottom-left-radius: 25vw;
	border-bottom-right-radius: 25vw;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630fb0b4b919f6551863564a_image-why-us-01.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	grid-column-start: 2;
	grid-row-start: 1;
	grid-row-end: 5;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 40vw;
		height: 75vw;
	}
`;
const ImageWrapper2 = styled.div`
	width: 12vw;
	height: 12vw;
	border-top-left-radius: 100%;
	border-top-right-radius: 100%;
	border-bottom-left-radius: 100%;
	background-image: url("https://assets.website-files.com/62e87007d1ea4833faeaf799/630fb7c04f5bb53842dd0208_why-us-image-02.jpg");
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 4;
	grid-row-end: 4;

	@media screen and (max-width: 991px) {
		justify-self: start;
		width: 36vw;
		height: 36vw;
	}
`;

export default HomeSection04;
