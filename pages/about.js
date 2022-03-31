import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"

function About({ blogPosts }) {
    
  return (
    <div class="flex flex-col min-h-screen ">
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>

    <div class="flex-grow">
      <Navbar/>
      
      <main className={styles.container}>
      <div class="w-4/5 mx-auto mt-32 ">
            

            <div >
            <h2 class="text-2xl font-bold text-left mb-6">About</h2>
            <h2 class="text-md text-left mb-3">Hey, this page is still being worked on! In the meantime, feel free to reach out :) </h2>
            </div>
            

            <div class="mt-6" >
                    <a href="contact" class="inline-block text-m px-4 py-2 leading-none border rounded-full text-white bg-black border-black hover:border-stone-400 hover:text-stone-400 hover:bg-white mt-4 sm:mt-0">contact me</a>
                </div>

                </div>
          
                    
            </main>
            </div>
            <Footer/>

    </div>
  );
}


export default About