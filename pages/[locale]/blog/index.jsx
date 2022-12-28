import Link from "../../../components/Link";
import styles from "../../index.module.css";
import { getDatabase } from "../../../lib/notion";
import { Text } from "../article/[id].js";
import { useTranslation } from "next-i18next";
import { getStaticPaths, getI18nProps } from '../../../lib/getStatic'
import HeroBlogPage from "../../../components/blog/HeroBlogPage";

const getStaticProps = async (ctx) => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
			...(await getI18nProps(ctx, ['common', 'home']))
		},
		revalidate: 1,
	};
};

export { getStaticPaths, getStaticProps }


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ posts }) {
	const { t } = useTranslation("common");
	return (
		<>
			<HeroBlogPage posts={posts} />
		</>
	);
}
