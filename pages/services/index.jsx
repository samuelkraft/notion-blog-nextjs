import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { IconArrowRight } from "@tabler/icons";
import styled from "styled-components";
import { Tag } from "../../components/homepage/HomeSection01";

import {
	HomeSection05Container,
	HomeSection05Wrapper,
} from "../../components/homepage/HomeSection05";

import GradientButton from "../../components/button/GradientButton";

import {
	RowWrapper,
	SloganSection06,
	ButtonContainer,
} from "../../components/homepage/HomeSection06";

import {
	FeaturesCardContainer,
	HeadingSection01,
} from "../../components/homepage/HomeSection01";

import circle_1 from "../../images/circle_1.svg";
import circle_2 from "../../images/circle_2.svg";
import circle_3 from "../../images/circle_3.svg";
import circle_4 from "../../images/circle_4.svg";
import circle_5 from "../../images/circle_5.svg";
import circle_6 from "../../images/circle_6.svg";
import circle_7 from "../../images/circle_7.svg";
import circle_8 from "../../images/circle_8.svg";
import Image from "next/image";
import Link from "next/link";


const getStaticProps = async ({ locale }) => {

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
		revalidate: 60,
	};
};

export { getStaticProps };

const ServicesPages = ({ }) => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	return (
		<ServicesContainer>
			<ServicesWrapper>
				<div className='text-content'>
					<Tag style={{ width: "35%" }}>
						<span>Services</span>
					</Tag>
					<RowWrapper>
						<div>
							<SloganSection06>{t("ourExpertises")}</SloganSection06>
							<HeadingSection01>
								<h2>{t("sloganSubtitle")}</h2>
							</HeadingSection01>
						</div>

						<ButtonContainer>
							<Link href='/#contact'>
								<GradientButton
									gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
									type='button'
									size='lg'>
									{t("contactUs")}
								</GradientButton>
							</Link>
						</ButtonContainer>
					</RowWrapper>
				</div>
				<ServicesCardContainer>
					<ServicesCard href='/services/administrative-services'>
						<Image src={circle_2} alt='administrativeServices' />
						<div className='text-content'>
							<h4>{t("administrativeServices")}</h4>
							<p>{t("administrativeServices_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/services/accounting-services'>
						<Image src={circle_1} alt='accountingServices' />
						<div className='text-content'>
							<h4>{t("accountingServices")}</h4>
							<p>{t("accountingServices_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/services/legal-services'>
						<Image src={circle_3} alt='expertise RH' />
						<div className='text-content'>
							<h4>{t("expertiseRH")}</h4>
							<p>{t("expertiseRH_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/services/legal-services'>
						<Image src={circle_4} alt='legal services' />
						<div className='text-content'>
							<h4>{t("conseilJuridique")}</h4>
							<p>{t("conseillerJuridique_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/services/tax-services'>
						<Image src={circle_5} alt='tax services' />
						<div className='text-content'>
							<h4>{t("conseillerFiscal")}</h4>
							<p>{t("taxServices_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/services/audit-services'>
						<Image src={circle_6} alt='auditServices' />
						<div className='text-content'>
							<h4>{t("auditServices")}</h4>
							<p>{t("auditServices_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/french-tax'>
						<Image src={circle_7} alt='french Tax' />
						<div className='text-content'>
							<h4>{t("frenchTax")}</h4>
							<p>{t("accountingServices_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>

					<ServicesCard href='/usa-tax'>
						<Image src={circle_8} alt='usa tax' />
						<div className='text-content'>
							<h4>{t("usTax")}</h4>
							<p>{t("usTax_heading")}</p>
						</div>
						<IconArrowRight size={33} color='#1b1464' />
					</ServicesCard>
				</ServicesCardContainer>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

const ServicesContainer = styled(HomeSection05Container)`
	margin-bottom: 3rem;
	@media screen and (max-width: 768px) {
		margin-top: 0rem;
	}

	@media screen and (min-width: 768px) {
		padding: 2rem;
	}
	@media screen and (min-width: 1024px) {
		margin-top: 0rem;

		padding: 1rem 12%;
	}

	@media screen and (min-width: 1440px) {
		margin-top: 0rem;

		padding: 1rem 12%;
	}
	@media screen and (min-width: 1800px) {
		padding: 1rem 8%;
	}

	@media screen and (min-width: 2100px) {
		padding: 1rem 16%;
	}
	@media screen and (min-width: 2500px) {
		padding: 1rem 25%;
	}
`;

const ServicesWrapper = styled(HomeSection05Wrapper)`
	.text-content {
		display: flex;
		flex-flow: column;
		justify-content: center;

		@media screen and (min-width: 1024px) {
			margin-top: 0rem;
		}

		@media screen and (min-width: 1440px) {
			margin-top: 0rem;
		}
	}
`;

const ServicesCardContainer = styled(FeaturesCardContainer)`
	position: relative;
	width: 100%;
	height: 100%;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	z-index: 10;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr;

	align-items: center;
	justify-items: center;
	justify-content: center;

	@media screen and (min-width: 320px) {
		grid-template-columns: 1fr;
		justify-self: center;
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
	}

	margin-top: 3rem;
`;

const ServicesCard = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 2.5px solid #1b1464;
	border-radius: 51px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 3rem;
	position: relative;
	width: 100%;
	height: 100%;
	gap: 1rem;

	.text-content {
		margin-top: 2rem;
		font-family: "AllRoundGothic-Demi";
		font-style: normal;
		font-weight: 400;
		font-size: 38px;
		line-height: 48px;
		letter-spacing: 0.327px;
		color: #1b1464;

		p {
			font-family: "Gilroy", sans-serif;
			font-size: 24px;
		}
	}

	@media screen and (min-width: 320px) {
		width: 100%;
	}
`;

export default ServicesPages;
