import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const AboutPage = ({ }) => {
	const { t } = useTranslation("home");
	return (
		<>
			<div>AboutPage</div>
			<div className=''>{t("greeting")}</div>
		</>
	);
};


export default AboutPage;
