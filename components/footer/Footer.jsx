import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Logo from "../../images/logo_Expand-CPA.svg"
import { useTranslation } from "next-i18next";

import {
    IconPhone,
    IconMail,
    IconMapPin,
} from "@tabler/icons";

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
                        <p>
                            {t("slogan")}
                        </p>
                    </div>
                </div>
                <div>
                    <h2>{t("footerLinks")}</h2>
                    <div>
                        <Link href='/sirh'>
                            <div className='links'>
                                <span>{t("cabinet")}</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href='/paie'>
                            <div className='links'>
                                <span>{t("business")}</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href='/rh'>

                            <div className='links'>
                                <span>{t("tax")}</span>
                            </div>

                        </Link>
                    </div>
                    <div>
                        <Link href='/expertscomptables'>
                            <div className='links'>
                                <span>{t("blog")}</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href='/expertscomptables'>
                            <div className='links'>
                                <span>{t("contact")}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>{t("coordonnees")}</h2>
                    <div className='links'>
                        <Link href='/pricing'>
                            <IconPhone style={{ marginRight: "10px" }} />01 86 96 37 01 / 06 59 69 13 42
                        </Link>
                    </div>
                    <div className='links'>
                        <Link href='/demo'>
                            <IconMail style={{ marginRight: "10px" }} />contact@asp-experts.com
                        </Link>
                    </div>
                    <div className='links'>
                        <Link href='/'>
                            <IconMapPin />
                            <span style={{ marginLeft: "10px" }}>
                                87 rue la Boétie, 75008 PARIS
                            </span>
                            <br />
                            <span style={{ marginLeft: "32px" }}>
                                34 rue Poissonnière, 75002 PARIS
                            </span>
                            <br />
                            <span style={{ marginLeft: "32px" }}>
                                Menahem Begin, 132 TEL AVIV
                            </span>
                        </Link>
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
		padding: 2rem 32%;
	}
`;

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	color: #1B1464;

	.brand {
		width: 33%;
		p {
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
        color:#1B1464;
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	a,
	a:visited,
	a::after {
		text-decoration: none;
		color: #1B1464;
		font-size: 16px;
		font-weight: 500;
	}

	.links {
		margin-top: 0.85rem;
		display: flex;
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
`;
export default Footer;
