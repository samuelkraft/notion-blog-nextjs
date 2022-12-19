import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic'
const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const PayrollServices = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            <div>PayrollServices</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}




export default PayrollServices