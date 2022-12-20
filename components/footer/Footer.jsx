import Image from "next/image";
import Link from "../Link";
import styled from "styled-components";

import Logo from "../../images/logo_Expand-CPA.svg";
import { useTranslation } from "next-i18next";

import { IconPhone, IconMail, IconMapPin } from "@tabler/icons";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<FooterContainer>
			<FooterWrapper>
				<div className='brand'>
					<Link href='/'>
						<Image src={Logo} width={200} height={150} />
					</Link>
					<div>
						<p>{t("slogan")}</p>
					</div>
				</div>
				<div className='column'>
					<h2>{t("footerLinks")}</h2>
					<div>
						<Link href='/about'>
							<div className='links'>
								<span>{t("cabinet")}</span>
							</div>
						</Link>
					</div>
					<div>
						<Link href='/services'>
							<div className='links'>
								<span>{t("business")}</span>
							</div>
						</Link>
					</div>
					<div>
						<Link href='/french-tax'>
							<div className='links'>
								<span>{t("tax")}</span>
							</div>
						</Link>
					</div>
					<div>
						<Link href='/blog'>
							<div className='links'>
								<span>{t("blog")}</span>
							</div>
						</Link>
					</div>
					<div>
						<Link href='/#contact'>
							<div className='links'>
								<span>{t("contact")}</span>
							</div>
						</Link>
					</div>
				</div>
				<div className='column'>
					<h2>{t("coordonnees")}</h2>
					<a href='tel:01-86-96-37-01'>
						<div className='links'>
							<IconPhone size={28} />
							<span>01 86 96 37 01 / 06 59 69 13 42</span>
						</div>
					</a>
					<a href='mailto:contact@asp-experts.com'>
						<div className='links'>
							<IconMail size={28} />
							<span>contact@asp-experts.com</span>
						</div>
					</a>

					<div className='links'>
						<IconMapPin size={28} />
						<div className='column-location'>
							<a
								href='https://www.google.fr/maps/place/87+Rue+La+Bo%C3%A9tie,+75008+Paris/@48.8717882,2.3063296,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fc6832f7acf:0xa76d2d4cc6634b68!8m2!3d48.8717882!4d2.3085183?hl=fr'
								target='_blank'
								rel='noopener noreferrer'>
								<span>87 rue la Boétie, 75008 PARIS</span>
							</a>
							<a
								href='https://www.google.fr/maps/place/34+Rue+Poissonni%C3%A8re,+75002+Paris/@48.8699193,2.345757,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e165da4e065:0x101837ce411c25e4!8m2!3d48.8699193!4d2.3479457?hl=fr'
								target='_blank'
								rel='noopener noreferrer'>
								<span>34 rue Poissonnière, 75002 PARIS</span>
							</a>
							<a
								href='https://www.google.fr/maps/place/%D7%A7%D7%A0%D7%99%D7%95%D7%9F+%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C%D7%99,+Derech+Menachem+Begin+132,+Tel+Aviv-Yafo,+Isra%C3%ABl%E2%80%AD/@32.0743897,34.7899806,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b991302fe6f:0x7e4710b90ab7ab85!8m2!3d32.0743897!4d34.7921693?hl=fr'
								target='_blank'
								rel='noopener noreferrer'>
								<span>Menahem Begin, 132 TEL AVIV</span>
							</a>
						</div>
					</div>
				</div>
			</FooterWrapper>
			<Copyright>
				<p>©2022 Expand-CPA All right reserved.</p>
			</Copyright>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	padding: 2rem;
	@media screen and (min-width: 768px) {
		padding: 2rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 2rem 6%;
	}

	@media screen and (min-width: 1440px) {
		padding: 2rem 12%;
	}
	@media screen and (min-width: 1800px) {
		padding: 2rem 16%;
	}

	@media screen and (min-width: 2100px) {
		padding: 2rem 20%;
	}
	@media screen and (min-width: 2500px) {
		padding: 2rem 25%;
	}
`;

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	color: #1b1464;

	.brand {
		width: 33%;
		p {
			font-family: "AllRoundGothic-Demi";
			font-weight: 500;
			font-size: 1.2rem;
		}
		@media screen and (max-width: 767px) {
			width: 100%;
		}
	}

	h2 {
		font-family: "AllRoundGothic-Demi";
		color: #1b1464;
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	a,
	a:visited,
	a::after {
		text-decoration: none;
		color: #1b1464;
		font-weight: 500;
		font-size: 1.2rem;
	}

	.links {
		display: flex;
		line-height: 1;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		font-weight: 500;
		font-size: 1.2rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.column-location {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media screen and (max-width: 767px) {
		flex-flow: column;

		> div {
			margin-top: 2rem;
		}
	}
`;

const Copyright = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	color: #1b1464;
`;
export default Footer;
