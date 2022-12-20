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
					<a href='https://www.google.com/maps/place/46+Rue+La+Fayette,+75009+Paris/@48.8746969,2.3380772,17z/data=!4m14!1m8!3m7!1s0x47e66e38cd18c2c1:0x7bab7dd24b147a47!2s46+Rue+La+Fayette,+75009+Paris!3b1!8m2!3d48.8746969!4d2.3402659!10e3!3m4!1s0x47e66e38cd18c2c1:0x7bab7dd24b147a47!8m2!3d48.8746969!4d2.3402659?hl=fr'>
						<div className='links'>
							<IconMapPin size={28} />
							<div className='column-location'>
								<span>87 rue la Boétie, 75008 PARIS</span>
								<span>34 rue Poissonnière, 75002 PARIS</span>
								<span>Menahem Begin, 132 TEL AVIV</span>
							</div>
						</div>
					</a>
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
		padding: 2rem 32%;
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
			margin-left: 1rem;
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
		font-size: 16px;
		font-weight: 500;
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
