import { HeroBlogPageContainer, HeadingLarge } from "./HeroBlogPage";
import styled from "styled-components";
import Link from "../Link";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const CategoryBlog = ({
	posts,
	categoryBusinessPosts,
	categoryLegalPosts,
	categoryTaxPosts,
}) => {
	const { t } = useTranslation("common");
	const [category, setCategory] = useState(posts);
	return (
		<HeroBlogPageContainer>
			<AllBlogPosts>
				<BlogPost>
					<HeadingMedium>{t("latestPosts")}</HeadingMedium>
					<LeftContainer>
						<div className='category-btn' onClick={() => setCategory(posts)}>
							{t("seeAll")}
						</div>
						<div
							className='category-btn'
							onClick={() => setCategory(categoryBusinessPosts)}>
							Business
						</div>
						<div
							className='category-btn'
							onClick={() => setCategory(categoryLegalPosts)}>
							Legal
						</div>
						<div
							className='category-btn'
							onClick={() => setCategory(categoryTaxPosts)}>
							Tax
						</div>
					</LeftContainer>
				</BlogPost>
				<RightContainer>
					{category.map((post) => {
						const date = new Date(post.created_time).toLocaleString("en-US", {
							month: "short",
							day: "2-digit",
							year: "numeric",
						});
						return (
							<Link href={`/article/${post.id}`} locale='fr'>
								<BlogPostCard
									cover={
										post?.cover?.external?.url ||
										"https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
									}>
									<div className='thumbnail'>
										<span className='category'>
											{post?.properties?.Tags?.multi_select[0]?.name || "New"}
										</span>
									</div>
									<div className='content'>
										<p>{date}</p>
										<h1>
											{post?.properties?.Name?.title[0]?.plain_text ||
												"Article"}
										</h1>
										<Link href={`/article/${post.id}`} locale='fr'>
											{t("readNow")} →
										</Link>
									</div>
								</BlogPostCard>
							</Link>
						);
					})}
				</RightContainer>
			</AllBlogPosts>
		</HeroBlogPageContainer>
	);
};

export default CategoryBlog;

const HeadingMedium = styled(HeadingLarge)`
	color: #1b1464;
	font-family: "AllRoundGothic-Demi";
	font-size: 2.8rem;

	@media screen and (max-width: 991px) {
		font-size: 2.8rem;
	}

	@media screen and (max-width: 767px) {
		font-size: 2.4rem;
		line-height: 1.2;
	}
	@media screen and (max-width: 479px) {
		font-size: 1.8rem;
	}
`;

const AllBlogPosts = styled.div`
	align-items: start;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	grid-template-columns: 0.5fr 1fr;
	grid-template-rows: auto;

	display: grid;
	grid-auto-columns: 1fr;

	@media screen and (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const BlogPost = styled.div`
	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 1;
	grid-row-end: span 1;

	position: sticky;
	top: 2rem;

	@media screen and (max-width: 767px) {
		position: static;
	}
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	background-attachment: scroll !important;
	margin-top: 3rem;
	.category-btn {
		display: inline-block;
		padding: 9px 15px;
		background: linear-gradient(109.75deg, #4364f7 0.82%, #1b1464 100%);
		color: white;
		border: 0;
		line-height: inherit;
		text-decoration: none;
		cursor: pointer;

		width: 10rem;
		padding: 15px 24px;

		justify-content: center;

		align-items: center;
		border-radius: 13px;

		color: #fff;
		font-size: 16px;
		font-weight: 500;
		text-align: center;
		letter-spacing: 2px;
		text-decoration: none;
	}
`;

const RightContainer = styled.div`
	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 1;
	grid-row-end: span 1;

	display: grid;

	align-items: center;
	grid-auto-columns: 1fr;
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;

	@media screen and (max-width: 991px) {
		grid-column-gap: 2rem;
		grid-row-gap: 4rem;
	}

	@media screen and (max-width: 767px) {
		margin-top: 2rem;
		-ms-grid-columns: 1fr;
		grid-template-columns: 1fr;
	}
`;

const BlogPostCard = styled.div`
	height: 450px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: rgba(217, 224, 236, 0.2);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 51px;

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
