import { getDatabase } from "../../../lib/notion";
import { useTranslation } from "next-i18next";
import { getStaticPaths, getI18nProps } from "../../../lib/getStatic";
import HeroBlogPage from "../../../components/blog/HeroBlogPage";
import CategoryBlog from "../../../components/blog/CategoryBlog";

const getStaticProps = async (ctx) => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
			...(await getI18nProps(ctx, ["common", "home"])),
		},
		revalidate: 1,
	};
};

export { getStaticPaths, getStaticProps };

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ posts }) {
	const { t } = useTranslation("common");
	const categoryBusinessPosts = posts.filter(
		(post) => post?.properties?.Tags?.multi_select[0]?.name === "Business"
	);
	const categoryLegalPosts = posts.filter(
		(post) => post?.properties?.Tags?.multi_select[0]?.name === "Legal"
	);
	const categoryTaxPosts = posts.filter(
		(post) => post?.properties?.Tags?.multi_select[0]?.name === "Tax"
	);

	return (
		<>
			<HeroBlogPage posts={posts} />
			<CategoryBlog
				posts={posts}
				categoryBusinessPosts={categoryBusinessPosts}
				categoryLegalPosts={categoryLegalPosts}
				categoryTaxPosts={categoryTaxPosts}
			/>
		</>
	);
}
