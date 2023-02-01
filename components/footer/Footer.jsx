import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../../images/logo_Expand-CPA.svg'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons'
import { useEffect } from 'react'

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
                            src={Logo}
                            width={200}
                            height={150}
                            alt='logo'
                        />
                    </Link>
                    <div>
                        <p>{t('slogan')}</p>
                    </div>
                </div>
                <div className='column'>
                    <h2>{t('footerLinks')}</h2>
                    <div>
                        <Link
                            locale={router.locale}
                            href='/about'
                            onClick={(e) =>
                                handlePreventRefreshOnSameLink(e, '/about/')
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
                                handlePreventRefreshOnSameLink(e, '/services/')
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
                    <div>
                        <Link
                            locale={router.locale}
                            href='/blog'
                            onClick={(e) =>
                                handlePreventRefreshOnSameLink(e, '/blog/')
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
                                handlePreventRefreshOnSameLink(e, '/#contact')
                            }
                        >
                            <div className='links'>
                                <span>{t('contact')}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='column'>
                    <h2>{t('coordonnees')}</h2>
                    <a href='tel:01-86-96-37-01'>
                        <div className='links'>
                            <IconPhone size={28} />
                            <span>01 86 96 37 01 / 06 59 69 13 42</span>
                        </div>
                    </a>
                    <a href='mailto:contact@expand-cpa.com'>
                        <div className='links'>
                            <IconMail size={28} />
                            <span>contact@expand-cpa.com</span>
                        </div>
                    </a>

                    <div className='links'>
                        <IconMapPin size={28} />
                        <div className='column-location'>
                            <a
                                href='https://www.google.fr/maps/place/46+Rue+La+Fayette,+75009+Paris/@48.8747004,2.3380772,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e38cd18c2c1:0x7bab7dd24b147a47!8m2!3d48.8746969!4d2.3402659?hl=fr'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span>46 Rue La Fayette 75009 Paris</span>
                            </a>
                            <a
                                href='https://www.google.fr/maps/place/7+Rue+Th%C3%A9odule+Ribot,+75017+Paris/@48.8794754,2.3005712,19.25z/data=!4m5!3m4!1s0x47e66f957a5df687:0x9924b093569f6139!8m2!3d48.8793096!4d2.3008406?hl=fr'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span>7 Rue Theodule Ribot 75017 Paris</span>
                            </a>
                            <a
                                href='https://www.google.fr/maps/place/%D7%A7%D7%A0%D7%99%D7%95%D7%9F+%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C%D7%99,+Derech+Menachem+Begin+132,+Tel+Aviv-Yafo,+Isra%C3%ABl%E2%80%AD/@32.0743897,34.7899806,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b991302fe6f:0x7e4710b90ab7ab85!8m2!3d32.0743897!4d34.7921693?hl=fr'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span>Menahem Begin, 132 TEL AVIV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </FooterWrapper>
            <Copyright>
                <p>©2022 Expand-CPA All right reserved.</p>
            </Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 2rem;
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
    justify-content: space-between;
    color: #1b1464;

    .brand {
        width: 33%;
        p {
            font-family: 'AllRoundGothic-Demi';
            font-weight: 500;
            font-size: 1.2rem;
        }
        @media screen and (max-width: 767px) {
            width: 100%;
        }
    }

    h2 {
        font-family: 'AllRoundGothic-Demi';
        color: #1b1464;
        font-size: 36px;
        margin-bottom: 1.5rem;
    }

    a,
    a:visited,
    a::after {
        text-decoration: none;
        color: #1b1464;
        font-weight: 500;
        font-size: 1.2rem;
    }

    .links {
        display: flex;
        line-height: 1;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        font-size: 1.2rem;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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

const Copyright = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color: #1b1464;
`
export default Footer
