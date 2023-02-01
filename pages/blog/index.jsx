import { getDatabase } from '../../lib/notion'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import HeroBlogPage from '../../components/blog/HeroBlogPage'
import CategoryBlog from '../../components/blog/CategoryBlog'
import HeaderMegaMenu from '../../components/header/HeaderMegaMenu'
import Footer from '../../components/footer/Footer'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { pageAnimation } from '../../lib/animation'

const getStaticProps = async ({ locale }) => {
    const database = await getDatabase(databaseId)

    return {
        props: {
            posts: database,
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 60,
    }
}

export { getStaticProps }

export const databaseId = process.env.NOTION_DATABASE_ID

export default function Blog({ posts }) {
    const { t, i18n } = useTranslation('common', {
        bindI18n: 'languageChanged loaded',
    })

    const router = useRouter()
    console.log(posts)
    useEffect(() => {
        i18n.reloadResources(i18n.resolvedLanguage, ['common'])
    }, [router.locale])

    const categoryBusinessPosts = posts.filter(
        (post) =>
            post?.properties?.Tags?.select?.name === 'Comptabilité & Fiscalité'
    )
    const categoryLegalPosts = posts.filter(
        (post) => post?.properties?.Tags?.select?.name === 'Juridique'
    )
    const categoryTaxPosts = posts.filter(
        (post) => post?.properties?.Tags?.select?.name === 'CAT'
    )

    return (
        <>
            <Head>
                <title>{'Expand CPA - Blog'} </title>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='/site.webmanifest'
                />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta
                    name='msapplication-TileColor'
                    content='#da532c'
                />
                <meta
                    name='theme-color'
                    content='#ffffff'
                />
                <meta
                    property='og:image'
                    content='/api/og'
                />
                <meta
                    name='description'
                    content={
                        router.locale === 'fr'
                            ? 'Experts comptables français et américains établis en France. Nous sommes spécialisés dans le conseil et l’accompagnement d’entreprises étrangères et de résidents étrangers établis en France'
                            : 'French and American Chartered Accountants Based in France, At Expand CPA, our French CPAs specialize in advising and assisting international companies and citizens in France' ||
                              'Experts comptables français et américains établis en France. Nous sommes spécialisés dans le conseil et l’accompagnement d’entreprises étrangères et de résidents étrangers établis en France'
                    }
                />
            </Head>
            <motion.div
                variants={pageAnimation}
                initial='hidden'
                animate='show'
                exit='exit'
            >
                <HeaderMegaMenu />
                <HeroBlogPage posts={posts} />
                <CategoryBlog
                    posts={posts}
                    categoryBusinessPosts={categoryBusinessPosts}
                    categoryLegalPosts={categoryLegalPosts}
                    categoryTaxPosts={categoryTaxPosts}
                />
                <Footer />
            </motion.div>
        </>
    )
}
