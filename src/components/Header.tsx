import React from 'react';
import 'style.css'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className='bg-blue-100'>
      {/* ko ăn code 1000px */}
      <header className="px-10 py-5 max-w-screen-xl my-0 mx-auto w-[1000px] bg-[#5dea06f] w-1000">
        <nav className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          <img src='./images/logo.svg' alt='' className="mb-10 md:mb-0" />
          <button className="rounded-full border-none shadow-md cursor-pointer font-semibold text-lg py-4 px-12 bg-white text-gray-800 hover:opacity-90 hover:shadow-xl hover:scale-90">Try It Free</button>
        </nav>

        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between items-center">
          <div className="">
            <h1 className='text-4xl font-semibold my-5'>Build The Community Your Fans Will Love</h1>
            <p className='text-xl'>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <button className="mt-5 rounded-full border-none shadow-md cursor-pointer text-white font-semibold text-lg py-4 px-12 bg-pink-500 hover:opacity-90 hover:shadow-xl hover:scale-90">Get Started For Free</button>
          </div>
          <img src='./images/illustration-mockups.svg' alt='' className="w-96 ml-10 mt-10 md:mt-0" />
        </div>
      </header>
    </div>
  );
};

export default Header;