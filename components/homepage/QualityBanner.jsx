import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import qualite from '../../images/qualite.svg'
import Image from 'next/image'
import { HeadingSection01 } from './HomeSection01'

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
            <BannerContainer>
                <Image
                    src={qualite}
                    width={93}
                    height={103}
                />
            </BannerContainer>

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

const BannerContainer = styled.div`
    position: absolute;
    top: -40px;
    left: 50;
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding: 20px 40px;
`

const HeadingBanner = styled(HeadingSection01)`
    margin-top: 4rem;
    h2 {
        color: #ffffff;

        width: 100%;

        @media screen and (min-width: 1024px) {
            width: 100%;
        }

        @media screen and (min-width: 1200px) {
            width: 100%;
        }
    }
`

export default QualityBanner
