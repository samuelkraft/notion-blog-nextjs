import {
	createStyles,
	Header,
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	Container,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
	IconCoin,
	IconChevronDown,
	IconWorld,
	IconArticle,
	IconUsers,
	IconMathSymbols,
	IconScale,
	IconPigMoney,
	IconEye,
	IconCoinEuro,
} from "@tabler/icons";

import { useTranslation } from "next-i18next";
import Logo from "../../images/logo_Expand-CPA.svg";
import France from "../../images/flag-france.svg";
import Image from "next/image";
import styled from "styled-components";

const useStyles = createStyles((theme) => ({
	root: {
		position: "fixed",
		zIndex: 20,

		"@media screen and (max-width: 768px)": {
			padding: "0.75rem",
		},

		"@media screen and (min-width: 1024px)": {
			padding: "0rem 1%",
		},
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: "'Gilroy', sans-serif",
		padding: "0",
		"@media screen and (min-width: 768px)": {
			padding: "0.5rem",
		},
	},

	linkswrapper: {
		marginLeft: "5rem",
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		fontFamily: "'Gilroy', sans-serif",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[9],
		fontSize: theme.fontSizes.md,
		fontWeight: 600,
	},

	subLink: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		borderRadius: theme.radius.md,
		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[7]
					: theme.colors.gray[0],
		}),

		"&:active": theme.activeStyles,
	},

	subLinkText: {
		fontFamily: "'Gilroy', sans-serif",
		color: theme.colors.dark,
		fontSize: theme.fontSizes.md,
		fontWeight: 600,
	},

	dropdownFooter: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[7]
				: theme.colors.gray[0],
		margin: -theme.spacing.md,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
		paddingBottom: theme.spacing.xl,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
			}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan("lg")]: {
			display: "none",
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan("lg")]: {
			display: "none",
		},
	},
}));

export function HeaderMegaMenu() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const { classes, theme } = useStyles();
	const { t } = useTranslation("common");

	const businessServices = [
		{
			icon: IconArticle,
			title: t("administrativeServices"),
			href: "/services/administrative-services",
		},
		{
			icon: IconUsers,
			title: t("payrollServices"),
			href: "/services/payroll-services",
		},
		{
			icon: IconMathSymbols,
			title: t("accountingServices"),
			href: "/services/accounting-services",
		},
		{
			icon: IconScale,
			title: t("legalServices"),
			href: "/services/legal-services",
		},
		{
			icon: IconPigMoney,
			title: t("taxServices"),
			href: "/services/tax-services",
		},
		{
			icon: IconEye,
			title: t("auditServices"),
			href: "/services/audit-services",
		},
	];
	const privateTaxServices = [
		{
			icon: IconCoinEuro,
			title: t("frenchTax"),
			href: "/french-tax",
		},
		{
			icon: IconCoin,
			title: t("usTax"),
			href: "/usa-tax",
		},
	];

	const businessLinks = businessServices.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Anchor href={item.href} component='a' className={classes.subLinkText}>
				<Group noWrap align='center'>
					<ThemeIcon size={34} variant='default' radius='md'>
						<item.icon size={22} color={theme.fn.primaryColor()} />
					</ThemeIcon>
					<Text
						size='md'
						weight={500}
						style={{ fontFamily: "'Gilroy',sans-serif", fontWeight: 600 }}>
						{item.title}
					</Text>
				</Group>
			</Anchor>
		</UnstyledButton>
	));

	const privateTaxLinks = privateTaxServices.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Anchor href={item.href} component='a' className={classes.subLinkText}>
				<Group noWrap align='center'>
					<ThemeIcon size={34} variant='default' radius='md'>
						<item.icon size={22} color={theme.fn.primaryColor()} />
					</ThemeIcon>
					<Text
						size='md'
						weight={500}
						style={{ fontFamily: "'Gilroy',sans-serif", fontWeight: 600 }}>
						{item.title}
					</Text>
				</Group>
			</Anchor>
		</UnstyledButton>
	));

	return (
		<Box mb={160}>
			<Header height={120} className={classes.root} fixed>
				<Container className={classes.inner} fluid>
					<Group position='left' spacing={"xl"} sx={{ height: "100%" }}>
						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							className={classes.hiddenDesktop}
							size='lg'
						/>
						<Anchor href='/' component='a'>
							<Image src={Logo} width='150' height='100' />
						</Anchor>
						<Container fluid>
							<Group
								sx={{ height: "100%" }}
								spacing={10}
								className={classes.hiddenMobile}>
								<Anchor href='/about' className={classes.link}>
									{t("cabinet")}
								</Anchor>
								<HoverCard
									width={600}
									position='bottom'
									radius='md'
									shadow='md'
									withinPortal>
									<HoverCard.Target>
										<a href='/services' className={classes.link}>
											<Center inline>
												<Box component='span' mr={5}>
													{t("business")}
												</Box>
												<IconChevronDown
													size={16}
													color={theme.fn.primaryColor()}
												/>
											</Center>
										</a>
									</HoverCard.Target>

									<HoverCard.Dropdown sx={{ overflow: "hidden" }}>
										<Group position='apart' px='md'>
											<Text
												weight={500}
												style={{
													fontFamily: "'Gilroy',sans-serif",
													fontWeight: 600,
												}}>
												{t("business")}
											</Text>
											<Anchor
												href='/services'
												size='xs'
												style={{
													fontFamily: "'Gilroy',sans-serif",
												}}>
												View all
											</Anchor>
										</Group>

										<Divider
											my='sm'
											mx='-md'
											color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
										/>

										<SimpleGrid cols={2} spacing={0}>
											{businessLinks}
										</SimpleGrid>

										<div className={classes.dropdownFooter}>
											<Group position='apart'>
												<div>
													<Text
														weight={500}
														size='sm'
														style={{
															fontFamily: "'Gilroy',sans-serif",
															fontWeight: 600,
														}}>
														{t("contactUs")}
													</Text>
													<Text
														size='xs'
														color='dimmed'
														style={{
															fontFamily: "'Gilroy',sans-serif",
														}}>
														{t("contactUsText")}
													</Text>
												</div>
												<Button
													variant='default'
													style={{
														fontFamily: "'Gilroy',sans-serif",
														fontWeight: 600,
													}}>
													{t("contact")}
												</Button>
											</Group>
										</div>
									</HoverCard.Dropdown>
								</HoverCard>
								<HoverCard
									width={600}
									position='bottom'
									radius='md'
									shadow='md'
									withinPortal>
									<HoverCard.Target>
										<Anchor href='#' className={classes.link}>
											<Center inline>
												<Box component='span' mr={5}>
													{t("tax")}
												</Box>
												<IconChevronDown
													size={16}
													color={theme.fn.primaryColor()}
												/>
											</Center>
										</Anchor>
									</HoverCard.Target>

									<HoverCard.Dropdown sx={{ overflow: "hidden" }}>
										<Group position='apart' px='md'>
											<Text
												weight={500}
												style={{
													fontFamily: "'Gilroy',sans-serif",
													fontWeight: 600,
												}}>
												{t("tax")}
											</Text>
											<Anchor
												href='#'
												size='xs'
												style={{
													fontFamily: "'Gilroy',sans-serif",
												}}>
												View all
											</Anchor>
										</Group>

										<Divider
											my='sm'
											mx='-md'
											color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
										/>

										<SimpleGrid cols={2} spacing={0}>
											{privateTaxLinks}
										</SimpleGrid>

										<div className={classes.dropdownFooter}>
											<Group position='apart'>
												<div>
													<Text
														weight={500}
														size='sm'
														style={{
															fontFamily: "'Gilroy',sans-serif",
															fontWeight: 600,
														}}>
														{t("contactUs")}
													</Text>
													<Text
														size='xs'
														color='dimmed'
														style={{
															fontFamily: "'Gilroy',sans-serif",
														}}>
														{t("contactUsText")}
													</Text>
												</div>
												<Button
													variant='default'
													style={{
														fontFamily: "'Gilroy',sans-serif",
														fontWeight: 600,
													}}>
													{t("contact")}
												</Button>
											</Group>
										</div>
									</HoverCard.Dropdown>
								</HoverCard>
								<Anchor href='/blog' className={classes.link}>
									{t("blog")}
								</Anchor>
								<Anchor href='/#contact' className={classes.link}>
									{t("contact")}
								</Anchor>

								<Group className={classes.hiddenMobile}>
									<LanguageSwitcher>
										<IconWorld strokeWidth={2} color={"black"} />
										<Anchor
											href='/en'
											component='a'
											className={classes.subLinkText}>
											Français
										</Anchor>
										<Image src={France} />
									</LanguageSwitcher>
								</Group>
							</Group>
						</Container>
					</Group>
				</Container>
			</Header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size='100%'
				padding='md'
				title='Navigation'
				className={classes.hiddenDesktop}
				zIndex={1000000}>
				<ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx='-md'>
					<Divider
						my='sm'
						color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
					/>

					<Anchor href='/about' className={classes.link}>
						{t("cabinet")}
					</Anchor>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component='span' mr={5}>
								{t("business")}
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{businessLinks}</Collapse>

					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component='span' mr={5}>
								{t("tax")}
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{privateTaxLinks}</Collapse>
					<Anchor href='/blog' className={classes.link}>
						{t("blog")}
					</Anchor>
					<Anchor href='/#contact' className={classes.link}>
						{t("contact")}
					</Anchor>

					<Divider
						my='sm'
						color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
					/>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}

const LanguageSwitcher = styled.div`
	display: flex;
	font-family: "Gilroy", sans-serif;
	font-weight: 600;
	line-height: 1.5;
	color: black;
	gap: 10px;
	padding: 0.5rem 1rem;
	border-radius: 3rem;
	border: 2px solid black;
`;
