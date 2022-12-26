import { useTranslation } from "next-i18next";
import AboutSection01 from "../../../components/about/AboutSection01";
import AboutSection02 from "../../../components/about/AboutSection02";
import HeroAboutPage from "../../../components/about/HeroAboutPage";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }



const AboutPage = ({ }) => {
	const { t } = useTranslation("home");
	return (
		<>
			<HeroAboutPage />
			<AboutSection01 />
			<AboutSection02 />
		</>
	);
};


export default AboutPage;
