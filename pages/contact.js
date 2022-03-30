import Head from "next/head";
import Link from "next/link";

import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"
import { InlineWidget } from "react-calendly";

function Contact() {
  
  return (
    <div>
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>

      <Navbar/>

      <main className={styles.container}>
        <div class="w-4/5 mx-auto mt-32">
                
            <div>
            <h2 class="text-2xl font-bold text-left mb-6">Lets Connect!</h2>
            <h2 class="text-md text-left mb-6 ">You can always reach out on social media, send me an email, or book a time to chat below!</h2>
            </div>
            <div>
            <h2 class="text-md text-left ">Email: ayush110shah@gmail.com</h2>
            </div>
            </div>
           
            </main>

        
<div>
    <div class="calendly-inline-widget" data-url="https://calendly.com/ayush110/30min" style={{ minWidth: '320px', height:"630px" }}></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
   
    <iframe class="bg-white" src="https://calendly.com/ayush110/30min" color="white"width="100%" height="650" scrolling="no" frameborder="0"></iframe>
</div>
  


  );
}


export default Contact