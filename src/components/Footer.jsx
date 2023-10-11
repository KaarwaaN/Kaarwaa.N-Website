import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-200 py-8 ">
      <div className="container mx-auto flex items-start justify-between gap-8  border-b border-gray-400">
        <div className="w-full md:w-1/4">
          <div className="text-2xl font-bold mb-4 flex items-center">
            <img className="h-10 w-10 mr-2" src="./karwaanlogo.jpg" alt="Karwaan Logo" />
            <span className="text-blue-500 font-bold" style={{ fontFamily: 'Poppins' }}>Kaarwaan</span>
          </div>
          <p className="text-sm font-light pb-4">
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.
          </p>
          <div className="mt-12">
            <div className="flex space-x-4">
              <a href="#" className="text-2xl"><FaFacebook /></a>
              <a href="#" className="text-2xl"><FaTwitter /></a>
              <a href="#" className="text-2xl"><FaYoutube /></a>
              <a href="#" className="text-2xl"><FaLinkedin /></a>
              <a href="#" className="text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="text-lg font-semibold mb-4">Main Menu</div>
          <ul className="text-sm font-light space-y-4  pb-4">
            <li><Link to="#" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="#" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Photo Gallery</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <div className="text-lg font-semibold mb-4">Additional Links</div>
          <ul className="text-sm font-light space-y-4  pb-4">
            <li><Link to="#" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Feedback</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Certificate Verification</Link></li>
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
