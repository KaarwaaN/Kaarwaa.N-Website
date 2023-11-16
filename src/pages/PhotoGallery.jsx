import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight,FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import images from '../../public/gallery';
const PhotoGallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);
 
  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage !== null) {
      if (direction === 'next') {
        setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
      } else if (direction === 'previous') {
        setSelectedImage((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ display: 'flex', flexWrap: 'wrap' , gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-ratio-container cursor-pointer" style={{ flex: '1', minWidth: '25%' }}>
          <div className="aspect-ratio-content">
          <img
              src={image.img}
              alt=""
              className="object-contain w-full h-auto max-h-[80vh] max-w-full cursor-pointer"
              onClick={() => openImage(index)}
            />

          </div>
        </div>
      ))}

      {selectedImage !== null && (
        <motion.div // Use motion.div for smoother animations
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          exit={{ opacity: 0 }} // Animate to zero opacity
          className="fixed inset-0 top-0 flex items-center justify-center z-[200] bg-black bg-opacity-90"
        >
          <motion.div // Use motion.div for smoother animations
            initial={{ scale: 0.8 }} // Initial scale
            animate={{ scale: 1.8 }} // Animate to full scale
            exit={{ scale: 0.8 }} // Animate to a smaller scale
            className="max-w-full max-h-full relative"
          >
            <img
              src={images[selectedImage].img}
              alt=""
              className="w-100 h-[20rem] rounded-md"
            />
            <button
              className="absolute bottom-4 left-4 text-white text-2xl cursor-pointer"
              onClick={() => navigateImage('previous')}
            >
              <FaArrowLeft />
            </button>

            <button
              className="absolute bottom-4 right-4 text-white text-2xl cursor-pointer"
              onClick={() => navigateImage('next')}
            >
              <FaArrowRight />
            </button>
            <button
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              onClick={closeImage}
            >
              <FaTimes />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
export default PhotoGallery;
