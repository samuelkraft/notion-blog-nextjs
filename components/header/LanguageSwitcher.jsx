import styled from "styled-components";
import France from "../../images/flag-france.svg";

import { IconLanguage } from "@tabler/icons";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import usa from "../../images/usa.svg";

const LanguageSwitcher = () => {
	const router = useRouter();
	return (
		<Link href='/' locale={router.locale === "fr" ? "en" : "fr"}>
			<LanguageSwitcherStyles>
				<IconLanguage strokeWidth={2} color={"black"} />
				{router.locale === "fr" ? "English" : "Français"}
				<Image src={router.locale === "fr" ? usa : France} alt="language" />
			</LanguageSwitcherStyles>
		</Link>
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
