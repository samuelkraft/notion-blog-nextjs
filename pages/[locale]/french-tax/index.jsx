import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from "next-i18next";
const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }

const FrenchTax = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            <div>FrenchTax</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}



export default FrenchTax