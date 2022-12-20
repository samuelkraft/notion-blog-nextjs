import styled from "styled-components";
import France from "../../images/flag-france.svg";

import { IconLanguage } from "@tabler/icons";

import languageDetector from "../../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import usa from "../../images/usa.svg";

const LanguageSwitcher = ({ locale, ...rest }) => {
	const router = useRouter();
	let href = rest.href || router.asPath;
	let pName = router.pathname;
	Object.keys(router.query).forEach((k) => {
		if (k === "locale") {
			pName = pName.replace(`[${k}]`, locale);
			return;
		}
		pName = pName.replace(`[${k}]`, router.query[k]);
	});
	if (locale) {
		href = rest.href ? `/${locale}${rest.href}` : pName;
	}
	return (
		<LanguageSwitcherStyles>
			<IconLanguage strokeWidth={2} color={"black"} />
			<Link href={href} onClick={() => languageDetector.cache(locale)}>
				{locale === "fr" ? "Français" : "English"}
			</Link>
			<Image src={locale === "fr" ? France : usa} />
		</LanguageSwitcherStyles>
	);
};

export default LanguageSwitcher;

const LanguageSwitcherStyles = styled.div`
	display: flex;
	font-family: "Gilroy", sans-serif;
	font-weight: 600;
	line-height: 1.5;
	color: black;
	gap: 10px;
	padding: 0.5rem 1rem;
	border-radius: 3rem;
	border: 2px solid black;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
