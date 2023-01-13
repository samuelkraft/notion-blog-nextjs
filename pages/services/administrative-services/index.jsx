import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { HeroContainer } from "../../../components/homepage/HeroHomePage";
import HeaderMegaMenu from "../../../components/header/HeaderMegaMenu";
import Footer from "../../../components/footer/Footer";
import Image from "next/image";
import {
	createStyles,
	SimpleGrid,
	Text,
	Button,
	ThemeIcon,
	Grid,
	Col,
} from "@mantine/core";

import {
	IconBuilding,
	IconBulb,
	IconFileDescription,
	IconBriefcase,
} from "@tabler/icons";

import styled from "styled-components";
import check from "../../../images/check.svg";
import circle_1 from "../../../images/circle_1.svg";
import circle_3 from "../../../images/circle_3.svg";
import circle_4 from "../../../images/circle_4.svg";
import circle_5 from "../../../images/circle_5.svg";
import circle_6 from "../../../images/circle_6.svg";
import circle_7 from "../../../images/circle_7.svg";
import circle_8 from "../../../images/circle_8.svg";
import Link from "next/link";
import { ImageWrapperFullWidth } from "../payroll-services";
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import { pageAnimation } from "../../../lib/animation";
import Head from 'next/head';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	title: {
		fontFamily: "AllRoundGothic-Demi",
		fontSize: "42px",
		color: "#352d61",

		"@media screen and (max-width: 465px)": {
			fontSize: "42px",
		},

		"@media screen and (min-width: 768px)": {
			fontSize: "48px",
		},
		"@media screen and (min-width: 1024px)": {
			fontSize: "50px",
		},
		"@media screen and (min-width: 1440px)": {
			fontSize: "52px",
		},

		lineHeight: 1.2,
		marginBottom: theme.spacing.md,
	},
}));

const AdministritiveServices = ({ }) => {
	const { t, i18n } = useTranslation("administrativeServices", {
		bindI18n: "languageChanged loaded",
	});

	const router = useRouter();

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["administrativeServices", "common"]);
	}, [router.locale]);

	const features = [
		{
			icon: IconBuilding,
			title: t("feature1"),
			description: t("feature1_text"),
		},
		{
			icon: IconBulb,
			title: t("feature2"),
			description: t("feature2_text"),
		},
		{
			icon: IconFileDescription,
			title: t("feature3"),
			description: t("feature3_text"),
		},
		{
			icon: IconBriefcase,
			title: t("feature4"),
			description: "",
		},
	];

	const { classes } = useStyles();

	const items = features.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon
				size={60}
				radius='md'
				variant='gradient'
				gradient={{ deg: 133, from: "#4364f7", to: "#1b1464" }}>
				<feature.icon size={33} stroke={1.5} />
			</ThemeIcon>
			<Text
				size='xl'
				mt='sm'
				color='#1b1464'
				style={{ fontFamily: "AllRoundGothic-Demi" }}>
				{feature.title}
			</Text>
			<Text color='#1b1464' size='lg'>
				{feature.description}
			</Text>
		</div>
	));

	return (
		<>
			<Head>
				<title>{router.locale === "fr" ? "Services administratifs pour une entreprise étrangère implantée en France" : "International Companies : Administrative Formalities in France" || "Services administratifs pour une entreprise étrangère implantée en France"}</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="description" content={t("persona")} />
			</Head>
			<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
				<HeaderMegaMenu />
				<HeroContainer>
					<div className={classes.wrapper}>
						<Grid gutter={80}>
							<Col span={12} md={5}>
								<Slogan className={classes.title} order={2} mb='lg'>
									{t("page_title")}
								</Slogan>
								<Text color='#1b1464' size='lg'>
									{t("persona")}
								</Text>
								<Link href='/#contact'>
									<Button
										variant='gradient'
										gradient={{ deg: 133, from: "#4364f7", to: "#1b1464" }}
										size='lg'
										radius='md'
										mt='xl'>
										{t("contactUs")}
									</Button>
								</Link>
							</Col>
							<Col span={12} md={7}>
								<SimpleGrid
									cols={2}
									spacing={30}
									breakpoints={[{ maxWidth: "md", cols: 1 }]}>
									{items}
								</SimpleGrid>
							</Col>
						</Grid>
					</div>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section1_title")}</Slogan>
								<Heading>{t("section1_text1")}</Heading>
								<Heading>
									<b>{t("section1_bold1")}</b>
								</Heading>
								<Heading>{t("section1_text2")}</Heading>
							</TextContent>
							<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'></ImageWrapperFullWidth>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section2_title")}</Slogan>
								<Heading>
									<Heading>
										<b>{t("section2_bold1")}</b>
									</Heading>
									<Heading>{t("section2_text1")}</Heading>
								</Heading>
							</TextContent>
							<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'></ImageWrapperFullWidth>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section3_title")}</Slogan>
								<Heading>
									<Heading>{t("section3_text1")}</Heading>
									<Heading>
										<b>{t("section3_bold1")}</b>
									</Heading>
									<Heading>{t("section3_text2")}</Heading>
								</Heading>
							</TextContent>
							<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1548783300-70b41bc84f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></ImageWrapperFullWidth>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section4_title")}</Slogan>
								<Heading>
									<Heading>{t("section4_text1")}</Heading>

									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet1")}
											<b>{t("section4_bold1")}</b>
											{t("section4_bullet1_2")}
										</Heading>
									</RowWrapper>
									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet2")}
											<b>{t("section4_bold2")}</b>
											{t("section4_bullet2_2")}
										</Heading>
									</RowWrapper>
									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet3")}
											<b>{t("section4_bold3")}</b>
											{t("section4_bullet3_2")}
										</Heading>
									</RowWrapper>
									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet4")}
											<b>{t("section4_bold4")}</b>
											{t("section4_bullet4_2")}
											<b>{t("section4_bold4_2")}</b>
											{t("section4_bullet4_3")}
										</Heading>
									</RowWrapper>
									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet5")}
											<b>{t("section4_bold5")}</b>
											{t("section4_bullet5_2")}
										</Heading>
									</RowWrapper>
									<RowWrapper className=''>
										<Image src={check} alt='check1' width={50} height={50} />
										<Heading>
											{t("section4_bullet6")}
											<b>{t("section4_bold6")}</b>
											{t("section4_bullet6_2")}
										</Heading>
									</RowWrapper>
								</Heading>
								<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'></ImageWrapperFullWidth>
							</TextContent>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section5_title")}</Slogan>

							<Heading>
								<b>{t("section5_bold1")}</b>
								{t("section5_text1")}
							</Heading>

							<Subtitle>{t("section6_title")}</Subtitle>

							<Heading>
								{t("section6_text1")}
								<b>{t("section6_bold1")}</b>
								{t("section6_text2")}
							</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet1")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet2")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet3")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet4")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet5")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section6_bullet6")}</Heading>
								</RowWrapper>
							</Heading>
						</TextContent>
					</LayoutColumn>
				</HeroContainer>

				<HeroContainer>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section7_title")}</Slogan>

							<Heading>
								{t("section7_text1")}
								<b>{t("section7_bold1")}</b>
								{t("section7_text2")}
							</Heading>

							<Subtitle>{t("section7_subtitle1")}</Subtitle>

							<Heading>
								<b>{t("section7_bold2")}</b>
								{t("section7_text3")}
							</Heading>
							<Heading>
								{t("section7_text4")}
								<b>{t("section7_bold3")}</b>
							</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section7_bullet1")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section7_bullet2")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section7_bullet3")}</Heading>
								</RowWrapper>
							</Heading>
						</TextContent>
					</LayoutColumn>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section8_title")}</Slogan>
								<Heading>
									<Heading>
										{t("section8_text1")}
										<b>{t("section2_bold1")}</b>
										{t("section8_text2")}
									</Heading>
									<Heading>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet1")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet2")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet3")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet4")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet5")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet6")}</Heading>
										</RowWrapper>
										<RowWrapper className=''>
											<Image src={check} alt='check1' width={50} height={50} />
											<Heading>{t("section8_bullet7")}</Heading>
										</RowWrapper>
									</Heading>
								</Heading>
							</TextContent>
							<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></ImageWrapperFullWidth>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<div className={classes.wrapper}>
						<LayoutColumn>
							<TextContent>
								<Slogan>{t("section9_title")}</Slogan>
								<Heading>
									<Heading>
										<b>{t("section9_bold1")}</b>
										{t("section9_text1")}
									</Heading>
									<Heading>
										{t("section9_text2")}
										<b>{t("section9_bold2")}</b>
									</Heading>
									<Heading>
										{t("section9_text3")}
										<b>{t("section9_bold3")}</b>
										{t("section9_text4")}
									</Heading>
								</Heading>
							</TextContent>
							<ImageWrapperFullWidth src='/team.jpg'></ImageWrapperFullWidth>
						</LayoutColumn>
					</div>
				</HeroContainer>

				<HeroContainer>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section10_title")}</Slogan>

							<Heading>{t("section10_text1")}</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={circle_1} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/services/accounting-services'>
											<b>
												<u>{t("section10_bullet1")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_5} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/services/tax-services'>
											<b>
												<u>{t("section10_bullet2")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_3} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/services/payroll-services'>
											<b>
												<u>{t("section10_bullet3")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_6} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/services/audit-services'>
											<b>
												<u>{t("section10_bullet4")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_4} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/services/legal-services'>
											<b>
												<u>{t("section10_bullet5")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_7} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/french-tax'>
											<b>
												<u>{t("section10_bullet6")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={circle_8} alt='check1' width={50} height={50} />
									<Heading>
										<Link href='/usa-tax'>
											<b>
												<u>{t("section10_bullet7")}</u>
											</b>
										</Link>
									</Heading>
								</RowWrapper>
							</Heading>
						</TextContent>
					</LayoutColumn>
				</HeroContainer>
				<Footer />
			</motion.div>
		</>
	);
};

const getStaticProps = async ({ locale }) => {

	return {
		props: {
			...(await serverSideTranslations(locale, ["administrativeServices", "common"])),
		},
		revalidate: 60,
	};
};
export { getStaticProps }


export default AdministritiveServices;





export const Layout = styled.div`
	display: flex;
	flex-flow: column;
	background: transparent;
	gap: 3rem;
	align-items: center;
	@media screen and (max-width: 465px) {
		flex-flow: column;
	}

	@media screen and (min-width: 768px) {
		font-size: 48px;
		flex-flow: column;
	}
	@media screen and (min-width: 1024px) {
		font-size: 50px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (min-width: 1440px) {
		font-size: 52px;
	}
`;

export const LayoutReversed = styled(Layout)`
	flex-flow: column-reverse;
`;

export const LayoutColumn = styled.div`
	position: relative;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

export const TextContent = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: start;
	align-content: start;
	gap: 1rem;
`;

export const Slogan = styled(motion.h1)`
	font-family: "AllRoundGothic-Demi";
	font-size: 32px;
	color: #352d61;
	line-height: 1.2;

	@media screen and (max-width: 465px) {
		font-size: 32px;
	}

	@media screen and (min-width: 768px) {
		font-size: 48px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 46px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 50px;
	}
`;

export const Subtitle = styled.h1`
	font-family: "AllRoundGothic-Demi";
	font-size: 24px;
	line-height: 1.2;
	color: #352d61;

	@media screen and (max-width: 465px) {
	}

	@media screen and (min-width: 768px) {
		br {
			display: none;
		}
	}
	@media screen and (min-width: 1024px) {
		br {
			display: block;
		}
		font-size: 32px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 36px;
	}
`;

export const Heading = styled.div`
	font-size: 18px;
	line-height: 30px;
	color: #352d61;
	margin: 1rem 0;

	@media screen and (max-width: 465px) {
	}

	@media screen and (min-width: 768px) {
		br {
			display: none;
		}
	}
	@media screen and (min-width: 1024px) {
		br {
			display: block;
		}
		font-size: 22px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 24px;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 400px;
	height: 500px;
	object-fit: cover;

	justify-self: center;

	@media screen and (max-width: 500px) {
		width: 300px;
		height: 400px;
	}
`;

export const ImageWrapperHorizontal = styled(ImageWrapper)`
	width: 500px;
	height: 400px;

	@media screen and (max-width: 500px) {
		width: 400px;
		height: 300px;
	}
`;

export const RowWrapper = styled.div`
	display: flex;
	gap: 2rem;
	line-height: 1.5;
	align-items: center;
`;
