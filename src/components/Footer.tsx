import React from 'react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white py-16 bg-green-900">
      <div className="container mx-auto max-w-5xl px-10 text-center md:text-left">
        <img src="./images/logo_white.svg" alt="" className='inline'/>

        <div className="flex flex-col md:flex-row  items-center py-7">
          <div className="w-full md:md:w-1/4 md:pr-8">
            <ul className="mb-8 md:pl-10">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:pr-8">
            <ul className="mb-8 md:pl-10">
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:pr-8">
            <ul className="mb-8 md:pl-10">
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:pr-8">
            <SocialIcons />
          </div>
        </div>

        <p className="md:text-right">&copy; 2021 Huddle. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;