import { getDatabase } from "../../lib/notion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import HeroBlogPage from "../../components/blog/HeroBlogPage";
import CategoryBlog from "../../components/blog/CategoryBlog";

const getStaticProps = async ({ locale }) => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
			...(await serverSideTranslations(locale, ["common"])),
		},
		revalidate: 60,
	};
};

export { getStaticProps };

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ posts }) {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

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
