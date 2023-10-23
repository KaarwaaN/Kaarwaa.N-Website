import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'; 
import { BsArrowUpRight, BsFillJournalBookmarkFill } from "react-icons/bs";
import JoinUsForm from "./Forms/JoinUsForm";
function Navbar() {
  const [showJoinUsForm, setShowJoinUsForm] = useState(false);
  function onClose(){
    setShowJoinUsForm(false);
  }
  return (
    <>
    <div className="h-20 w-full flex flex-row justify-between items-center px-32">
        <ul className="flex text-[#24387a] font-semibold justify-start items-center gap-8">
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Home</li>
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">About Us</li>
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Our Work</li>
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Gallery</li>
          <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer">Contact Us</li>
        </ul>
        <div className="flex gap-2 items-center">
          <img className="h-12" src="./images/karwaanlogo.png" alt="" />
          <h1 className="text-2xl text-[#24387a] font-semibold">Kaarwaa.N</h1>
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
    
    </>
  )
}

export default Navbar