import {
	HomeSection01Container,
	HomeSection01Wrapper,
	HeadingSection01,
	SloganSection01,
	Tag,
} from "./HomeSection01";
import Image from "next/image";
import GradientButton from "../button/GradientButton";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";
import comptableDedie from "../../images/comptable_dedie.png";

const HomeSection02 = () => {
	const { t } = useTranslation("home");

	return (
		<HomeSection01Container>
			<HomeSection02Wrapper>
				<ImageWrapper>
					<Image src={comptableDedie} />
				</ImageWrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Tag>
						<span>{t("whyUs")}</span>
					</Tag>
					<SloganSection01>
						<h1>{t("section02_title")}</h1>
					</SloganSection01>
					<HeadingSection01>
						<h2>
							{t("section02_heading_pt1")}
							<b>
								<u> {t("section02_bold1")}</u>
							</b>
							<b>{t("section02_bold2")}</b>
							{t("section02_heading_pt2")}
						</h2>
					</HeadingSection01>
					<HeadingSection01>
						<h2>
							{t("section02_heading_pt3")}
							<b>{t("section02_bold3")}</b>
							{t("section02_heading_pt4")}
						</h2>
					</HeadingSection01>

					<GradientButton
						gradientColor='#0657CF'
						component='button'
						width={200}>
						{t("readMore")}
					</GradientButton>
				</motion.div>
			</HomeSection02Wrapper>
		</HomeSection01Container>
	);
};

export default HomeSection02;

const HomeSection02Wrapper = styled(HomeSection01Wrapper)`
	@media screen and (max-width: 1023px) {
		flex-direction: column-reverse;
	}

	.text-content {
		width: 50%;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
