import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from "next-i18next";
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }
const UsaTax = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            {/* <Seo seo={homepage.attributes.seo} /> */}
            <div>UsaTax</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}



export default UsaTax