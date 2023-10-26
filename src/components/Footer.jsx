import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CertificateForm from './Forms/CertificateForm';

function Footer() {
  const [showCertificateForm, setShowCertificateForm] = useState(false);
  function onClose(){
    setShowCertificateForm(false);
  }
  return (
    <footer className="bg-gray-200 py-8 px-32 ">
      <div className="container mx-auto flex items-start justify-between gap-8  border-b border-gray-400">
        <div className="w-full md:w-1/4">
          <div className="text-2xl font-bold mb-4 flex items-center">
            <img className="h-10 w-10 mr-2" src="./images/karwaanlogo.jpg" alt="Karwaan Logo" />
            <span className="text-blue-500 font-bold" style={{ fontFamily: 'Poppins' }}>Kaarwaan</span>
          </div>
          <p className="text-sm font-light pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam bibendum ante, vel rhoncus dolor volutpat at. Sed elementum arcu id urna euismod, in fermentum libero cursus.
          </p>
          <div className="mt-12">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kaarwaanjec/" className="text-2xl" target='_blank' rel='noreferrer'><FaFacebook /></a>
              <a href="https://www.youtube.com/@kaarwaanjec9417" className="text-2xl" target='_blank' rel='noreferrer'><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/kaarwaa-n/" className="text-2xl" target='_blank' rel='noreferrer'><FaLinkedin /></a>
              <a href="https://www.instagram.com/kaarwaa.n/" className="text-2xl" target='_blank' rel='noreferrer'><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="text-lg font-semibold mb-4">Main Menu</div>
          <ul className="text-sm font-light space-y-4  pb-4">
            <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400">Photo Gallery</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <div className="text-lg font-semibold mb-4">Additional Links</div>
          <ul className="text-sm font-light space-y-4  pb-4">
            <li><Link to="#" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Feedback</Link></li>
            <li> 
                 <button onClick={()=>setShowCertificateForm(true)} className="hover:text-blue-400">Certificate Validation</button>
                            {showCertificateForm && 
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50"
                              >
                            <CertificateForm closeForm={onClose}/>
                            </motion.div>                            
                            }
           </li>

          </ul>
        </div>

        <div className="w-full md:w-1/4 justify-end">
          <div className="text-lg font-semibold mb-1">Location</div>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.79403138346197!2d79.98692940200539!3d23.191319177621363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8d6aaaaaaad%3A0xfad1b073dfb80ffd!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1697028519480!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='mb-2'
          />
        </div>
      </div>

      <p className='text-center mt-3'>CopyRight @2023</p>
    </footer>
  );
}

export default Footer;
