import React from 'react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const AdministritiveServices = ({ }) => {
    const { t } = useTranslation("home");
    return (
        <>
            <div>AdministritiveServices</div>
            <div className=''>{t("greeting")}</div>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home", "common"])),
        },
        revalidate: 1,
    };
}

export default AdministritiveServices