import styled from 'styled-components'
import { Tag } from '../homepage/HomeSection01'
import { RowWrapper, SloganSection06 } from '../homepage/HomeSection06'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import GradientButton from '../button/GradientButton'

import linkedin from '../../images/linkedin.svg'
import whatsapp from '../../images/whatsapp.svg'
import youtube from '../../images/youtube.svg'
import instagram from '../../images/instagram.svg'

import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import {
    TextInput,
    Modal,
    useMantineTheme,
    Group,
    Textarea,
    Flex,
} from '@mantine/core'

import { IconMail, IconUser, IconPhone, IconCircleCheck } from '@tabler/icons'

import { Text, Button, createStyles } from '@mantine/core'
import { Dropzone, MIME_TYPES } from '@mantine/dropzone'
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons'

import { motion, useInView } from 'framer-motion'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: 30,
    },

    dropzone: {
        borderWidth: 1,
        paddingBottom: 50,
        color: '#1B1464',
    },

    icon: {
        color: '#2457F5',
    },

    control: {
        position: 'absolute',
        width: 250,
        left: 'calc(50% - 125px)',
        bottom: -20,
        background: 'linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);',
    },
}))

const HiringForm = () => {
    const { t } = useTranslation('common')
    const { classes, theme } = useStyles()
    const [opened, setOpened] = useState(false)
    const router = useRouter()
    const [selectedFile, setSelectedFile] = useState(null)
    const openRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const onDrop = (acceptedFiles) => {
        // Update the selectedFile state with the accepted file
        setSelectedFile(acceptedFiles[0])
    }

    async function handleOnSubmit(e) {
        e.preventDefault()
        console.log(e.currentTarget.elements)
        const formData = new FormData()
        // Append the selected file to the FormData object
        formData.append('file', selectedFile)
        formData.append('firstName', e.currentTarget.elements.firstName.value)
        formData.append('lastName', e.currentTarget.elements.lastName.value)
        formData.append('phone', e.currentTarget.elements.phone.value)
        formData.append('email', e.currentTarget.elements.email.value)
        formData.append('message', e.currentTarget.elements.message.value)
        // Array.from(e.currentTarget.elements).forEach((field) => {
        // 	if (!field.name) return;
        // 	formData.append(field.name, field.value);
        // });

        // Affiche les valeurs
        for (var value of formData.values()) {
            console.log(value)
        }

        const res = await fetch('/api/hiring', {
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
                when: 'beforeChildren',
            }}
            ref={ref}
        >
            <Form
                method='post'
                onSubmit={handleOnSubmit}
            >
                <FormLayout>
                    <TextContentContainer>
                        <TextContent>
                            <h1>{t('joinUsText')}</h1>
                        </TextContent>
                        <FormColumn>
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
                                        borderColor: '#2457F5',
                                        '&:focus': {
                                            borderColor: '#2457F5',
                                        },
                                    },
                                }}
                                // {...form.getInputProps("email")}
                            />

                            <Group
                                position='left'
                                spacing='xl'
                            >
                                <TextInput
                                    required
                                    label={t('firstName')}
                                    placeholder={t('firstName')}
                                    type='text'
                                    radius='lg'
                                    size='lg'
                                    name='firstName'
                                    // {...form.getInputProps("firstName")}
                                    icon={<IconUser color='#2457F5' />}
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
                                    radius='lg'
                                    size='lg'
                                    icon={<IconUser color='#2457F5' />}
                                    name='lastName'
                                    // {...form.getInputProps("lastName")}
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
                                label={t('phone')}
                                placeholder='01 23 45 67 89'
                                type='tel'
                                radius='lg'
                                size='lg'
                                icon={<IconPhone color='#2457F5' />}
                                name='phone'
                                // {...form.getInputProps("phone")}
                                styles={{
                                    defaultVariant: {
                                        borderColor: '#2457F5',
                                        '&:focus': {
                                            borderColor: '#2457F5',
                                        },
                                    },
                                }}
                            />
                            <Textarea
                                placeholder={t('your_message')}
                                label={t('your_message')}
                                name='message'
                                withAsterisk
                                size='xl'
                                radius='lg'
                            />
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
                                size='lg'
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
                        </FormColumn>
                    </TextContentContainer>
                    <FormColumn>
                        <div className={classes.wrapper}>
                            <Dropzone
                                openRef={openRef}
                                onDrop={onDrop}
                                onReject={(files) =>
                                    console.log('rejected files', files)
                                }
                                className={classes.dropzone}
                                radius='md'
                                name='file'
                                multiple={false}
                                accept={[MIME_TYPES.pdf]}
                                maxSize={30 * 1024 ** 2}
                            >
                                <div style={{ pointerEvents: 'none' }}>
                                    <Group position='center'>
                                        <Dropzone.Accept>
                                            <IconDownload
                                                size={50}
                                                color='#4364F7'
                                                stroke={1.5}
                                            />
                                        </Dropzone.Accept>
                                        <Dropzone.Reject>
                                            <IconX
                                                size={50}
                                                color={theme.colors.red[6]}
                                                stroke={1.5}
                                            />
                                        </Dropzone.Reject>
                                        <Dropzone.Idle>
                                            <IconCloudUpload
                                                size={50}
                                                color='#4364F7'
                                                stroke={1.5}
                                            />
                                        </Dropzone.Idle>
                                    </Group>

                                    <Text
                                        align='center'
                                        weight={700}
                                        size='lg'
                                        mt='xl'
                                    >
                                        <Dropzone.Accept>
                                            Drop files here
                                        </Dropzone.Accept>
                                        <Dropzone.Reject>
                                            Pdf file less than 30mb
                                        </Dropzone.Reject>
                                        <Dropzone.Idle>
                                            Upload resume
                                        </Dropzone.Idle>
                                    </Text>

                                    {selectedFile ? (
                                        <Text
                                            align='center'
                                            size='sm'
                                            mt='xs'
                                            color='dimmed'
                                        >
                                            {selectedFile.name}
                                        </Text>
                                    ) : (
                                        <Text
                                            align='center'
                                            size='sm'
                                            mt='xs'
                                            color='dimmed'
                                        >
                                            Drag & apos;n&apos;drop files here
                                            to upload. We can accept only{' '}
                                            <i>.pdf</i> files that are less than
                                            30mb in size.
                                        </Text>
                                    )}
                                </div>
                            </Dropzone>

                            <Button
                                className={classes.control}
                                size='md'
                                radius='xl'
                                onClick={() => openRef.current?.()}
                            >
                                Select files
                            </Button>
                        </div>
                    </FormColumn>
                </FormLayout>
                <GradientButton
                    type='submit'
                    size='lg'
                    width='300px'
                    gradientColor='linear-gradient(92.29deg, #4364F7 0.66%, #1B1464 96.93%);'
                    onClick={() => setOpened(true)}
                >
                    {t('send')}
                </GradientButton>
            </Form>
        </ContactFormContainer>
    )
}

export default HiringForm

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
    flex-flow: column;
    gap: 2rem;
    padding: 2rem;
    margin-top: 2rem;

    @media screen and (min-width: 1200px) {
        gap: 3rem;
        padding: 5rem;
    }
`

const FormLayout = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    gap: 2rem;
    @media screen and (min-width: 1200px) {
        flex-flow: row;
        justify-content: stretch;
        gap: 3rem;
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
            font-size: 25px;
            line-height: 38px;
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

const FormColumn = styled.div`
    display: flex;
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
