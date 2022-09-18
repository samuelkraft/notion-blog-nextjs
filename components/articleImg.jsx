import Image from 'next/image'
import styles from "../pages/illustration.module.css";
import { memo } from "react";

const ArticleImg = memo((props) => {
const {text , imgUrl } = props

    return( 
    <>
    <article className={styles.article}>
                <div className={styles.text}>
                    <p >{text}</p>
                </div>
                <div className={styles.logo}>
                    <Image src={imgUrl} width={480} height={320} objectFit="contain" ></Image>
                </div>
    </article>
        
    </>)
})
export default ArticleImg