import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence,motion } from "framer-motion";
import mentor_1 from "../assets/mentors/mentor_1.jpg";
import mentor_2 from "../assets/mentors/mentor_2.jpg";
import mentor_3 from "../assets/mentors/mentor_3.jpg";
import mentor_4 from "../assets/mentors/mentor_4.jpeg";
import mentor_5 from "../assets/mentors/mentor_5.jpg";
import mentor_6 from "../assets/mentors/mentor_6.jpg";
import mentor_7 from "../assets/mentors/mentor_7.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Samajh Singh Thakur Sir",
      image: mentor_1,
      text: "Former Principal JEC",
    },
    {
      name: "Prof. Jyoti Chobey Ma'am",
      image: mentor_2,
      text: "Applied Physics Dept. Head of Student Welfare JEC",
    },
    {
      name: "Mrs. Savitri Patel Ma'am",
      image: mentor_3,
      text: "Former Administration Officer JEC  Head of Kaarwaa.N",
    },
    {
      name: "Dr. Ranjana Singh Ma'am",
      image: mentor_4,
      text: "Professor Electrical Engineering JEC, Head of Kaarwaa.N",
    },
    {
      name: "Dr. S.K Tiwari Sir",
      image: mentor_5,
      text: "HOD Physics Department, JEC",
    },
    {
      name: "Dr. Prashant Jain Sir",
      image: mentor_6,
      text: "Former HOD IT & EC Department",
    },
    {
      name: "Dr. Anubha Maheshwari Ma'am",
      image: mentor_7,
      text: "Chemistry Department",
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [previousImage, setPreviousImage] = useState(testimonials.length - 1);

  const handleNext = () => {
    const nextIndex = (selectedTestimonial + 1) % testimonials.length;
    setSelectedTestimonial(nextIndex);
    setNextImage((nextIndex + 1) % testimonials.length);
    setPreviousImage(selectedTestimonial);
  };

  const handlePrev = () => {
    const prevIndex = (selectedTestimonial - 1 + testimonials.length) % testimonials.length;
    setSelectedTestimonial(prevIndex);
    setNextImage(selectedTestimonial);
    setPreviousImage(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto switch every 5 seconds
    return () => clearInterval(interval);
  }, [selectedTestimonial]);

  return (
    <div className="relative mx-auto max-w-screen-lg m-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-center opacity-80 text-xs m-1">
          adipisicing elit.cta quasi quidem accusantium temporibus repudiandae voluptate odio, distincti!
        </p>
        <h2 className="text-center font-medium text-2xl mb-4">Our Mentors</h2>
        <div className="flex relative justify-between items-center mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="carousel-control left-0 hidden sm:block"
          >
            <FaChevronLeft size={32} />
          </motion.button>
          <motion.img
            src={testimonials[previousImage].image}
            alt={testimonials[previousImage].name}
            className="w-20 h-20 object-cover rounded-full mr-36 sm:mr-6 translate-y-7"
          />
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={selectedTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={testimonials[selectedTestimonial].image}
              alt={testimonials[selectedTestimonial].name}
              className="w-44 h-44 object-cover rounded-full mx-auto"
            />
          </AnimatePresence>
          <motion.img
            src={testimonials[nextImage].image}
            alt={testimonials[nextImage].name}
            className="w-20 trans h-20 object-cover rounded-full ml-36 sm:ml-6 translate-y-6"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="carousel-control right-0 hidden sm:block"
          >
            <FaChevronRight size={32} />
          </motion.button>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-800 text-xl font-semibold">{testimonials[selectedTestimonial].name}</p>
          <p className="text-gray-600 text-lg">{testimonials[selectedTestimonial].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
