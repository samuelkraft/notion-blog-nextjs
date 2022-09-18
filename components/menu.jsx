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
                <Link href="/illustration">
                    <a>イラスト</a>
                </Link>
            </li>
            <li>
                <Link href="/linkPage">
                    <a>リンク</a>
                </Link>
            </li>
            
            
            
            
        </ul>
    
    
    
    </>


)})
export default Menu