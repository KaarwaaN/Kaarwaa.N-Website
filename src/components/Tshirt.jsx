import Spline from '@splinetool/react-spline';
import TshirtForm from './Forms/TshirtForm';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTshirt } from 'react-icons/fa';
import { useState } from 'react';

const Tshirt = () => {
  const [showTshirtForm, setShowTshirtForm] = useState(false);

  function onClose() {
    setShowTshirtForm(false);
  }

  return (
    <>
      <h1 className='text-5xl translate-y-24 font-semibold text-center'>Get Your Karwaa.N Tshirt</h1>
      <div className='flex flex-col md:flex-row w-full gap-32 justify-center items-center'>
        <div className='w-full md:w-1/2 h-full'>
          <Spline scene="https://prod.spline.design/x7EwRLRyCPYo6Bhg/scene.splinecode" />
        </div>
        <div className='w-full md:w-1/2 z-20'>
          <div className='w-full md:w-1/2'>
            <button
              className="w-full md:w-auto bg-indigo-500 text-white flex items-center justify-center px-4 py-2 rounded-md hover:bg-indigo-600"
              onClick={() => setShowTshirtForm(true)}
            >
              <FaTshirt className="text-xl mr-2" />
              Get Tshirt!
            </button>
          </div>
        </div>
      </div>
      {showTshirtForm &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
          <TshirtForm closeForm={onClose} />
        </motion.div>
      }
    </>
  )
}

export default Tshirt;
