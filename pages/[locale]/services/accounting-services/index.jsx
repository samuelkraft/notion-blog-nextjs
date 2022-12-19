import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic'
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const AccountingServices = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            {/* <Seo seo={homepage.attributes.seo} /> */}
            <div>AccountingServices</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}

export default AccountingServices