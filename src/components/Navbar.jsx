import { useState } from "react";
import { motion} from 'framer-motion'; 
import { BsArrowUpRight} from "react-icons/bs";
import JoinUsForm from "./Forms/JoinUsForm";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  const[showHamburgerMenu,setShowHamburgerMenu]=useState(false);

  const [showJoinUsForm, setShowJoinUsForm] = useState(false);
  function onClose(){
    setShowJoinUsForm(false);
  }
  const scrolltoHome=()=>{
  
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrolltoabout=()=>{
  
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrolltoOurwork=()=>{
  
    const ourwork = document.getElementById('ourwork');
    if (ourwork) {
      ourwork.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
    <div className="h-20 navbarin fixed bg-white w-full z-[100] flex flex-row justify-between items-center px-32">
        <ul className="flex text-[#24387a] font-semibold  z-[100]  justify-start items-center gap-8">
          <Link to="/Home">
          <li onClick={scrolltoHome} className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Home</li>
          </Link>
          <Link to="/home">
          <li onClick={scrolltoabout} className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">About Us</li>
          </Link>
          <Link to="/home">
          <li onClick={scrolltoOurwork} className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Our Work</li>
          </Link>
          <Link to="/gallery">
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Gallery</li>
          </Link>
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer ">Contact Us</li>
        </ul>
        <div className="flex gap-2 items-center">
          <img className="h-12" src="./images/karwaanlogo.png" alt="" />
          <h1 className="text-2xl text-[#24387a] font-semibold ">Kaarwaa.N</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
    <input type="search" placeholder="search here.." className="opacity-0 cursor-default py-1 p-4 w-64 border-slate-200 border-2 rounded-full" />
       
      
      <button onClick={()=>setShowJoinUsForm(true)} className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">Join us<BsArrowUpRight/></button>
        
        {showJoinUsForm && 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
          >
         <JoinUsForm closeForm={onClose}/>
        </motion.div>
        
        }
      

        </div>
    </div>

    <div className="flex justify-between fixed w-full p-1 z-[100] bg-white navbar2 items-center">
    <div className="flex gap-2 items-center">
          <img className="h-12" src="./images/karwaanlogo.png" alt="" />
          <h1 className="text-2xl text-[#24387a] font-semibold ">Kaarwaa.N</h1>
        </div>
        {!showHamburgerMenu?   <BiMenuAltRight className="cursor-pointer text-3xl pr-" onClick={()=>setShowHamburgerMenu(true)}/>:<BiX className="cursor-pointer text-3xl pr-" onClick={()=>setShowHamburgerMenu(false)}/> }
      
        
    </div>
    {showHamburgerMenu &&
        <div className="fixed top-[3.5rem] right-0 w-48 h-screen z-[100]  bg-[rgba(255,255,255,0.9)]  ">
          <ul className="flex flex-col text-center  z-[50] text-[#24387a] font-semibold items-center gap-8">
            <Link to="/Home">
              <li onClick={scrolltoHome} className="hover:underline hover:underline-offset-8 hover:cursor-pointer">Home</li>
            </Link>
            <Link to="/home">
              <li onClick={scrolltoabout} className="hover:underline hover:underline-offset-8 hover:cursor-pointer">About Us</li>
            </Link>
            <Link to="/home">
              <li onClick={scrolltoOurwork} className="hover:underline hover:underline-offset-8 hover:cursor-pointer">Our Work</li>
            </Link>
            <Link to="/gallery">
              <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer">Gallery</li>
            </Link>
            <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer">Contact Us</li>
          </ul>
        </div>
      }
    </>
  )
}

export default Navbar