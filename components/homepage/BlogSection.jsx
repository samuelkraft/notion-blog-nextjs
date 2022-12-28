import styled from "styled-components";
import { Tag } from "./HomeSection01";

import { HomeSection05Container, HomeSection05Wrapper } from "./HomeSection05";

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";

import { useTranslation } from "next-i18next";
import GradientButton from "../button/GradientButton";

import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import { SloganSection06, ButtonContainer, RowWrapper } from "./HomeSection06";
import Link from "../Link";

const BlogSection = ({ posts }) => {
	const { t } = useTranslation("home");
	return (
		<HomeSection05Container>
			<HomeSection05Wrapper>
				<motion.div
					className='text-content'
					variants={titleAnim}
					initial='hidden'
					animate='show'>
					<Tag style={{ width: "35%" }}>
						<span>Blog</span>
					</Tag>
					<RowWrapper>
						<SloganSection06>{t("blog_section")}</SloganSection06>
						<ButtonContainer>
							<Link href='/blog'>
								<GradientButton
									gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
									component='button'
									size='lg'>
									{t("seeAll")}
								</GradientButton>
							</Link>
						</ButtonContainer>
					</RowWrapper>
				</motion.div>
				<Carousel
					withIndicators
					height={600}
					slideSize='33.333333%'
					slideGap='xl'
					breakpoints={[
						{ maxWidth: "md", slideSize: "50%" },
						{ maxWidth: "sm", slideSize: "100%", slideGap: 0 },
					]}
					loop
					nextControlIcon={<IconArrowRight size={24} color='#C6D0EB' />}
					previousControlIcon={<IconArrowLeft size={24} color='#C6D0EB' />}
					align='start'
					styles={(theme) => ({
						root: {},

						control: {
							width: "3rem",
							height: "3rem",
							border: "1px solid #C6D0EB",

							"&:hover": {
								backgroundColor: "#3672F8",
							},
						},

						controls: {
							top: "none",
							bottom: "-12rem",
							justifyContent: "right",
							gap: "1rem",

							"@media screen and (max-width: 768px)": {
								bottom: "-12rem",
							},
						},

						indicator: {
							backgroundColor: "#3672F8",
						},
					})}>
					{posts.map((post) => {
						const date = new Date(post.created_time).toLocaleString("en-US", {
							month: "short",
							day: "2-digit",
							year: "numeric",
						});
						return (
							<Carousel.Slide key={post.id}>
								<Link href={`/article/${post.id}`} locale='fr'>
									<BlogCard
										cover={
											post?.cover?.external?.url ||
											post?.cover?.file?.url ||
											"https://assets.website-files.com/62e87007d1ea4814ebeaf7b5/630b6e744fa8ae74a200b8b1_main-post-04-p-500.jpg"
										}>
										<div className='thumbnail'>
											<span className='category'>
												{post?.properties?.Tags?.multi_select[0].name || "New"}
											</span>
										</div>
										<div className='content'>
											<p>{date}</p>
											<h1>
												{post?.properties?.Name?.title[0].plain_text ||
													"Article"}
											</h1>
											<Link href={`/article/${post.id}`} locale='fr'>
												{t("readNow")} →
											</Link>
										</div>
									</BlogCard>
								</Link>
							</Carousel.Slide>
						);
					})}
				</Carousel>
			</HomeSection05Wrapper>
		</HomeSection05Container>
	);
};

const BlogCard = styled.div`
	width: 400px;
	height: 450px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: rgba(217, 224, 236, 0.2);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 51px;

	@media screen and (max-width: 768px) {
		width: 320px;
	}

	@media screen and (min-width: 1440px) {
		width: 400px;
	}

	.thumbnail {
		position: relative;
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-top-left-radius: 51px;
		border-top-right-radius: 51px;
		background: url(${(props) => props.cover});
	}

	.category {
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: rgba(129, 129, 139, 0.5);
		border-radius: 0px 30px 0px 0px;
		padding: 0.5rem 2rem;
		color: #fff;
		font-size: 18px;
		font-weight: 500;
	}

	.content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		h1 {
			font-size: 24px;
			font-family: "AllRoundGothic-Demi";
			color: #1b1464;
			line-height: 38px;
			letter-spacing: 0.327px;
			font-weight: 400;
			text-align: start;
		}

		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 29px;
			letter-spacing: 0.327px;

			color: #1b1464;
		}

		a {
			font-weight: 700;
			font-size: 18px;
			line-height: 30px;
			letter-spacing: 0.327px;

			color: #2457f5;
		}
	}
`;

export default BlogSection;
