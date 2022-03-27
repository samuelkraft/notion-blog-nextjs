import { useState } from "react";
function Navbar() {

    const [isExpanded, setIsExpanded] = useState(false);
    
    function handleToggle(){
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    }
    return (
        <div >
            <div className="fixed top-0 z-10 bg-white w-full border-b border-[#EDEDED]">
            <nav class=" flex w-4/5 mx-auto items-center text-center justify-between inline-block align-middle flex-wrap py-5 ">
                <div class="flex items-center flex-shrink-0 text-black mr-6">
                    <a href="" class="font-bold text-2xl tracking-tight">ayush shah</a>
                </div>
                <div   class="block sm:hidden">
                    <button onClick={handleToggle} id='boton'  class=" flex items-center px-3 py-2 border rounded-full bg-black text-white border-black hover:text-black hover:border-black hover:bg-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div id='menu' class={ (isExpanded? "" : "hidden") + " text-right w-full block flex-grow sm:flex sm:items-center sm:w-auto"  }>
                    <div class="text-md sm:flex-grow">
                        <a href="#responsive-header" class="block mt-4 text-right sm:inline-block sm:mt-0 text-black hover:text-stone-400 sm:mr-10">
                    blog
                        </a>
                        <a href="#responsive-header" class="block mt-4  sm:inline-block sm:mt-0 text-black hover:text-stone-400 sm:mr-10">
                    about
                        </a>
                    </div>
                    <div>
                        <a href="#" class="inline-block text-m px-4 py-2 leading-none border rounded-full text-white bg-black border-black hover:border-stone-400 hover:text-stone-400 hover:bg-white mt-4 sm:mt-0">contact</a>
                    </div>
                </div>
                
            </nav>
            </div>
        </div>
    )
  }

 
  
  export default Navbar