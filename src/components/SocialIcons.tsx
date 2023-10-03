import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

interface SocialIconsProps { }

const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <ul className="flex md:flex-col items-center justify-center gap-1">
      <li><a href='https://twitter.com' className="border border-white rounded-full text-white inline-flex items-center justify-center mr-2 h-10 w-10 no-underline"><FaTwitter /></a></li>
      <li><a href='https://facebook.com' className="border border-white rounded-full text-white inline-flex items-center justify-center mr-2 h-10 w-10 no-underline"><FaFacebook /></a></li>
      <li><a href='https://linkedin.com' className="border border-white rounded-full text-white inline-flex items-center justify-center mr-2 h-10 w-10 no-underline"><FaLinkedin /></a></li>
    </ul>
  );
};

export default SocialIcons;