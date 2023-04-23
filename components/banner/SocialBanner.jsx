import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import linkedin from '../../images/linkedin.svg'
import instagram from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'
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
                    src={linkedin}
                    alt='linkedin'
                    width={50}
                    height={50}
                />
                <Image
                    src={instagram}
                    alt='instagram'
                    width={50}
                    height={50}
                />
                <Image
                    src={whatsapp}
                    alt='whatsapp'
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
        font-size: 40px;
        line-height: 55px;
        /* identical to box height, or 138% */

        text-align: center;
        letter-spacing: 0.327px;

        color: #1b1464;
    }

    .social-icon {
        display: flex;
        gap: 1rem;
    }
`
