import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import qualite from '../../images/qualite.svg'
import Image from 'next/image'
import { HeadingSection01 } from '../homepage/HomeSection01'

import { useEffect } from 'react'

const QualityBanner = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    return (
        <BannerLayout>
            <BadgeContainer>
                <Image
                    src={qualite}
                    fill
                />
            </BadgeContainer>
            <div className='text-content'>
                <HeadingBanner>
                    <h2>
                        {t('our')}
                        <b>{t('section01_bold3')}</b>
                        {t('section01_heading_pt5')}
                    </h2>
                </HeadingBanner>
            </div>
        </BannerLayout>
    )
}

const BadgeContainer = styled.div`
    position: absolute;
    top: -70px;
    left: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 140px;
`

const BannerLayout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #1b1464;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #ffffff;

    border-radius: 0px 0px 53px 0px;
    padding: 3rem;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

const HeadingBanner = styled(HeadingSection01)`
    margin-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        color: #ffffff;
    }
`

export default QualityBanner
