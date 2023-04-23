import Image from 'next/image'
import servicesBanner from '../../images/services_banner.png'
import styled from 'styled-components'

import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

import { UnderlinedButton } from '../homepage/HeroHomePage'

import comptable from '../../images/comptable.svg'
import embauche from '../../images/embauche.svg'
import fiscal from '../../images/fiscal.svg'
import papier from '../../images/papier.svg'
import audit from '../../images/audit.svg'
import teamwork from '../../images/teamwork.svg'
import fiscaliteFR from '../../images/fiscalite_francaise.svg'
import fiscaliteUS from '../../images/fiscalite_us.svg'
import { IconArrowRight } from '@tabler/icons'

const ServicesGridLayout = () => {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [])

    return (
        <ServicesGridLayoutWrapper>
            <ServicesGridLayoutContainer>
                <ServicesCardContainer>
                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={comptable}
                                alt='comptable_dedie'
                            />
                            <div className='card_text-content'>
                                {t('comptable_dedie')}
                            </div>
                        </ServicesCard>

                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>

                        <UnderlinedButton href='/services/accounting-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={papier}
                                alt='administrativeServices'
                            />
                            <div className='card_text-content'>
                                {t('administrativeServices')}
                            </div>
                        </ServicesCard>
                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/services/administrative-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={teamwork}
                                alt='conseilJuridique'
                            />
                            <div className='card_text-content'>
                                {t('conseilJuridique')}
                            </div>
                        </ServicesCard>

                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/services/legal-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={embauche}
                                alt='expertiseRH'
                            />
                            <div className='card_text-content'>
                                {t('expertiseRH')}
                            </div>
                        </ServicesCard>

                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/services/payroll-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={fiscal}
                                alt='conseillerFiscal'
                            />
                            <div className='card_text-content'>
                                {t('conseillerFiscal')}
                            </div>
                        </ServicesCard>
                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/services/tax-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent>
                        <ServicesCard>
                            <Image
                                src={audit}
                                alt='auditServices'
                            />
                            <div className='card_text-content'>
                                {t('auditServices')}
                            </div>
                        </ServicesCard>
                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/services/audit-services'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent>

                    <TextContent2>
                        <ServicesCard>
                            <Image
                                src={fiscaliteFR}
                                alt='conseillerFiscal'
                            />
                            <div className='card_text-content'>
                                {t('frenchTax')}
                            </div>
                        </ServicesCard>
                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/french-tax'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent2>

                    <TextContent2>
                        <ServicesCard>
                            <Image
                                src={fiscaliteUS}
                                alt='conseillerFiscal'
                            />
                            <div className='card_text-content'>
                                {t('usTax')}
                            </div>
                        </ServicesCard>
                        <p>
                            <b>{t('servicesCard1_title')}</b>
                            <br />
                            {t('servicesCard1_subtitle')}
                        </p>
                        <UnderlinedButton href='/us-tax'>
                            {t('seeMore')} <IconArrowRight size={12} />
                        </UnderlinedButton>
                    </TextContent2>
                    <BackgroundBlurPink />
                    <BackgroundBlurBlue />
                </ServicesCardContainer>
            </ServicesGridLayoutContainer>
        </ServicesGridLayoutWrapper>
    )
}

export default ServicesGridLayout

const ServicesGridLayoutWrapper = styled.div`
    position: relative;
`

const ServicesGridLayoutContainer = styled.div`
    min-height: 894.25px;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }

    @media screen and (min-width: 1200px) {
        margin-top: -60px;
    }
`

const ServicesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-gap: 3rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const ServicesCard = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 37px;
    gap: 10px;

    width: 310px;
    height: 147.76px;

    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.07);
    border-radius: 10px;

    .card_text-content {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.08em;
        color: #1b1464;
    }
`
const BackgroundBlurBlue = styled.div`
    position: absolute;
    top: 60%;
    right: 0;
    width: 230.03px;
    height: 230.03px;

    background: rgba(6, 87, 207, 0.3);
    filter: blur(175px);
`
const BackgroundBlurPink = styled(BackgroundBlurBlue)`
    top: 30%;
    left: 0;
    background: rgba(138, 50, 250, 0.3);
`
const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
        font-family: 'Gilroy';
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;

        color: #1b1464;
    }
`
const TextContent2 = styled(TextContent)`
    transform: translateX(50%);

    @media screen and (max-width: 1200px) {
        transform: translateX(0);
    }
`
