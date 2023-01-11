import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { SloganSection01, HeadingSection01 } from "./HomeSection01";
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";


const HomeSection03 = () => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })


	return (
		<HomeSection03Container
			initial={{ opacity: 0 }}
			animate={{
				opacity: isInView ? 1 : 0,
			}}
			transition={{
				duration: 1,
				delay: 0.5,
				ease: 'easeInOut',
				when: 'afterChildren',
			}}
			ref={ref} >
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

const HomeSection03Container = styled(motion.div)`
	margin: 3rem 0;
	background: rgba(217, 224, 236, 0.2);
`;

const TextContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	padding: 8rem;

	@media screen and (max-width: 500px) {
		padding: 2rem;
	}

	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

const SloganSection03 = styled(SloganSection01)`
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-family: "AllRoundGothic-Demi";
		font-size: 42px;
		color: #1b1464;
		line-height: 1.2;

		@media screen and (max-width: 465px) {
			font-size: 42px;
		}

		@media screen and (min-width: 768px) {
			font-size: 52px;
			width: 100%;
		}
		@media screen and (min-width: 1024px) {
			font-size: 58px;
			margin-top: 3.5rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 58px;
			line-height: 77px;
			letter-spacing: 0.327px;
		}
	}
`;

export default HomeSection03;
