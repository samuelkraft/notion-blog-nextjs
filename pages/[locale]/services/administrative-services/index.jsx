import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStatic";
const getStaticProps = makeStaticProps(["administrativeServices", "common"]);
import { HeroContainer } from "../../../../components/homepage/HeroHomePage";
import Image from "next/image";
import experts from "../../../../images/home-experts.png";
export { getStaticPaths, getStaticProps };
import {
	createStyles,
	Title,
	SimpleGrid,
	Text,
	Button,
	ThemeIcon,
	Grid,
	Col,
	List,
} from "@mantine/core";

import {
	IconBuilding,
	IconBulb,
	IconFileDescription,
	IconBriefcase,
	IconCircleCheck,
	IconCircleDashed,
} from "@tabler/icons";

import styled from "styled-components";

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	title: {
		fontFamily: "AllRoundGothic-Demi",
		fontSize: "32px",
		color: "#352d61",

		"@media screen and (max-width: 465px)": {
			fontSize: "32px",
		},

		"@media screen and (min-width: 768px)": {
			fontSize: "36px",
		},
		"@media screen and (min-width: 1024px)": {
			fontSize: "38px",
		},
		"@media screen and (min-width: 1440px)": {
			fontSize: "42px",
		},

		lineHeight: 1.2,
		marginBottom: theme.spacing.md,
	},
}));

const AdministritiveServices = ({}) => {
	const { t } = useTranslation("administrativeServices");

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
			<HeroContainer>
				<div className={classes.wrapper}>
					<Grid gutter={80}>
						<Col span={12} md={5}>
							<Title className={classes.title} order={2} mb='lg'>
								{t("page_title")}
							</Title>
							<Text color='#1b1464' size='lg'>
								{t("persona")}
							</Text>

							<Button
								variant='gradient'
								gradient={{ deg: 133, from: "#4364f7", to: "#1b1464" }}
								size='lg'
								radius='md'
								mt='xl'>
								{t("contactUs")}
							</Button>
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
					<Layout>
						<TextContent>
							<Slogan>
								<h1>{t("section1_title")}</h1>
							</Slogan>
							<Heading>
								<h2>{t("section1_text1")}</h2>
								<h2>
									<b>{t("section1_bold1")}</b>
								</h2>
								<h2>{t("section1_text2")}</h2>
							</Heading>
						</TextContent>
						<ImageWrapper>
							<Image
								src='https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80'
								fill
							/>
						</ImageWrapper>
					</Layout>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<LayoutReversed>
						<ImageWrapper>
							<Image
								src='https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
								fill
							/>
						</ImageWrapper>

						<TextContent>
							<Slogan>
								<h1>{t("section2_title")}</h1>
							</Slogan>
							<Heading>
								<h2>
									<b>{t("section2_bold1")}</b>
								</h2>
								<h2>{t("section2_text1")}</h2>
							</Heading>
						</TextContent>
					</LayoutReversed>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<Layout>
						<TextContent>
							<Slogan>
								<h1>{t("section3_title")}</h1>
							</Slogan>
							<Heading>
								<h2>{t("section3_text1")}</h2>
								<h2>
									<b>{t("section3_bold1")}</b>
								</h2>
								<h2>{t("section3_text2")}</h2>
							</Heading>
						</TextContent>
						<ImageWrapper>
							<Image
								src='https://images.unsplash.com/photo-1548783300-70b41bc84f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
								fill
							/>
						</ImageWrapper>
					</Layout>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<LayoutReversed>
						<ImageWrapper>
							<Image
								src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGN1c3RvbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								fill
							/>
						</ImageWrapper>
						<TextContent>
							<Slogan>
								<h1>{t("section4_title")}</h1>
							</Slogan>
							<Heading>
								<h2>{t("section4_text1")}</h2>
								<List
									spacing='xs'
									size='lg'
									center
									color="color='#1b1464'"
									icon={
										<ThemeIcon color='blue' size={48} radius='xl'>
											<IconCircleCheck size={33} />
										</ThemeIcon>
									}
									style={{
										color: "#1b1464",
										fontWeight: 400,
									}}>
									<List.Item>
										{t("section4_bullet1")}
										<b>{t("section4_bold1")}</b>
										{t("section4_bullet1_2")}
									</List.Item>
									<List.Item>
										{t("section4_bullet2")}
										<b>{t("section4_bold2")}</b>
										{t("section4_bullet2_2")}
									</List.Item>
									<List.Item>
										{t("section4_bullet3")}
										<b>{t("section4_bold3")}</b>
										{t("section4_bullet3_2")}
									</List.Item>
									<List.Item>
										{t("section4_bullet4")}
										<b>{t("section4_bold4")}</b>
										{t("section4_bullet4_2")}
										<b>{t("section4_bold4_2")}</b>
										{t("section4_bullet4_3")}
									</List.Item>
									<List.Item>
										{t("section4_bullet5")}
										<b>{t("section4_bold5")}</b>
										{t("section4_bullet5_2")}
									</List.Item>
									<List.Item>
										{t("section4_bullet6")}
										<b>{t("section4_bold6")}</b>
										{t("section4_bullet6_2")}
									</List.Item>
								</List>
							</Heading>
						</TextContent>
					</LayoutReversed>
				</div>
			</HeroContainer>
		</>
	);
};

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

export const TextContent = styled.div``;

export const Slogan = styled.div`
	h1 {
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
	}
`;

export const Heading = styled.div`
	h2 {
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
		}
		@media screen and (min-width: 1440px) {
		}
	}
`;

const ImageWrapper = styled.div`
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

const ImageWrapperHorizontal = styled(ImageWrapper)`
	width: 500px;
	height: 400px;

	@media screen and (max-width: 500px) {
		width: 400px;
		height: 300px;
	}
`;
