import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStatic";
const getStaticProps = makeStaticProps(["administrativeServices", "common"]);
import { HeroContainer } from "../../../../components/homepage/HeroHomePage";

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
} from "@mantine/core";
import {
	IconReceiptOff,
	IconFlame,
	IconCircleDotted,
	IconFileCode,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	title: {
		fontFamily: "AllRoundGothic-Demi",
		color: "#1b1464",
		fontSize: 36,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
	},
}));

const AdministritiveServices = ({}) => {
	const { t } = useTranslation("administrativeServices");

	const features = [
		{
			icon: IconReceiptOff,
			title: t("feature1"),
			description: t("feature1_text"),
		},
		{
			icon: IconFileCode,
			title: t("feature2"),
			description: t("feature2_text"),
		},
		{
			icon: IconCircleDotted,
			title: t("feature3"),
			description: t("feature3_text"),
		},
		{
			icon: IconFlame,
			title: t("feature4"),
			description: "",
		},
	];

	const { classes } = useStyles();

	const items = features.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon
				size={44}
				radius='md'
				variant='gradient'
				gradient={{ deg: 133, from: "#4364f7", to: "#1b1464" }}>
				<feature.icon size={26} stroke={1.5} />
			</ThemeIcon>
			<Text size='lg' mt='sm' color='#1b1464' weight={500}>
				{feature.title}
			</Text>
			<Text color='#1b1464' size='sm'>
				{feature.description}
			</Text>
		</div>
	));

	return (
		<HeroContainer>
			<div className={classes.wrapper}>
				<Grid gutter={80}>
					<Col span={12} md={5}>
						<Title className={classes.title} order={2}>
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
	);
};

export default AdministritiveServices;
