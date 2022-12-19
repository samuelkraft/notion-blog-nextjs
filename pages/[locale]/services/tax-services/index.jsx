import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStatic";

const getStaticProps = makeStaticProps(["common", "home"]);
export { getStaticPaths, getStaticProps };

const TaxServices = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            <div>TaxServices</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}

export default TaxServices