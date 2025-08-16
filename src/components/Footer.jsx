import React from 'react';
import assets from '../assets/assets';

const Footer = ({ theme }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-10 mt-30">
      {/* Main Footer Content */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10 max-w-7xl mx-auto px-6">
        
        {/* Left Section */}
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Company Logo"
          />
          <p className="max-w-md">
            From Strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <ul className="flex gap-8">
            <li><a className="hover:text-primary" href="#hero">Home</a></li>
            <li><a className="hover:text-primary" href="#services">Services</a></li>
            <li><a className="hover:text-primary" href="#our-work">Our Work</a></li>
            <li><a className="hover:text-primary" href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="text-gray-600 dark:text-gray-400 w-full max-w-md">
          <h3 className="font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The Latest News, Articles, and Resources, sent to your inbox weekly.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 text-sm">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white rounded px-6 py-3 hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-600 my-6 max-w-7xl mx-auto" />

      {/* Footer Bottom */}
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap max-w-7xl mx-auto px-6">
        <p>Copyright 2025 © JasleenKaur - All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.twitter_icon} alt="Twitter" />
          <img src={assets.instagram_icon} alt="Instagram" />
          <img src={assets.linkedin_icon} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
