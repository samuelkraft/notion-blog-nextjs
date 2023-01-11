import Head from "next/head";
import { getDatabase } from "../lib/notion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/homepage/HeroHomePage";
import InfiniteSlider from "../components/slider/InfiniteSlider";
import HomeSection01 from "../components/homepage/HomeSection01";
import HomeSection02 from "../components/homepage/HomeSection02";
import HomeSection03 from "../components/homepage/HomeSection03";
import HomeSection04 from "../components/homepage/HomeSection04";
import HomeSection05 from "../components/homepage/HomeSection05";
import HomeSection06 from "../components/homepage/HomeSection06";
import ContactForm from "../components/homepage/ContactForm";
import BlogSection from "../components/homepage/BlogSection";
import { useEffect } from "react";
import HeaderMegaMenu from "../components/header/HeaderMegaMenu"
import Footer from "../components/footer/Footer"
export const databaseId = process.env.NOTION_DATABASE_ID;
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import { pageAnimation } from "../lib/animation";

export default function Home({ posts }) {
    const { t, i18n } = useTranslation("common", {
        bindI18n: "languageChanged loaded",
    });
    const router = useRouter();

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
    }, [router.locale]);

    return (
        <div>
            <Head>
                <title>{t("home_meta_title")}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content={t("home_meta_description")} />
            </Head>
            <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <HeaderMegaMenu />
                <Hero />
                <InfiniteSlider />
                <HomeSection01 />
                <HomeSection02 />
                <HomeSection03 />
                <HomeSection04 />
                <HomeSection05 />
                <HomeSection06 />
                <BlogSection posts={posts} />
                <ContactForm />
                <Footer />
            </motion.div>
        </div>
    );
}

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
export { getStaticProps }