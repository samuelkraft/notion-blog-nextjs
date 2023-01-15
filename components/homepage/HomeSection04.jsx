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
import { motion, useInView } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import GradientButton from "../button/GradientButton";
import { HeroImageContainer } from "./HeroHomePage";
import { useEffect, useRef } from "react";
import Link from "next/link";

const HomeSection04 = () => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<HomeSection01Container
			initial={{ opacity: 0 }}
			animate={{
				opacity: isInView ? 1 : 0,
			}}
			transition={{
				duration: 1,
				delay: 0.5,
				ease: 'easeInOut',
				when: 'afterChildren',
			}}
			ref={ref}
		>
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
								type='button'
								width={200}>
								{t("readMore")}
							</GradientButton>
						</Link>
					</div>
				</motion.div>
				<HeroImageContainerSection04>
					<ImageWrapper1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 5,
							default: {
								duration: 1,
								ease: [0, 0.71, 0.2, 1.01],
							},
							scale: {
								type: "spring",
								damping: 10,
								stiffness: 100,
								restDelta: 0.001,
							},
						}} />
					<ImageWrapper2
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 5,
							default: {
								duration: 1,
								ease: [0, 0.71, 0.2, 1.01],
							},
							scale: {
								type: "spring",
								damping: 10,
								stiffness: 100,
								restDelta: 0.001,
							},
						}} />
				</HeroImageContainerSection04>
			</HomeSection01Wrapper>
		</HomeSection01Container>
	);
};

const HeroImageContainerSection04 = styled(HeroImageContainer)`
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 1200px) {
		margin-top: 15rem;
	}
`;

const RowWrapper = styled.div`
	display: flex;
	gap: 2rem;
	line-height: 1.5;
	align-items: center;
`;

const ImageWrapper1 = styled(motion.div)`
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

	@media screen and (max-width: 767px) {
		height: 70vh;
	}

	@media screen and (max-width: 479px) {
		height: 50vh;
	}

`;
const ImageWrapper2 = styled(motion.div)`
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

	@media screen and (max-width: 1200px) {
		justify-self: start;
		width: 36vw;
		height: 36vw;
	}

	@media screen and (max-width: 767px) {
		justify-self: center;
	}

	@media screen and (max-width: 479px) {
		justify-self: start;
	}
`;

export default HomeSection04;
