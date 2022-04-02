import { useState } from "react";
import instagram from "../public/instagram.svg";
import mail from "../public/mail.png";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import twitter from "../public/twitter.svg";
import Link from "next/link";
import Image from 'next/image';
function Footer() {

    const [isExpanded, setIsExpanded] = useState(false);
    
    function handleToggle(){
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    }


    return (
    <footer class="static text-center lg:text-left bg-white text-black-300">
  <div class="flex flex-col md:flex-row justify-center items-center md:justify-between p-6 border-t">
    <div class="mr-12 hidden lg:block">
      <span class="text-xs">Designed and Developed by Ayush Shah</span>
    </div>
    <div class="flex justify-center">
    

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
    <div class="flex text-xs"> 
    <div class="mr-3 hover:text-stone-400">
    <Link href="/"><a>home</a></Link>
        </div>
        <div class="mr-3 text-stone-300">|</div>
        <div class="mr-3 hover:text-stone-400">
    <Link href="blog"><a>blog</a></Link>
        </div>
        <div class="mr-3 text-stone-300">|</div>
        <div class="mr-3 hover:text-stone-400">
    <Link href="about"><a>about</a></Link>
        </div>
        <div class="mr-3 text-stone-300">|</div>
        <div class="mr-3 hover:text-stone-400">
    <Link href="contact" ><a>contact</a></Link>
        </div>
    </div>
      
   
  </div>
 
  
</footer>
    )
  }

 
  
  export default Footer