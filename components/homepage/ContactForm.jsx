import styled from "styled-components";
import { Tag } from "./HomeSection01";
import { RowWrapper, SloganSection06 } from "./HomeSection06";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import GradientButton from "../button/GradientButton";

import linkedin from "../../images/linkedin.svg";
import whatsapp from "../../images/whatsapp.svg";
import youtube from "../../images/youtube.svg";
import instagram from "../../images/instagram.svg";
import mail from "../../images/mail.svg";
import redLocation from "../../images/red_location.svg";
import greenLocation from "../../images/green_location.svg";
import phone from "../../images/phone.svg";
import map from "../../images/map.png";
import { useState } from "react";
import { useRouter } from "next/router";
import {
	TextInput,
	Select,
	Modal,
	useMantineTheme,
	Group,
	Textarea,
	Flex,
} from "@mantine/core";

import { IconMail, IconUser, IconPhone, IconCircleCheck } from "@tabler/icons";

const ContactForm = () => {
	const { t } = useTranslation("home");
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const router = useRouter();

	async function handleOnSubmit(e) {
		e.preventDefault();
		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});
		// fetch("https://popay.preprod.popay.io/api/mail", {
		// 	method: "post",
		// 	//mode: 'no-cors', // 'cors' by default
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(formData),
		// });
		console.log(formData);
	}

	return (
		<ContactFormContainer id='contact'>
			<Tag style={{ width: "35%" }}>
				<span>Contact</span>
			</Tag>

			<RowWrapper>
				<SloganSection06>{t("followUs")}</SloganSection06>
				<SocialMediaContainer>
					<Image src={linkedin} />
					<Image src={instagram} />
					<Image src={whatsapp} />
					<Image src={youtube} />
				</SocialMediaContainer>
			</RowWrapper>

			<ContactFormLayout>
				<TextContentContainer>
					<TextContent>
						<h1>{t("form_title")}</h1>

						<p>{t("form_paragraph")}</p>
					</TextContent>
					<Form method='post' onSubmit={handleOnSubmit}>
						<TextInput
							required
							label='Email'
							placeholder='your@email.com'
							type='email'
							radius='lg'
							icon={<IconMail color='#2457F5' />}
							size='lg'
							name='email'
							styles={{
								defaultVariant: {
									borderColor: "#2457F5",
									"&:focus": {
										borderColor: "#2457F5",
									},
								},
							}}
							// {...form.getInputProps("email")}
						/>

						<Group position='left' spacing='xl'>
							<TextInput
								required
								label='Nom'
								placeholder='Nom'
								type='text'
								radius='lg'
								size='lg'
								name='firstName'
								// {...form.getInputProps("firstName")}
								icon={<IconUser color='#2457F5' />}
								styles={{
									defaultVariant: {
										borderColor: "#2457F5",
										"&:focus": {
											borderColor: "#2457F5",
										},
									},
								}}
							/>
							<TextInput
								required
								label='Prénom'
								placeholder='Prénom'
								tyoe='text'
								radius='lg'
								size='lg'
								icon={<IconUser color='#2457F5' />}
								name='lastName'
								// {...form.getInputProps("lastName")}
								styles={{
									defaultVariant: {
										borderColor: "#2457F5",
										"&:focus": {
											borderColor: "#2457F5",
										},
									},
								}}
							/>
						</Group>

						<TextInput
							required
							label='Telephone'
							placeholder='01 23 45 67 89'
							type='tel'
							radius='lg'
							size='lg'
							icon={<IconPhone color='#2457F5' />}
							name='phone'
							// {...form.getInputProps("phone")}
							styles={{
								defaultVariant: {
									borderColor: "#2457F5",
									"&:focus": {
										borderColor: "#2457F5",
									},
								},
							}}
						/>

						<Textarea
							placeholder='Your comment'
							label='Your comment'
							withAsterisk
							size='lg'
							radius='lg'
						/>

						<Modal
							opened={opened}
							onClose={() => {
								setOpened(false);
							}}
							overlayColor={
								theme.colorScheme === "dark"
									? theme.colors.dark[9]
									: theme.colors.gray[2]
							}
							overlayOpacity={0.55}
							overlayBlur={3}
							transitionDuration={400}
							centered
							radius='md'
							padding='xl'
							size='lg'>
							<Group position='center'>
								<Flex
									direction='column'
									align='center'
									justify='center'
									gap={30}>
									<TextContentContentModal>
										<h1>Le formulaire à été envoyé ! </h1>
										<p>
											Vous allez être recontacté dans les plus brefs délais.
										</p>
									</TextContentContentModal>
									<IconCircleCheck size={60} color='#4364F7' />
								</Flex>
							</Group>
						</Modal>
						<GradientButton
							type='submit'
							size='lg'
							width='300px'
							gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
							onClick={() => setOpened(true)}>
							Demander une démo
						</GradientButton>
					</Form>
				</TextContentContainer>
				<TextContentContainer2>
					<ContactInfoContainer>
						<ImageWrapper>
							<Image src={map} alt='map' fill />
						</ImageWrapper>
					</ContactInfoContainer>
					<ContactInfoContainer>
						<ContactInfo>
							<Image src={redLocation} />
							<p>
								87 rue la Boétie, 75008 PARIS <br />
								34 rue Poissonnière, 75002 PARIS
							</p>
						</ContactInfo>
						<ContactInfo>
							<Image src={greenLocation} />
							<p>Menahem Begin, 132 TEL AVIV</p>
						</ContactInfo>
						<ContactInfo>
							<Image src={phone} />
							<p>
								<u>01 86 96 37 01</u>
								<br />
								<u>06 59 69 13 42</u>
							</p>
						</ContactInfo>
						<ContactInfo>
							<Image src={mail} />
							<p>contact@asp-experts.com</p>
						</ContactInfo>
					</ContactInfoContainer>
				</TextContentContainer2>
			</ContactFormLayout>
		</ContactFormContainer>
	);
};

const ContactFormContainer = styled.div`
	padding: 1rem;

	@media screen and (min-width: 768px) {
		padding: 2rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 2rem 10%;
		flex-flow: row;
	}

	@media screen and (min-width: 1440px) {
		padding: 2rem 14%;
	}
	@media screen and (min-width: 1800px) {
		padding: 2rem 18%;
	}

	@media screen and (min-width: 2100px) {
		padding: 2rem 22%;
	}
	@media screen and (min-width: 2500px) {
		padding: 2rem 25%;
	}
`;

const ContactFormLayout = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: column;
	margin-top: 2rem;
	padding: 2rem;
	border: 3px solid #1b1464;
	border-radius: 51px;

	@media screen and (min-width: 1200px) {
		flex-flow: row;
		gap: 3rem;
		padding: 5rem;
	}

	@media screen and (min-width: 1440px) {
	}
`;

const SocialMediaContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	@media screen and (min-width: 1024px) {
		margin-top: 2rem;
	}
`;

const TextContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: column;
	color: #1b1464;
	@media screen and (min-width: 1200px) {
		width: 50%;
	}
`;

const TextContentContainer2 = styled(TextContentContainer)`
	@media screen and (min-width: 1200px) {
		width: 50%;
		transform: translateY(-5rem);
	}
`;

const TextContent = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: column;
	align-items: center;
	align-content: center;
	@media screen and (max-width: 1024px) {
		margin-bottom: 3rem;
	}
	@media screen and (min-width: 1024px) {
		align-items: start;
		margin-bottom: 0rem;
	}
	h1 {
		font-family: "AllRoundGothic-Demi";
		@media screen and (max-width: 1024px) {
			font-size: 42px;
			font-weight: 600;
			line-height: 1.2;
			margin-bottom: 0.5rem;
			margin-top: 2rem;
			text-align: center;
		}

		@media screen and (min-width: 1024px) {
			font-size: 42px;
			font-weight: 600;
			margin-bottom: 1rem;
			line-height: 44px;
			text-align: start;
		}
		@media screen and (min-width: 1440px) {
			font-size: 46px;
			font-weight: 600;
			margin-bottom: 1rem;
			line-height: 55px;
			text-align: start;
		}
	}

	p {
		line-height: 24px;
		margin: 1rem 0rem;

		@media screen and (max-width: 1024px) {
			font-size: 18px;
			text-align: center;
			padding: 0rem 1rem;
		}
		@media screen and (min-width: 768px) {
			padding: 0rem 5rem;
		}
		@media screen and (min-width: 1024px) {
			text-align: start;
			font-size: 20px;
			padding: 0rem 0rem;
			width: 80%;
		}
		@media screen and (min-width: 1440px) {
		}
	}
`;

const Form = styled.form`
	display: flex;
	height: 80%;
	flex-flow: column;
	justify-content: center;
	gap: 2rem;
	margin-top: 2rem;
`;

const TextContentContentModal = styled.div`
	text-align: center;
	color: #352d61;

	h1 {
		margin-bottom: 1rem;
		font-size: 32px;
		font-weight: 600;
	}

	p {
		font-size: 16px;
	}

	@media screen and (max-width: 768px) {
		padding: 0 2rem;
	}
`;

const ContactInfoContainer = styled.div`
	display: flex;
	flex-flow: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	align-content: center;
`;
const ContactInfo = styled.div`
	width: 400px;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: flex-start;

	gap: 1rem;

	p {
		font-family: "AllRoundGothic-Demi";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 24px;

		color: #1b1464;
	}

	@media screen and (max-width: 500px) {
		width: 300px;
		p {
			font-size: 18px;
		}
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 300px;
	height: 200px;
	object-fit: cover;

	@media screen and (max-width: 425px) {
		width: 320px;
		height: 180px;
	}
	@media screen and (min-width: 510px) {
		width: 500px;
		height: 280px;
	}
	@media screen and (min-width: 768px) {
		width: 500px;
		height: 380px;
	}
	@media screen and (min-width: 1024px) {
		width: 600px;
		height: 400px;
	}
`;

export default ContactForm;
