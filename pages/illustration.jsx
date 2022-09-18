import { memo } from "react";
import Menu from "../components/menu";
import ArticleImg from "../components/articleImg";
import styles from "./illustration.module.css";

const illustration = memo(() =>{

    return (
        <>
            <main className={styles.container}>
                <Menu/>
                <ArticleImg text={"こんにちは"} imgUrl={"/fight.png"} />
            </main>
        </>



    )


})
export default illustration