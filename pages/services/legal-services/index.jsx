import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { HeroContainer } from "../../../components/homepage/HeroHomePage";
import Image from "next/image";
import {
	LayoutColumn,
	Slogan,
	Subtitle,
	RowWrapper,
	Heading,
	TextContent,
} from "../administrative-services";

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

import check from "../../../images/check.svg";
import circle_1 from "../../../images/circle_1.svg";
import circle_2 from "../../../images/circle_2.svg";
import circle_3 from "../../../images/circle_3.svg";
import circle_5 from "../../../images/circle_5.svg";
import circle_6 from "../../../images/circle_6.svg";
import circle_7 from "../../../images/circle_7.svg";
import circle_8 from "../../../images/circle_8.svg";
import Link from "next/link";
import HeaderMegaMenu from "../../../components/header/HeaderMegaMenu";
import Footer from "../../../components/footer/Footer";
import { ImageWrapperFullWidth } from "../payroll-services";
import { useRouter } from "next/router";

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

const LegalServices = ({ }) => {
	const { t, i18n } = useTranslation("legalServices", {
		bindI18n: "languageChanged loaded",
	});

	const router = useRouter();

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["legalServices", "common"]);
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
							<Heading>
								{t("section1_text1")}
								<b>{t("section1_bold1")}</b>
								{t("section1_text2")}
							</Heading>
						</TextContent>
						<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
					</LayoutColumn>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section2_title")}</Slogan>
							<Heading>
								{t("section2_text1")}
								<b>{t("section2_bold1")}</b>
							</Heading>
							<Subtitle>{t("section2_subtitle1")}</Subtitle>
							<Heading>
								{t("section2_text2")}
								<b>{t("section2_bold2")}</b>
								{t("section2_text3")}
							</Heading>

							<Heading>
								{t("section2_text4")}
								<b>{t("section2_bold3")}</b>
								{t("section2_text5")}
							</Heading>

							<Subtitle>{t("section2_subtitle2")}</Subtitle>

							<Heading>
								{t("section2_text6")}
								<b>{t("section2_bold4")}</b>
								{t("section2_text7")}
							</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>
										{t("section2_bullet1")}
										<b>{t("section2_bullet1_2")}</b>
										{t("section2_bullet1_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet2")}
										<b>{t("section2_bullet2_2")}</b>
										{t("section2_bullet2_3")}
									</Heading>
								</RowWrapper>

								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet3")}
										<b>{t("section2_bullet3_2")}</b>
										{t("section2_bullet3_3")}
									</Heading>
								</RowWrapper>

								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet4")}
										<b>{t("section2_bullet4_2")}</b>
										{t("section2_bullet4_3")}
									</Heading>
								</RowWrapper>

								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet5")}
										<b>{t("section2_bullet5_2")}</b>
										{t("section2_bullet5_3")}
									</Heading>
								</RowWrapper>

								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet6")}
										<b>{t("section2_bullet6_2")}</b>
										{t("section2_bullet6_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet7")}
										<b>{t("section2_bullet7_2")}</b>
										{t("section2_bullet7_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet8")}
										<b>{t("section2_bullet8_2")}</b>
										{t("section2_bullet8_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet9")}
										<b>{t("section2_bullet9_2")}</b>
										{t("section2_bullet9_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet10")}
										<b>{t("section2_bullet10_2")}</b>
										{t("section2_bullet10_3")}
									</Heading>
								</RowWrapper>
								<RowWrapper>
									<Image src={check} alt='check1' width={50} height={50} />

									<Heading>
										{t("section2_bullet11")}
										<b>{t("section2_bullet11_2")}</b>
										{t("section2_bullet11_3")}
									</Heading>
								</RowWrapper>
							</Heading>
						</TextContent>
					</LayoutColumn>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section3_title")}</Slogan>
							<Heading>
								{t("section3_text1")}
								<b>{t("section3_bold1")}</b>
							</Heading>

							<Subtitle>{t("section3_subtitle")}</Subtitle>

							<Heading>
								<b>{t("section3_bold2")}</b>
							</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet1")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet2")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet3")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet4")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet5")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet6")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet7")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet8")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section3_bullet9")}</Heading>
								</RowWrapper>
							</Heading>

							<Subtitle>{t("section3_subtitle2")}</Subtitle>

							<Heading>
								<b>{t("section3_bold4")}</b>
								{t("section3_text8")}
							</Heading>
						</TextContent>

						<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80' />
					</LayoutColumn>
				</div>
			</HeroContainer>

			<HeroContainer>
				<div className={classes.wrapper}>
					<LayoutColumn>
						<TextContent>
							<Slogan>{t("section4_title")}</Slogan>
							<Heading>
								{t("section4_text1")}
								<b>{t("section4_bold1")}</b>
							</Heading>

							<Subtitle>{t("section4_subtitle1")}</Subtitle>

							<Heading>
								{t("section4_text2")}
								<b>{t("section4_bold2")}</b>
								{t("section4_text3")}
							</Heading>

							<Subtitle>{t("section4_subtitle2")}</Subtitle>

							<Heading>
								{t("section4_text4")}
								<b>{t("section4_bold3")}</b>
								{t("section4_text5")}
								<b>{t("section4_bold4")}</b>
								{t("section4_text6")}
							</Heading>

							<Subtitle>{t("section4_subtitle3")}</Subtitle>

							<Heading>
								{t("section4_text7")}
								<b>{t("section4_bold5")}</b>
								{t("section4_text8")}
							</Heading>
						</TextContent>
					</LayoutColumn>
				</div>
			</HeroContainer>

			<HeroContainer>
				<LayoutColumn>
					<TextContent>
						<Slogan>{t("section5_title")}</Slogan>

						<Heading>
							{t("section5_text1")}
							<b>{t("section5_bold1")}</b>
							{t("section5_text2")}
						</Heading>

						<Heading>
							<b>{t("section5_bold2")}</b>
							{t("section5_text3")}
						</Heading>

						<Heading>
							<b>{t("section5_bold3")}</b>
							{t("section5_text4")}
						</Heading>

						<Heading>
							{t("section5_text5")}
							<b>{t("section5_bold4")}</b>
							{t("section5_text6")}
						</Heading>
					</TextContent>
				</LayoutColumn>
			</HeroContainer>

			<HeroContainer>
				<LayoutColumn>
					<TextContent>
						<Slogan>{t("section6_title")}</Slogan>

						<Heading>
							{t("section6_text1")}
							<b>{t("section6_bold1")}</b>
							{t("section6_text2")}
						</Heading>

						<Heading>
							<RowWrapper className=''>
								<Image src={circle_1} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/services/accounting-services'>
										<b>
											<u>{t("section6_bullet1")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_2} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/services/administrative-services'>
										<b>
											<u>{t("section6_bullet2")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_3} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/services/payroll-services'>
										<b>
											<u>{t("section6_bullet3")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>

							<RowWrapper className=''>
								<Image src={circle_5} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/services/tax-services'>
										<b>
											<u>{t("section6_bullet4")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_7} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/french-tax'>
										<b>
											<u>{t("section6_bullet5")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_8} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/usa-tax'>
										<b>
											<u>{t("section6_bullet6")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_6} alt='check1' width={50} height={50} />
								<Heading>
									<Link href='/services/audit-services'>
										<b>
											<u>{t("section6_bullet7")}</u>
										</b>
									</Link>
								</Heading>
							</RowWrapper>
						</Heading>
					</TextContent>
				</LayoutColumn>
			</HeroContainer>
			<Footer />
		</>
	);
};


const getStaticProps = async ({ locale }) => {

	return {
		props: {
			...(await serverSideTranslations(locale, ["legalServices", "common"])),
		},
		revalidate: 60,
	};
};
export { getStaticProps }


export default LegalServices;
