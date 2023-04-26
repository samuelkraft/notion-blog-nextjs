import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../../images/logo_Expand-CPA.svg'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons'
import { useEffect } from 'react'
import footerLogo from '../../images/footer_logo.svg'
import fb from '../../images/fb_footer.svg'
import ig from '../../images/instagram_footer.svg'
import twitter from '../../images/twitter_footer.svg'
import ordreExpCompta from '../../images/ordre_experts_comptable.svg'
import AICPA from '../../images/AICPA.svg'
import CNCC from '../../images/CNCC.svg'

const Footer = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    const router = useRouter()

    const handlePreventRefreshOnSameLink = (e, href) => {
        if (router.asPath === href) {
            e.preventDefault()
        }
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <div className='brand'>
                    <Link
                        locale={router.locale}
                        href='/'
                        onClick={(e) => handlePreventRefreshOnSameLink(e, '/')}
                    >
                        <Image
                            src={footerLogo}
                            width={200}
                            height={300}
                            alt='logo'
                        />
                    </Link>
                </div>
                <div className='layout-wrapper'>
                    <div className='layout'>
                        <div className='menu'>
                            <div className='column'>
                                <h2>MENU</h2>
                                <div>
                                    <Link
                                        locale={router.locale}
                                        href='/about'
                                        onClick={(e) =>
                                            handlePreventRefreshOnSameLink(
                                                e,
                                                '/about/'
                                            )
                                        }
                                    >
                                        <div className='links'>
                                            <span>{t('cabinet')}</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        locale={router.locale}
                                        href='/services'
                                        onClick={(e) =>
                                            handlePreventRefreshOnSameLink(
                                                e,
                                                '/services/'
                                            )
                                        }
                                    >
                                        <div className='links'>
                                            <span>{t('business')}</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        locale={router.locale}
                                        href='/french-tax'
                                        onClick={(e) =>
                                            handlePreventRefreshOnSameLink(
                                                e,
                                                '/french-tax/'
                                            )
                                        }
                                    >
                                        <div className='links'>
                                            <span>{t('tax')}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className='col-2'>
                                <div className='column'>
                                    <div>
                                        <Link
                                            locale={router.locale}
                                            href='/blog'
                                            onClick={(e) =>
                                                handlePreventRefreshOnSameLink(
                                                    e,
                                                    '/blog/'
                                                )
                                            }
                                        >
                                            <div className='links'>
                                                <span>{t('blog')}</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            locale={router.locale}
                                            href='/#contact'
                                            onClick={(e) =>
                                                handlePreventRefreshOnSameLink(
                                                    e,
                                                    '/#contact'
                                                )
                                            }
                                        >
                                            <div className='links'>
                                                <span>{t('contact')}</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            locale={router.locale}
                                            href='/hiring'
                                            onClick={(e) =>
                                                handlePreventRefreshOnSameLink(
                                                    e,
                                                    '/hiring'
                                                )
                                            }
                                        >
                                            <div className='links'>
                                                <span>{t('recrutement')}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='column'>
                                <h2>{t('coordonnees')}</h2>
                                <a href='tel:01-86-96-37-01'>
                                    <div className='links'>
                                        <span>
                                            01 86 96 37 01 - 06 59 69 13 42
                                        </span>
                                    </div>
                                </a>
                                <a href='mailto:contact@expand-cpa.com'>
                                    <div className='links'>
                                        <span>contact@expand-cpa.com</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Social />
                    <Copyright>
                        <div className='left'>
                            <Image src={fb} />
                            <Image src={ig} />
                            <Image src={twitter} />
                        </div>
                        <p>©2022 Expand-CPA All right reserved.</p>

                        <div className='right'>
                            <Image src={ordreExpCompta} />
                            <Image src={AICPA} />
                            <Image src={CNCC} />
                        </div>
                    </Copyright>
                </div>
            </FooterWrapper>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 2rem;
    background: linear-gradient(59.02deg, #4364f7 -82.13%, #1b1464 99.15%);
    @media screen and (min-width: 768px) {
        padding: 2rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 2rem 6%;
    }

    @media screen and (min-width: 1440px) {
        padding: 2rem 12%;
    }
    @media screen and (min-width: 1800px) {
        padding: 2rem 16%;
    }

    @media screen and (min-width: 2100px) {
        padding: 2rem 20%;
    }
    @media screen and (min-width: 2500px) {
        padding: 2rem 25%;
    }
`

const FooterWrapper = styled.div`
    display: flex;
    gap: 5rem;
    color: white;

    @media screen and (max-width: 768px) {
        gap: 2rem;
    }

    .brand {
        transform: translateY(-2.1rem);

        @media screen and (max-width: 768px) {
            transform: translateY(-4.1rem);
        }
    }

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
        /* identical to box height, or 178% */

        text-transform: uppercase;

        color: #ffffff;
    }

    a,
    a:visited,
    a::after {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        /* identical to box height, or 178% */

        color: rgba(255, 255, 255, 0.8);
    }

    .layout-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        transform: translateY(2rem);
        width: 80%;
    }

    .layout {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        @media screen and (max-width: 767px) {
            flex-flow: column;
            gap: 3rem;
        }
    }

    .menu {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;

        @media screen and (max-width: 767px) {
            width: 100%;
        }
    }

    .links {
        display: flex;
        line-height: 1;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        font-weight: 4 00;
        font-size: 1.2rem;
    }

    .col-2 {
        align-self: flex-end;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .column-location {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    @media screen and (max-width: 767px) {
        flex-flow: column;

        > div {
            margin-top: 2rem;
        }
    }
`

const Social = styled.div`
    display: flex;
    border-top: 1px solid white;
    justify-content: flex-end;
    align-items: end;
    align-content: flex-end;
`

const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 2rem;
    color: white;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */

    text-align: right;
    margin-top: -1rem;
    color: #ffffff;
    padding-bottom: 2rem;

    .left {
        display: flex;
        gap: 12px;

        @media screen and (max-width: 767px) {
            flex-flow: column;
            gap: 1rem;
        }
    }

    @media screen and (max-width: 767px) {
        /* flex-flow: column; */
        gap: 1rem;
    }

    .right {
        @media screen and (max-width: 767px) {
            flex-flow: column;
            gap: 1rem;
        }
    }
`
export default Footer
