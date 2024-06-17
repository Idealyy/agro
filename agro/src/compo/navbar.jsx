import React from 'react';
import { Link } from 'react-router-dom';
import Connect from './connect'
import { useEffect, useState } from 'react'



const NavBar = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };
  return (
    <nav className="flex justify-between items-center  backdrop-filter backdrop-blur-lg px-4 py-2 w-full top-0 z-10 ">
      <div className="text-white font-bold text-2xl">Mon Application</div>
      <div>
        <Link to='/connect' >
          <button  className="hover:bg-gray-600  text-white font-semibold py-2 px-4 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-110">
            Se Connecter
          </button>
        </Link>
        <button className=" hover:bg-[#FBB6A6] text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
          S'inscrire
        </button>
      </div>
      {/* {showPopup &&(
      <Connect />
      )} */}
    </nav>
  );
};

export default NavBar;

