import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import AboutSection01 from "../../components/about/AboutSection01";
import AboutSection02 from "../../components/about/AboutSection02";
import AboutSection03 from "../../components/about/AboutSection03";
import AboutSection04 from "../../components/about/AboutSection04";
import AboutSection05 from "../../components/about/AboutSection05";
import HeroAboutPage from "../../components/about/HeroAboutPage";
import HiringForm from "../../components/about/HiringForm";

const AboutPage = ({ }) => {
	const { t, i18n } = useTranslation("common", {
		bindI18n: "languageChanged loaded",
	});

	useEffect(() => {
		i18n.reloadResources(i18n.resolvedLanguage, ["common"]);
	}, []);

	return (
		<>
			<HeroAboutPage />
			<AboutSection01 />
			<AboutSection02 />
			<AboutSection03 />
			<AboutSection04 />
			<AboutSection05 />
			<HiringForm />
		</>
	);
};


const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
		revalidate: 60,
	};
};

export { getStaticProps };

export default AboutPage;
