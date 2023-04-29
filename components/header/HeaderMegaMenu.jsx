import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    Container,
} from '@mantine/core'

import { useDisclosure } from '@mantine/hooks'
import {
    IconCoin,
    IconChevronDown,
    IconArticle,
    IconUsers,
    IconMathSymbols,
    IconScale,
    IconPigMoney,
    IconEye,
    IconCoinEuro,
} from '@tabler/icons'

import { useTranslation } from 'next-i18next'
import Logo from '../../images/Logo_Expand_CPA_horizontal.svg'
import Image from 'next/image'
import Link from 'next/link'

import LanguageSwitcher from './LanguageSwitcher'
import i18nextConfig from '../../next-i18next.config'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const useStyles = createStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: 20,
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.09)',

        '@media screen and (max-width: 768px)': {
            padding: '0.75rem',
        },

        '@media screen and (min-width: 1024px)': {
            padding: '0rem 1%',
        },
    },

    inner: {
        display: 'flex',
        maxWidth: '1200px',
        alignItems: 'center',
        fontFamily: "'Gilroy', sans-serif",
        fontSize: '12px',
        padding: '0',
    },

    linkswrapper: {
        marginLeft: '5rem',
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        cursor: 'pointer',
        fontFamily: "'Gilroy', sans-serif",
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
        fontSize: '16px',
        fontWeight: 500,
    },

    hiring: {
        display: 'none',

        '@media screen and (min-width: 1500px)': {
            fontSize: theme.fontSizes.xl,
            display: 'block',
            lineHeight: 1,
            padding: '8px 12px',
            borderRadius: theme.radius.sm,
            textDecoration: 'none',
            cursor: 'pointer',
            fontFamily: "'Gilroy', sans-serif",
            color:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[0]
                    : theme.colors.gray[9],
            fontWeight: 500,
        },
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,
        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
        }),
    },

    subLinkText: {
        fontFamily: "'Gilroy', sans-serif",
        color: theme.colors.dark,
        fontSize: theme.fontSizes.md,
        fontWeight: 500,
    },

    dropdownFooter: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('lg')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('lg')]: {
            display: 'none',
        },
    },

    mainLinkActive: {
        borderBottom: '2px solid #0657CF',
    },

    subLinkActive: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
    },

    contactUsBtn: {
        background:
            'linear-gradient(78.06deg, #1B1464 -48.75%, #0657CF 96.72%)',
        borderRadius: '60px',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '16px',
    },
}))

export default function HeaderMegaMenu() {
    const router = useRouter()
    const currentLocale =
        router.query.locale || i18nextConfig.i18n.defaultLocale
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const { classes, theme, cx } = useStyles()
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const handlePreventRefreshOnSameLink = (e, href) => {
        if (router.asPath === href) {
            e.preventDefault()
        }
    }

    const businessServices = [
        {
            icon: IconArticle,
            title: t('administrativeServices'),
            href: '/services/administrative-services',
            color: '#7B42F6',
        },
        {
            icon: IconUsers,
            title: t('payrollServices'),
            href: '/services/payroll-services',
            color: '#1B1464',
        },
        {
            icon: IconMathSymbols,
            title: t('accountingServices'),
            href: '/services/accounting-services',
            color: '#2457F5',
        },
        {
            icon: IconScale,
            title: t('legalServices'),
            href: '/services/legal-services',
            color: '#EAB652',
        },
        {
            icon: IconPigMoney,
            title: t('taxServices'),
            href: '/services/tax-services',
            color: '#FF630B',
        },
        {
            icon: IconEye,
            title: t('auditServices'),
            href: '/services/audit-services',
            color: '#3DF29B',
        },
    ]
    const privateTaxServices = [
        {
            icon: IconCoinEuro,
            title: t('frenchTax'),
            href: '/french-tax',
            color: '#0657CF',
        },
        {
            icon: IconCoin,
            title: t('usTax'),
            href: '/usa-tax',
            color: '#002495',
        },
    ]

    const businessLinks = businessServices.map((item) => (
        <UnstyledButton
            className={cx(classes.subLink, {
                [classes.subLinkActive]: router.pathname === item.href,
            })}
            key={item.title}
        >
            <Link
                href={item.href}
                className={classes.subLinkText}
                locale={router.locale}
                onClick={(e) => {
                    handlePreventRefreshOnSameLink(e, item.href)
                    closeDrawer()
                }}
            >
                <Group
                    noWrap
                    align='center'
                >
                    <ThemeIcon
                        size={34}
                        variant='default'
                        radius='md'
                    >
                        <item.icon
                            size={22}
                            color={item.color}
                        />
                    </ThemeIcon>
                    <Text
                        size='md'
                        weight={500}
                        style={{
                            fontFamily: "'Gilroy',sans-serif",
                            fontWeight: 500,
                        }}
                    >
                        {item.title}
                    </Text>
                </Group>
            </Link>
        </UnstyledButton>
    ))

    const privateTaxLinks = privateTaxServices.map((item) => (
        <UnstyledButton
            className={cx(classes.subLink, {
                [classes.subLinkActive]: router.pathname === item.href,
            })}
            key={item.title}
        >
            <Link
                href={item.href}
                className={classes.subLinkText}
                locale={router.locale}
                onClick={(e) => {
                    handlePreventRefreshOnSameLink(e, item.href)
                    closeDrawer()
                }}
            >
                <Group
                    noWrap
                    align='center'
                >
                    <ThemeIcon
                        size={34}
                        variant='default'
                        radius='md'
                    >
                        <item.icon
                            size={22}
                            color={item.color}
                        />
                    </ThemeIcon>
                    <Text
                        size='md'
                        weight={500}
                        style={{
                            fontFamily: "'Gilroy',sans-serif",
                            fontWeight: 500,
                        }}
                    >
                        {item.title}
                    </Text>
                </Group>
            </Link>
        </UnstyledButton>
    ))

    return (
        <Box mb={120}>
            <Header
                height={120}
                className={classes.root}
                fixed
            >
                <Container
                    fluid
                    className={classes.hiddenDesktop}
                >
                    <Group position='apart'>
                        <Link
                            href='/'
                            locale={router.locale}
                            onClick={(e) =>
                                handlePreventRefreshOnSameLink(e, '/')
                            }
                        >
                            <Image
                                src={Logo}
                                width='150'
                                height='100'
                                priority
                                alt='Expand CPA LOGO'
                            />
                        </Link>
                        <Group>
                            <LanguageSwitcher />
                            <Burger
                                opened={drawerOpened}
                                onClick={toggleDrawer}
                                className={classes.hiddenDesktop}
                                size='md'
                            />
                        </Group>
                    </Group>
                </Container>

                <Container
                    className={classes.inner}
                    fluid
                >
                    <Group sx={{ height: '100%' }}>
                        <Link
                            href='/'
                            locale={router.locale}
                            onClick={(e) =>
                                handlePreventRefreshOnSameLink(e, '/')
                            }
                            className={classes.hiddenMobile}
                        >
                            <Image
                                src={Logo}
                                width='150'
                                height='100'
                                priority
                                alt='Expand CPA LOGO'
                            />
                        </Link>

                        <Container fluid>
                            <Group
                                sx={{ height: '100%' }}
                                spacing={10}
                                className={classes.hiddenMobile}
                            >
                                <Link
                                    href='/about'
                                    className={cx(classes.link, {
                                        [classes.mainLinkActive]:
                                            router.pathname === '/about',
                                    })}
                                    locale={router.locale}
                                    onClick={(e) =>
                                        handlePreventRefreshOnSameLink(
                                            e,
                                            '/about/'
                                        )
                                    }
                                >
                                    {t('cabinet')}
                                </Link>
                                <HoverCard
                                    width={600}
                                    position='bottom'
                                    radius='md'
                                    shadow='md'
                                    withinPortal
                                >
                                    <HoverCard.Target>
                                        <Link
                                            href='/services'
                                            className={cx(classes.link, {
                                                [classes.mainLinkActive]:
                                                    router.pathname.includes(
                                                        '/services'
                                                    ),
                                            })}
                                            locale={router.locale}
                                            onClick={(e) =>
                                                handlePreventRefreshOnSameLink(
                                                    e,
                                                    '/services/'
                                                )
                                            }
                                        >
                                            <Center inline>
                                                <Box
                                                    component='span'
                                                    mr={5}
                                                >
                                                    {t('business')}
                                                </Box>
                                                <IconChevronDown
                                                    size={16}
                                                    color={theme.fn.primaryColor()}
                                                />
                                            </Center>
                                        </Link>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown
                                        sx={{ overflow: 'hidden' }}
                                    >
                                        <Group
                                            position='apart'
                                            px='md'
                                        >
                                            <Text
                                                weight={500}
                                                style={{
                                                    fontFamily:
                                                        "'Gilroy',sans-serif",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {t('business')}
                                            </Text>
                                            <Link
                                                locale={router.locale}
                                                href='/services'
                                                size='xs'
                                                style={{
                                                    fontFamily:
                                                        "'Gilroy',sans-serif",
                                                    color: theme.colors.blue[6],
                                                }}
                                                onClick={(e) =>
                                                    handlePreventRefreshOnSameLink(
                                                        e,
                                                        '/services/'
                                                    )
                                                }
                                            >
                                                View all
                                            </Link>
                                        </Group>

                                        <Divider
                                            my='sm'
                                            mx='-md'
                                            color={
                                                theme.colorScheme === 'dark'
                                                    ? 'dark.5'
                                                    : 'gray.1'
                                            }
                                        />

                                        <SimpleGrid
                                            cols={2}
                                            spacing={0}
                                        >
                                            {businessLinks}
                                        </SimpleGrid>

                                        <div className={classes.dropdownFooter}>
                                            <Group position='apart'>
                                                <div>
                                                    <Text
                                                        weight={500}
                                                        size='sm'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {t('contactUs')}
                                                    </Text>
                                                    <Text
                                                        size='xs'
                                                        color='dimmed'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                        }}
                                                    >
                                                        {t('contactUsText')}
                                                    </Text>
                                                </div>
                                                <Link
                                                    href='/#contact'
                                                    onClick={(e) =>
                                                        handlePreventRefreshOnSameLink(
                                                            e,
                                                            '/#contact'
                                                        )
                                                    }
                                                    locale={router.locale}
                                                >
                                                    <Button
                                                        variant='default'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {t('contact')}
                                                    </Button>
                                                </Link>
                                            </Group>
                                        </div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                                <HoverCard
                                    width={600}
                                    position='bottom'
                                    radius='md'
                                    shadow='md'
                                    withinPortal
                                >
                                    <HoverCard.Target>
                                        <Text
                                            className={cx(classes.link, {
                                                [classes.mainLinkActive]:
                                                    router.asPath.includes(
                                                        '-tax'
                                                    ),
                                            })}
                                        >
                                            <Center inline>
                                                <Box
                                                    component='span'
                                                    mr={5}
                                                >
                                                    {t('tax')}
                                                </Box>
                                                <IconChevronDown
                                                    size={16}
                                                    color={theme.fn.primaryColor()}
                                                />
                                            </Center>
                                        </Text>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown
                                        sx={{ overflow: 'hidden' }}
                                    >
                                        <Group
                                            position='apart'
                                            px='md'
                                        >
                                            <Text
                                                weight={500}
                                                style={{
                                                    fontFamily:
                                                        "'Gilroy',sans-serif",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {t('tax')}
                                            </Text>
                                        </Group>

                                        <Divider
                                            my='sm'
                                            mx='-md'
                                            color={
                                                theme.colorScheme === 'dark'
                                                    ? 'dark.5'
                                                    : 'gray.1'
                                            }
                                        />

                                        <SimpleGrid
                                            cols={2}
                                            spacing={0}
                                        >
                                            {privateTaxLinks}
                                        </SimpleGrid>

                                        <div className={classes.dropdownFooter}>
                                            <Group position='apart'>
                                                <div>
                                                    <Text
                                                        weight={500}
                                                        size='sm'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {t('contactUs')}
                                                    </Text>
                                                    <Text
                                                        size='xs'
                                                        color='dimmed'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                        }}
                                                    >
                                                        {t('contactUsText')}
                                                    </Text>
                                                </div>
                                                <Link
                                                    href='/#contact'
                                                    onClick={(e) =>
                                                        handlePreventRefreshOnSameLink(
                                                            e,
                                                            '/#contact'
                                                        )
                                                    }
                                                    locale={router.locale}
                                                >
                                                    <Button
                                                        variant='default'
                                                        style={{
                                                            fontFamily:
                                                                "'Gilroy',sans-serif",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {t('contact')}
                                                    </Button>
                                                </Link>
                                            </Group>
                                        </div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                                <Link
                                    href='/blog'
                                    className={cx(classes.link, {
                                        [classes.mainLinkActive]:
                                            router.pathname === '/blog',
                                    })}
                                    locale={router.locale}
                                    onClick={(e) =>
                                        handlePreventRefreshOnSameLink(
                                            e,
                                            '/blog/'
                                        )
                                    }
                                >
                                    {t('blog')}
                                </Link>
                                <Link
                                    href='/#contact'
                                    className={cx(classes.contactUsBtn, {
                                        [classes.mainLinkActive]:
                                            router.asPath === '/#contact',
                                    })}
                                    locale={router.locale}
                                    onClick={(e) =>
                                        handlePreventRefreshOnSameLink(
                                            e,
                                            '/#contact'
                                        )
                                    }
                                >
                                    {t('contactUs')}
                                </Link>
                                <Group className={classes.hiddenMobile}>
                                    <LanguageSwitcher />
                                </Group>
                            </Group>
                        </Container>
                    </Group>
                </Container>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size='100%'
                padding='md'
                title={
                    <Group
                        className={classes.hiddenDesktop}
                        onClick={closeDrawer}
                        position='apart'
                        spacing={10}
                    >
                        <Link
                            href='/'
                            locale={router.locale}
                            onClick={(e) =>
                                handlePreventRefreshOnSameLink(e, '/')
                            }
                        >
                            <Image
                                src={Logo}
                                width='150'
                                height='100'
                                priority
                                alt='Expand CPA LOGO'
                            />
                        </Link>
                        <LanguageSwitcher />
                    </Group>
                }
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea
                    sx={{ height: 'calc(100vh - 60px)' }}
                    mx='-md'
                >
                    <Divider
                        my='sm'
                        color={
                            theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'
                        }
                    />

                    <Link
                        href='/about'
                        className={classes.link}
                        onClick={(e) => {
                            handlePreventRefreshOnSameLink(e, '/about/')
                            closeDrawer()
                        }}
                        locale={router.locale}
                    >
                        {t('cabinet')}
                    </Link>
                    <UnstyledButton
                        className={classes.link}
                        onClick={toggleLinks}
                    >
                        <Center inline>
                            <Box
                                component='span'
                                mr={5}
                            >
                                {t('business')}
                            </Box>
                            <IconChevronDown
                                size={16}
                                color={theme.fn.primaryColor()}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{businessLinks}</Collapse>

                    <UnstyledButton
                        className={classes.link}
                        onClick={toggleLinks}
                    >
                        <Center inline>
                            <Box
                                component='span'
                                mr={5}
                            >
                                {t('tax')}
                            </Box>
                            <IconChevronDown
                                size={16}
                                color={theme.fn.primaryColor()}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{privateTaxLinks}</Collapse>
                    <Link
                        href='/blog'
                        className={classes.link}
                        onClick={(e) => {
                            handlePreventRefreshOnSameLink(e, '/blog/')
                            closeDrawer()
                        }}
                        locale={router.locale}
                    >
                        {t('blog')}
                    </Link>
                    <Link
                        href='/#contact'
                        className={classes.link}
                        onClick={(e) => {
                            handlePreventRefreshOnSameLink(e, '/#contact')
                            closeDrawer()
                        }}
                        locale={router.locale}
                    >
                        {t('contact')}
                    </Link>

                    <Link
                        href='/hiring'
                        className={classes.link}
                        onClick={(e) => {
                            handlePreventRefreshOnSameLink(e, '/hiring/')
                            closeDrawer()
                        }}
                        locale={router.locale}
                    >
                        {t('recrutement')}
                    </Link>

                    <Divider
                        my='sm'
                        color={
                            theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'
                        }
                    />
                    <BackgroundGradient />
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

const BackgroundGradient = styled.div`
    background: linear-gradient(92.29deg, #4364f7 0.66%, #1b1464 96.93%);
    border-radius: 84.5491px 0px 0px 0px;
    height: 30vh;
    margin-top: 15rem;
`
