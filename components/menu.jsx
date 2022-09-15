import styles from "../pages/menu.module.css";
import Link from "next/link";
import { memo } from "react";

const Menu = memo(() => {

    return( 
    <>
        <ul className={styles.ul}>
            <li>
                <Link href="/">
                    <a>TOP</a>
                </Link>
            </li>
            <li>
                <Link href="/category">
                    <a>カテゴリ別</a>
                </Link>
            </li>
            <li>
                <Link href="/category">
                    <a>リンク</a>
                </Link>
            </li>
            <li>
                <Link href="/aboutOwner">
                    <a>筆者紹介</a>
                </Link>
            </li>
            
            
            
            
        </ul>
    
    
    
    </>


)})
export default Menu