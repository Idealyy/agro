import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Meteo from './meteo'
import Sectionanim from './sectionagri'
import Search from './searchagri'
import Culture from './culture'
import Cultivation from './cultivation';
import Home from './home'
import { IoMenuOutline } from "react-icons/io5";


const sidebaragri = ({ data }) => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SidebarData = [
    {
      title: 'Home',
      path: '/home',
      // icon: <TiHome />
    },
    {
      title: 'Météo',
      path: '/meteo',
      // icon: <LuShoppingBasket />
    },
    {
      title: 'Plantes & Parcelle',
      path: '/culture',
      // icon: <LuShoppingBasket />
    },
    {
      title: 'Cultivation',
      path: '/cultivation',
      // icon: <GiSheep />
    },

  ];

  return (
    <div className="flex overflow-hidden h-screen">



      <div className={`flex relative`}>
        <div
          className={`${isOpen ? "max-w-96" : "max-w-0"
            }   bg-whiteDeam transform translate-x-0.5  h-screen rounded-lg transition-all duration-300 `}
        >

          <div className='text-bold text-2xl p-8 text-[#FBB6A6] '>Agriculture</div>

          {SidebarData.map((item, index) => (
            <div
              key={index}
              className={`my-4 mr-4 px-2 py-3 text-[14px]  leading-[20px] text-white text-center border-[#EDEDED]/[0.3] hover:bg-[rgb(253,224,218)] hover:rounded-r-3xl ${location.pathname === item.path && 'mr-4 bg-[#FBB6A6] rounded-r-3xl '
                }`}
            >
              <Link to={item.path} className=' flex px-7 font-cabin text-gray-500 text-base'>


                {/* <div className='mr-2'>{item.icon}</div> */}
                <div>{item.title}</div>
              </Link>
            </div>
          ))}
          <div className="bg-red-200 w-[50%] rounded-lg mx-[15%] mt-5  transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">

            <Link to='/production' >
              <div className='w-4 h-20'>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute -right-5 top-0 z-30 cursor-pointer h-7 bg-red-950">
          <IoMenuOutline
            className="icon text-2xl text-gray-800 hover:text-red-300 bg-blue-900 justify-items-center "
            onClick={toggleSidebar}
          />
        </div>
      </div>

      <div className='w-full mb-2  h-screen'>
        <Search />
        <div className="  h-screen bg-gray-100 ">
          {/* {data} */}
          {data === 'meteo' && <Meteo />}
          {data === 'culture' && <Culture />}
          {data === 'cultivation' && <Cultivation />}

        </div>

      </div>
      <Sectionanim />
    </div>
  )
}

export default sidebaragri
