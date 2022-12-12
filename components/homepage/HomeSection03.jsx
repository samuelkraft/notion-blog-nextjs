import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { SloganSection01, HeadingSection01 } from "./HomeSection01";

const HomeSection03 = () => {
	const { t } = useTranslation("home");

	return (
		<HomeSection03Container>
			<TextContent>
				<SloganSection03>
					<h1>{t("section03_title")}</h1>
				</SloganSection03>
				<HeadingSection01>
					<h2>
						{t("section03_heading_pt1")}
						<b>
							<u>{t("section03_bold1")}</u>
						</b>
						{t("section03_heading_pt2")}
						<b>
							<u>{t("section03_bold2")}</u>
						</b>
						{t("section03_heading_pt3")}
						<b>
							<u>{t("section03_bold3")}</u>
						</b>
						{t("section03_heading_pt4")}
					</h2>
				</HeadingSection01>
			</TextContent>
		</HomeSection03Container>
	);
};

const HomeSection03Container = styled.div`
	margin: 3rem 0;
	background: rgba(217, 224, 236, 0.2);
`;

const TextContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	padding: 3rem;
`;

const SloganSection03 = styled(SloganSection01)`
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-family: "AllRoundGothic-Demi";
		font-weight: 600;
		font-size: 42px;
		color: #1b1464;
		line-height: 1.2;

		@media screen and (max-width: 465px) {
			font-size: 42px;
		}

		@media screen and (min-width: 768px) {
			font-size: 52px;
			width: 40rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 58px;
			width: 30rem;
			margin-top: 3.5rem;
		}
		@media screen and (min-width: 1440px) {
			width: 40rem;
			font-size: 58px;
			line-height: 77px;
			letter-spacing: 0.327px;
		}
	}
`;

export default HomeSection03;
