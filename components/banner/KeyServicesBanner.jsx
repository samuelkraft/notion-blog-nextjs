import styled from 'styled-components'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const KeyServicesBanner = ({ icon, textContent }) => {
    const { t } = useTranslation('common')
    return (
        <KeyServicesWrapper>
            <KeyServicesHeader>
                <Image
                    src={icon}
                    alt='icon service'
                    width={65}
                    height={65}
                />

                <h3>{t('keyServices')}</h3>
            </KeyServicesHeader>

            <KeyServices>{textContent}</KeyServices>
        </KeyServicesWrapper>
    )
}

export default KeyServicesBanner

const KeyServicesWrapper = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

const KeyServicesHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 56px;
        /* identical to box height, or 140% */

        letter-spacing: 0.327px;

        color: #1b1464;

        @media screen and (max-width: 768px) {
            font-size: 30px;
        }

        @media screen and (max-width: 480px) {
            font-size: 23px;
            line-height: 34px;
        }
    }
`
const KeyServices = styled.div`
    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-shadow: 4px 10px 16px rgba(0, 0, 0, 0.07);
    border-radius: 10px;

    display: flex;
    flex-flow: column;
    gap: 1rem;
    justify-content: center;
    padding: 3% 6%;

    min-width: 1200px;
`
