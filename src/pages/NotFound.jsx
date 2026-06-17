import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F2EC] px-6 py-12">
      <div className="text-center w-full flex flex-col items-center">
        
        {/* 404 Text */}
        <div className="relative mb-2 flex items-center justify-center text-[#B58D4E]">
          <span className="text-[12rem] md:text-[16rem] leading-none font-serif font-light">4</span>
          <span className="relative flex items-center justify-center mx-2 md:mx-4">
            <span className="text-[12rem] md:text-[16rem] leading-none font-serif font-light">0</span>
            {/* 4-Point Star inside the 0 */}
            <svg className="absolute w-8 h-8 md:w-12 md:h-12 text-[#B58D4E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
            </svg>
          </span>
          <span className="text-[12rem] md:text-[16rem] leading-none font-serif font-light">4</span>
        </div>

        {/* Page Not Found */}
        <h2 className="text-2xl md:text-3xl tracking-[0.25em] font-serif text-[#1C1A18] mb-8 uppercase">
          Page Not Found
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center w-full max-w-[280px] mb-8">
          <div className="h-[1px] flex-1 bg-[#D8CBBB] opacity-60"></div>
          <svg className="w-4 h-4 mx-4 text-[#B58D4E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
          </svg>
          <div className="h-[1px] flex-1 bg-[#D8CBBB] opacity-60"></div>
        </div>

        {/* Subtitle */}
        <p className="text-[#3A3836] text-lg md:text-xl mb-12 font-medium">
          Oops! The page you're looking for<br/>seems to have wandered off.
        </p>
        
        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold tracking-widest text-[#B58D4E] uppercase transition-all duration-300 bg-[#171614] rounded-2xl hover:bg-[#B58D4E] hover:text-[#171614] group shadow-lg"
        >
          Go to Homepage
          <svg className="w-5 h-5 ml-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
