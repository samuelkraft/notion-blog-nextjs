import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic'
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const LegalServices = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            <div>LegalServices</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}


export default LegalServices