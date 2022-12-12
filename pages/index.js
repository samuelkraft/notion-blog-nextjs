import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Hero from "../components/homepage/HeroHomePage";
import InfiniteSlider from "../components/slider/InfiniteSlider";
import HomeSection01 from "../components/homepage/HomeSection01";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const { t } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <InfiniteSlider />
      <HomeSection01 />

    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
    revalidate: 1,
  };
};
