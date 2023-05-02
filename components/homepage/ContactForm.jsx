import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'

import map from '../../images/map.png'
import location1 from '../../images/location1.svg'
import location2 from '../../images/location2.svg'
import email from '../../images/email.svg'
import telephone from '../../images/telephone.svg'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import {
    TextInput,
    Modal,
    useMantineTheme,
    Group,
    Textarea,
    Flex,
    Select,
    Checkbox,
} from '@mantine/core'

import {
    IconMail,
    IconUser,
    IconPhone,
    IconCircleCheck,
    IconBriefcase,
} from '@tabler/icons'
import { motion, useInView } from 'framer-motion'

const ContactForm = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    const router = useRouter()

    async function handleOnSubmit(e) {
        e.preventDefault()
        console.log(e.currentTarget.elements)
        const formData = new FormData()
        // Append the selected file to the FormData object
        formData.append('firstName', e.currentTarget.elements.firstName.value)
        formData.append('lastName', e.currentTarget.elements.lastName.value)
        formData.append('phone', e.currentTarget.elements.phone.value)
        formData.append('email', e.currentTarget.elements.email.value)
        formData.append('needs', e.target.elements.needs.value)
        formData.append('message', e.currentTarget.elements.message.value)

        // Affiche les valeurs
        for (var value of formData.values()) {
            console.log(value)
        }

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: formData,
        })

        const resBody = await res.json()
    }

    return (
        <ContactFormContainer
            id='contact'
            initial={{ opacity: 0 }}
            animate={{
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
                when: 'afterChildren',
            }}
            ref={ref}
        >
            <Form
                method='post'
                onSubmit={handleOnSubmit}
            >
                <TextContentContainer>
                    <TextContent>
                        <h1>{t('form_title')}</h1>

                        <p>{t('form_paragraph')}</p>
                    </TextContent>
                    <FormLayout>
                        <Group
                            position='left'
                            spacing='sm'
                        >
                            <TextInput
                                required
                                label={t('firstName')}
                                placeholder={t('firstName')}
                                type='text'
                                radius='md'
                                size='md'
                                name='firstName'
                                style={{
                                    boxShadow:
                                        '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                }}
                                styles={{
                                    defaultVariant: {
                                        borderColor: '#2457F5',
                                        '&:focus': {
                                            borderColor: '#2457F5',
                                        },
                                    },
                                }}
                            />
                            <TextInput
                                required
                                label={t('lastName')}
                                placeholder={t('lastName')}
                                tyoe='text'
                                radius='md'
                                size='md'
                                name='lastName'
                                style={{
                                    boxShadow:
                                        '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                }}
                                styles={{
                                    defaultVariant: {
                                        borderColor: '#2457F5',
                                        '&:focus': {
                                            borderColor: '#2457F5',
                                        },
                                    },
                                }}
                            />
                        </Group>

                        <TextInput
                            required
                            label='Email'
                            placeholder='your@email.com'
                            type='email'
                            radius='md'
                            size='md'
                            name='email'
                            style={{
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            }}
                            styles={{
                                defaultVariant: {
                                    borderColor: '#2457F5',
                                    '&:focus': {
                                        borderColor: '#2457F5',
                                    },
                                },
                            }}
                        />

                        <TextInput
                            required
                            label={t('phone')}
                            placeholder='01 23 45 67 89'
                            type='tel'
                            radius='md'
                            size='md'
                            name='phone'
                            style={{
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            }}
                            styles={{
                                defaultVariant: {
                                    borderColor: '#2457F5',
                                    '&:focus': {
                                        borderColor: '#2457F5',
                                    },
                                },
                            }}
                        />

                        <Select
                            label={t('needs')}
                            placeholder={t('compta-courante')}
                            data={[
                                {
                                    value: 'audit-annuel',
                                    label: t('audit-annual'),
                                },
                                {
                                    value: 'compta-courante',
                                    label: t('compta-courante'),
                                },
                                {
                                    value: 'compta-exception',
                                    label: t('compta-exception'),
                                },
                                { value: 'irpp', label: t('irpp') },
                                { value: 'itin', label: t('itin') },
                                { value: 'juridique', label: t('juridique') },
                                { value: 'paie', label: t('payroll') },
                                { value: 'rh', label: t('rh') },
                            ]}
                            required
                            radius='md'
                            size='md'
                            name='needs'
                            style={{
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            }}
                        />

                        <Textarea
                            placeholder={t('your_message')}
                            label={t('your_message')}
                            name='message'
                            withAsterisk
                            size='md'
                            radius='md'
                            style={{
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            }}
                        />

                        <Checkbox label={t('policy')} />

                        <Modal
                            opened={opened}
                            onClose={() => {
                                setOpened(false)
                            }}
                            overlayColor={
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[9]
                                    : theme.colors.gray[2]
                            }
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            transitionDuration={400}
                            centered
                            radius='md'
                            padding='xl'
                            size='md'
                        >
                            <Group position='center'>
                                <Flex
                                    direction='column'
                                    align='center'
                                    justify='center'
                                    gap={30}
                                >
                                    <TextContentContentModal>
                                        <h1>{t('form_success_title')}</h1>
                                        <p>{t('form_success_subtitle')}</p>
                                    </TextContentContentModal>
                                    <IconCircleCheck
                                        size={60}
                                        color='#4364F7'
                                    />
                                </Flex>
                            </Group>
                        </Modal>
                        <GradientButton
                            type='submit'
                            size='md'
                            width='300px'
                            weight='400'
                            radius='xl'
                            gradientColor='#0657CF'
                            onClick={() => setOpened(true)}
                        >
                            {t('contactFormBtnLabel')}
                        </GradientButton>
                    </FormLayout>
                </TextContentContainer>
                <TextContentContainer2>
                    <ContactInfoContainer>
                        <ImageWrapper>
                            <Image
                                src={map}
                                alt='map'
                                fill
                            />
                        </ImageWrapper>
                    </ContactInfoContainer>
                    <ContactInfoContainer>
                        <a
                            href='https://www.google.fr/maps/place/46+Rue+La+Fayette,+75009+Paris/@48.8747004,2.3380772,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e38cd18c2c1:0x7bab7dd24b147a47!8m2!3d48.8746969!4d2.3402659?hl=fr'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <ContactInfo>
                                <Image
                                    src={location1}
                                    alt='paris'
                                />
                                <p>
                                    46 Rue La Fayette 75009 Paris <br />7 Rue
                                    Theodule Ribot 75017 Paris
                                </p>
                            </ContactInfo>
                        </a>
                        <a
                            href='https://www.google.fr/maps/place/%D7%A7%D7%A0%D7%99%D7%95%D7%9F+%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C%D7%99,+Derech+Menachem+Begin+132,+Tel+Aviv-Yafo,+Isra%C3%ABl%E2%80%AD/@32.0743897,34.7899806,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b991302fe6f:0x7e4710b90ab7ab85!8m2!3d32.0743897!4d34.7921693?hl=fr'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <ContactInfo>
                                <Image
                                    src={location2}
                                    alt='tel aviv'
                                />
                                <p>Menahem Begin, 132 TEL AVIV</p>
                            </ContactInfo>
                        </a>
                        <a href='tel:01-86-96-37-01'>
                            <ContactInfo>
                                <Image
                                    src={telephone}
                                    alt='phone'
                                />
                                <p>01 86 96 37 01 - 06 59 69 13 42</p>
                            </ContactInfo>
                        </a>
                        <a href='mailto:contact@expand-cpa.com'>
                            <ContactInfo>
                                <Image
                                    src={email}
                                    alt='mail'
                                />
                                <p>contact@expand-cpa.com</p>
                            </ContactInfo>
                        </a>
                    </ContactInfoContainer>
                </TextContentContainer2>
            </Form>
        </ContactFormContainer>
    )
}

const ContactFormContainer = styled(motion.div)`
    background: linear-gradient(
        360deg,
        rgba(217, 224, 236, 0.25) 0%,
        rgba(217, 224, 236, 0) 119.76%
    );

    min-height: 100vh;

    @media screen and (min-width: 768px) {
        padding: 5rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 5rem 10%;
        flex-flow: row;
    }

    @media screen and (min-width: 1440px) {
        padding: 5rem 14%;
    }
    @media screen and (min-width: 1800px) {
        padding: 5rem 18%;
    }

    @media screen and (min-width: 2100px) {
        padding: 5rem 22%;
    }
    @media screen and (min-width: 2500px) {
        padding: 5rem 25%;
    }
`

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 51px;

    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 3rem;
        padding: 5rem;
    }
`

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 1024px) {
        margin-top: 2rem;
    }
`

const TextContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    color: #1b1464;
    @media screen and (min-width: 1200px) {
        width: 50%;
    }
`

const TextContentContainer2 = styled(TextContentContainer)`
    @media screen and (min-width: 1200px) {
        width: 50%;
        transform: translateY(-5rem);
    }
`

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
        font-family: 'Poppins', sans-serif;
        @media screen and (max-width: 1024px) {
            font-size: 42px;
            line-height: 1.2;
            margin-bottom: 0.5rem;
            margin-top: 2rem;
            text-align: center;
        }

        @media screen and (min-width: 1024px) {
            font-size: 42px;
            margin-bottom: 1rem;
            line-height: 44px;
            text-align: start;
        }
        @media screen and (min-width: 1440px) {
            font-size: 46px;
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
`

const FormLayout = styled.div`
    display: flex;
    height: 80%;
    flex-flow: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
`

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
`

const ContactInfoContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    align-content: center;
`
const ContactInfo = styled.div`
    width: 420px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;

    gap: 1rem;

    p {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
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
`

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
`

export default ContactForm
