import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStatic";
const getStaticProps = makeStaticProps(["common", "auditServices"]);
export { getStaticPaths, getStaticProps };
import { HeroContainer } from "../../../../components/homepage/HeroHomePage";
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

import styled from "styled-components";
import check from "../../../../images/check.svg";
import circle_1 from "../../../../images/circle_1.svg";
import circle_2 from "../../../../images/circle_2.svg";
import circle_3 from "../../../../images/circle_3.svg";
import circle_4 from "../../../../images/circle_4.svg";
import circle_5 from "../../../../images/circle_5.svg";
import circle_6 from "../../../../images/circle_6.svg";
import circle_7 from "../../../../images/circle_7.svg";
import circle_8 from "../../../../images/circle_8.svg";
import LinkComponent from "../../../../components/Link";

import { ImageWrapperFullWidth } from "../payroll-services";

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

const AuditServices = ({ }) => {
	const { t } = useTranslation("auditServices");

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
							<Slogan className={classes.title} order={2} mb='lg'>
								{t("page_title")}
							</Slogan>
							<Text color='#1b1464' size='lg'>
								{t("persona")}
							</Text>

							<LinkComponent href='/#contact'>
								<Button
									variant='gradient'
									gradient={{ deg: 133, from: "#4364f7", to: "#1b1464" }}
									size='lg'
									radius='md'
									mt='xl'>
									{t("contactUs")}
								</Button>
							</LinkComponent>
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
						<ImageWrapperFullWidth src='https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
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
								{t("section2_text2")}
							</Heading>
							<Subtitle>{t("section2_subtitle1")}</Subtitle>
							<Heading>
								{t("section2_text3")}
								<b>{t("section2_bold2")}</b>
								{t("section2_text4")}
							</Heading>

							<Heading>
								{t("section2_text5")}
								<b>{t("section2_bold3")}</b>
								{t("section2_text6")}
								<b>{t("section2_bold4")}</b>
								{t("section2_text7")}
							</Heading>

							<Subtitle>{t("section2_subtitle2")}</Subtitle>

							<Heading>{t("section2_text8")}</Heading>

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
								{t("section3_text2")}
							</Heading>

							<Subtitle>{t("section3_subtitle")}</Subtitle>

							<Heading>
								{t("section3_text3")}
								<b>{t("section3_bold2")}</b>
								{t("section3_text4")}
							</Heading>

							<Heading>{t("section3_text5")}</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>
										<b>{t("section3_bullet1")}</b>
										{t("section3_bullet1_2")}
									</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>
										<b>{t("section3_bullet2")}</b>
										{t("section3_bullet2_2")}
									</Heading>
								</RowWrapper>
							</Heading>

							<Heading>
								{t("section3_text6")}
								<b>{t("section3_bold3")}</b>
								{t("section3_text7")}
							</Heading>
						</TextContent>
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
								{t("section4_text2")}
							</Heading>

							<Heading>
								{t("section4_text3")}
								<b>{t("section4_bold2")}</b>
								{t("section4_text4")}
							</Heading>

							<Heading>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet1")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet2")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet3")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet4")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet5")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet6")}</Heading>
								</RowWrapper>
								<RowWrapper className=''>
									<Image src={check} alt='check1' width={50} height={50} />
									<Heading>{t("section4_bullet7")}</Heading>
								</RowWrapper>
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
							<RowWrapper className=''>
								<Image src={check} alt='check1' width={50} height={50} />
								<Heading>
									{t("section5_bullet1")}
									<b>{t("section5_bullet1_2")}</b>
									{t("section5_bullet1_3")}
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={check} alt='check1' width={50} height={50} />
								<Heading>
									{t("section5_bullet2")}
									<b>{t("section5_bullet2_2")}</b>
									{t("section5_bullet2_3")}
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={check} alt='check1' width={50} height={50} />
								<Heading>
									{t("section5_bullet3")}
									<b>{t("section5_bullet3_2")}</b>
								</Heading>
							</RowWrapper>
						</Heading>
					</TextContent>
				</LayoutColumn>
			</HeroContainer>

			<HeroContainer>
				<LayoutColumn>
					<TextContent>
						<Slogan>{t("section6_title")}</Slogan>

						<Heading>{t("section6_text1")}</Heading>

						<Heading>
							<RowWrapper className=''>
								<Image src={circle_1} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/services/accounting-services'>
										<b>
											<u>{t("section6_bullet1")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_2} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/services/administrative-services'>
										<b>
											<u>{t("section6_bullet2")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_3} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/services/payroll-services'>
										<b>
											<u>{t("section6_bullet3")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>

							<RowWrapper className=''>
								<Image src={circle_5} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/services/tax-services'>
										<b>
											<u>{t("section6_bullet4")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_4} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/services/legal-services'>
										<b>
											<u>{t("section6_bullet5")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_7} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/french-tax'>
										<b>
											<u>{t("section6_bullet6")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
							<RowWrapper className=''>
								<Image src={circle_8} alt='check1' width={50} height={50} />
								<Heading>
									<LinkComponent href='/usa-tax'>
										<b>
											<u>{t("section6_bullet7")}</u>
										</b>
									</LinkComponent>
								</Heading>
							</RowWrapper>
						</Heading>
					</TextContent>
				</LayoutColumn>
			</HeroContainer>
		</>
	);
};

export default AuditServices;
