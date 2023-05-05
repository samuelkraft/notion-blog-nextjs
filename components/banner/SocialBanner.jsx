import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import fb from '../../images/fb_blue.svg'
import instagram from '../../images/ig_blue.svg'
import twitter from '../../images/twitter_blue.svg'
import { useEffect } from 'react'

const SocialBanner = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])
    return (
        <SocialBannerContainer>
            <h1>{t('followUs')}</h1>
            <div className='social-icon'>
                <Image
                    src={fb}
                    alt='linkedin'
                    width={50}
                    height={50}
                />

                <Image
                    src={twitter}
                    alt='whatsapp'
                    width={50}
                    height={50}
                />
                <Image
                    src={instagram}
                    alt='instagram'
                    width={50}
                    height={50}
                />
            </div>
        </SocialBannerContainer>
    )
}

export default SocialBanner

const SocialBannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 4rem 0;
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 36px;
        /* identical to box height, or 138% */

        text-align: center;
        letter-spacing: 0.327px;

        color: #1b1464;

        @media screen and (min-width: 1024px) {
            font-size: 35px;
            line-height: 55px;
        }

        @media screen and (max-width: 768px) {
            font-size: 25px;
            line-height: 36px;
        }
    }

    .social-icon {
        display: flex;
        gap: 10px;
    }
`
