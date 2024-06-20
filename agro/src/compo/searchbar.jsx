import React from 'react'
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const searchbar = () => {
  return (
    <div className="h-14 w-full bg-gray-100 backdrop-blur-md backdrop-filter overflow-hidden flex items-center justify-between px-4 py-12 ">
      <div>
        <h3 className='font-cabin text-2xl text-start text-bold text-gray-500 items-center justify-center'>Bienvenue  </h3>
      </div>
      {/* <div className='absolute right-12'>
        <form className="relative  flex items-center">


          <input
            className="input rounded-full px-12 py-2 placeholder-gray-400 transition-all duration-300 focus:border-gray-300"
            placeholder=" Rechercher..."
            required=""
            type="text"

          />
          <div className='absolute left-3 text-gray-500'><FaSearch /></div>
          <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1 text-gray-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </form>
      </div> */}

    </div>


  )
}

export default searchbar
