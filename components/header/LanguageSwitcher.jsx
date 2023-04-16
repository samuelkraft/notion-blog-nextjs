import styled from 'styled-components'
import France from '../../images/flag-france.svg'

import { IconChevronDown } from '@tabler/icons'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import usa from '../../images/usa.svg'
import en from '../../images/en.svg'

const LanguageSwitcher = () => {
    const router = useRouter()
    return (
        <Link
            href='/'
            locale={router.locale === 'fr' ? 'en' : 'fr'}
        >
            <LanguageSwitcherStyles>
                <Image
                    src={router.locale === 'fr' ? France : en}
                    alt='language'
                    width={'12px'}
                    height={'12px'}
                />
                {router.locale === 'fr' ? 'FR' : 'ENG'}

                <IconChevronDown
                    strokeWidth={2}
                    color={'black'}
                    size={'16px'}
                />
            </LanguageSwitcherStyles>
        </Link>
    )
}

export default LanguageSwitcher

const LanguageSwitcherStyles = styled.div`
    display: flex;
    font-family: 'Gilroy', sans-serif;
    font-weight: 500;
    line-height: 1.5;
    color: black;
    gap: 5px;
    padding: 0.5rem 1rem;
    align-items: center;
    font-size: 16px;
`
