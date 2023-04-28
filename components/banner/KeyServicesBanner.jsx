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
        </KeyServicesWrapper>
    )
}

export default KeyServicesBanner

const KeyServicesWrapper = styled.div`
    min-height: 100vh;
`

const KeyServicesHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
