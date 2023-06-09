import React from 'react'
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full h-200 bg-gray-900 flex justify-center items-center flex-col pt-10">
      <div className="text-white m-20 text-[28px] cursor-pointer flex">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <p className='text-white'> @copyright 2023 raksmeyhem.com</p>
    </div>
  )
}

export default Footer