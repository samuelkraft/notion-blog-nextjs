import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"
import { InlineWidget } from "react-calendly";
import Footer from "../components/Footer.js";
import instagram from "../public/instagram.svg";
import mail from "../public/mail.png";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import twitter from "../public/twitter.svg";

function Contact() {
  
  return (
    <div class="flex flex-col min-h-screen ">
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>
<div class="flex-grow">
      <Navbar/>

      <main className={styles.container}>
        <div class="w-4/5 mx-auto mt-32">
                
            <div>
            <h2 class="text-2xl font-bold text-left mb-6">Lets Connect!</h2>
            <h2 class="text-md text-left mb-6 ">You can always reach out on social media, send me an email, or book a time to chat below!</h2>
            </div>
            <div>
            
            
            <div class="flex flex-row">

    <div class="mr-3">
        <Link href="mailto: ayush110shah@gmail.com" target="_blank" rel="noopener noreferrer"><a ><Image src={mail}/></a></Link>
        </div> 
        <div class="mr-3">
        <Link href="https://www.linkedin.com/in/shah-ayush/" ><a target="_blank" rel="noopener noreferrer"><Image src={linkedin}/></a></Link>
        </div> 
        <div class="mr-3">
        <Link href="https://www.instagram.com/_ayushshah_/"><a target="_blank" rel="noopener noreferrer"><Image src={instagram} /></a></Link>
        </div> 
        <div class="mr-3">
        <Link href="https://github.com/ayush110"><a target="_blank" rel="noopener noreferrer"><Image src={github}/></a></Link>
            </div>
                
                </div>
            </div>
            </div>
           
            </main>

        
<div>
    <div class="calendly-inline-widget" data-url="https://calendly.com/ayush110/30min" style={{ minWidth: '320px', height:"700px" }}></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
   <Footer/>
   </div>
</div>
  


  );
}


export default Contact