import Head from "next/head";
import { getDatabase } from "../../lib/notion";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'


import Hero from "../../components/homepage/HeroHomePage";
import InfiniteSlider from "../../components/slider/InfiniteSlider";
import HomeSection01 from "../../components/homepage/HomeSection01";
import HomeSection02 from "../../components/homepage/HomeSection02";
import HomeSection03 from "../../components/homepage/HomeSection03";
import HomeSection04 from "../../components/homepage/HomeSection04";
import HomeSection05 from "../../components/homepage/HomeSection05";
import HomeSection06 from "../../components/homepage/HomeSection06";
import ContactForm from "../../components/homepage/ContactForm";



export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const { t } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Expand CPA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <InfiniteSlider />
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection03 />
      <HomeSection04 />
      <HomeSection05 />
      <HomeSection06 />
      <ContactForm />
    </div>
  );
}

const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }
