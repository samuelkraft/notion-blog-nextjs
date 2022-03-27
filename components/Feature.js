
import Image from 'next/image';
import self from '../public/ayush-img.svg';
import backgroundImg from '../public/backgroundImg.png';
function Feature() {
    return (
        <div >
        
        <div class="my-12 mx-5 md:flex md:justify-center md:relative md:inline-block">
                
                <div class="hidden md:inline-block mt-24">
                <Image src={backgroundImg}/>
                </div>

              
              <div class="md:flex md:inline-block md:absolute justify-center  ">

                    <div class="text-center">
                    <Image src={self} />
                    </div>

                    <div class=" md:inline-block text-center md:text-left self-center mx-auto ">
                        <h1 class="text-4xl font-bold">hi, I'm Ayush</h1>
                        <h2 class="max-w-sm mt-4 mx-auto"> Lorem epsum grlfiflfjglafgjlkgdfjghdfghdkjghdfkghdkgdhkjgd gfghdskjghfdk ghdgj hkfghdkjghdkj ghdfkjg dh jkdh gjkdfgh dfkjg hdsfjghdsf</h2>
                        <a href="#about" class=" inline-block text-sm px-4 py-2 leading-none border rounded-full text-white bg-black border-black hover:border-stone-400 hover:text-stone-400 hover:bg-white mt-4 sm:mt-8">Find out more</a>
                    </div>

                </div>
            </div>
            
            
            
        </div>
            

        
    )
  }
  
  export default Feature