import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const HeroBlogPage = ({ posts }) => {
	const { t } = useTranslation("common");

	const post = posts[0];
	const post2 = posts[1];
	const date = new Date(post.last_edited_time).toLocaleString("en-US", {
		month: "short",
		day: "2-digit",
		year: "numeric",
	});

	const sidebarCards = [posts[0], posts[1], posts[2]];
	return (
		<HeroBlogPageContainer>
			<Subtitle>{t("blog")}</Subtitle>
			<HeadingLarge>Articles & News</HeadingLarge>
			<GridContainer>
				<div>
					<BigCard
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
								{post?.properties?.Name?.title[0]?.plain_text || "Article"}
							</h1>
							<Link href={`/article/${post.id}`} locale='fr'>
								{t("readNow")} →
							</Link>
						</div>
					</BigCard>
					<BigCard
						cover={
							post2?.cover?.external?.url ||
							post2?.cover?.file?.url ||
							"https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
						}>
						<div className='thumbnail'>
							<span className='category'>
								{post2?.properties?.Tags?.multi_select[0]?.name || "New"}
							</span>
						</div>
						<div className='content'>
							<p>{date}</p>
							<h1>
								{post2?.properties?.Name?.title[0]?.plain_text || "Article"}
							</h1>
							<Link href={`/article/${post2.id}`} locale='fr'>
								{t("readNow")} →
							</Link>
						</div>
					</BigCard>
				</div>
				<RightSection>
					<Subtitle>{t("popular")}</Subtitle>
					{sidebarCards.map((post) => (
						<div className='list' key={post.id}>
							<div className='card_sidebar'>
								<div className='card_sidebar_layout'>
									<div className='thumbnail'>
										<img
											src={
												post?.cover?.external?.url ||
												post?.cover?.file?.url ||
												"https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80"
											}
											alt={post?.properties?.Name?.title[0]?.plain_text}
											className='cover-image'
										/>
										<div className='category-tag'>
											{post?.properties?.Tags?.multi_select[0]?.name || "New"}
										</div>
									</div>
									<div className='content'>
										<p>{date}</p>
										<h1>
											{post?.properties?.Name?.title[0]?.plain_text || "Article"}
										</h1>
										<Link href={`/article/${post.id}`} locale='fr'>
											{t("readNow")} →
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</RightSection>
			</GridContainer>
		</HeroBlogPageContainer>
	);
};

export default HeroBlogPage;

export const HeroBlogPageContainer = styled.div`
	width: 100%;
	max-width: 1400px;
	margin-right: auto;
	margin-left: auto;
	padding: 5rem;

	@media screen and (max-width: 767px) {
		padding: 1rem;
	}
`;

const Subtitle = styled.div`
	display: inline-block;
	margin-bottom: 15px;
	padding: 9px 18px;
	border-style: solid;
	border-width: 1.5px;
	border-color: black;
	border-radius: 12px;
	color: black;
	font-size: 0.675rem;
	letter-spacing: 2px;
	text-transform: uppercase;
`;

export const HeadingLarge = styled.h1`
	color: #1b1464;
	font-family: "AllRoundGothic-Demi";
	font-size: 3.5rem;
	line-height: 1.2;
	margin-top: 10px;
	margin-bottom: 10px;

	@media screen and (max-width: 991px) {
		font-size: 3.2rem;
	}

	@media screen and (max-width: 767px) {
		font-size: 2.8rem;
		line-height: 1.2;
	}
	@media screen and (max-width: 479px) {
		font-size: 2.2rem;
	}
`;

const GridContainer = styled.div`
	grid-column-gap: 4rem;
	grid-row-gap: 4rem;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: auto;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	max-width: 100%;
	margin-top: 2rem;
	@media screen and (max-width: 991px) {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
`;

const BigCard = styled.div`
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: rgba(217, 224, 236, 0.2);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 13px;
	.thumbnail {
		position: relative;
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-top-left-radius: 13px;
		border-top-right-radius: 13px;
		background: url(${(props) => props.cover});
		background-repeat: no-repeat;
		background-position: 50% 50%;

		max-width: 100%;
		vertical-align: middle;
		display: inline-block;
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

const RightSection = styled.div`
	.list {
		padding-bottom: 2rem;
	}

	.card_sidebar {
		border-radius: 24px;
		position: relative;
		display: flex;
		overflow: hidden;
		width: 100%;
		height: 100%;
		flex-direction: column;

		border-radius: 24px;
		background: rgba(217, 224, 236, 0.2);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		max-width: 100%;
		a {
			color: #2457f5;
			font-weight: 700;
			text-decoration: none;
		}
	}

	.card_sidebar_layout {
		display: grid;
		align-items: center;
		grid-auto-columns: 1fr;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		grid-template-columns: auto 1.5fr;
		grid-template-rows: auto;

		.thumbnail {
			width: 12rem;
			height: 100%;

			.cover-image {
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
			}
			img {
				max-width: 100%;
				vertical-align: middle;
				display: inline-block;
			}
			img {
				border: 0;
			}

			.category-tag {
				position: absolute;
				left: 0%;
				top: auto;
				right: auto;
				bottom: 0%;
				padding: 8px 10px;
				border-top-right-radius: 10px;
				background-color: rgba(129, 129, 139, 0.5);
				color: #fff;
				font-weight: 500;
			}
		}

		.content {
			display: flex;
			height: 100%;
			padding: 26px 26px 40px;

			flex-direction: column;
			grid-column-gap: 10px;
			grid-row-gap: 10px;

			h1 {
				font-size: 24px;
				font-family: "AllRoundGothic-Demi";
				color: #1b1464;
				letter-spacing: 0.327px;

				@media screen and (max-width: 767px) {
					font-size: 20px;
				}
			}

			@media screen and (max-width: 767px) {
				padding: 0.5rem;
			}
		}
	}
`;
