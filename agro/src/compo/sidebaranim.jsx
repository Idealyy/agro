import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Production from './production';
import Animal from './animal';
import Sante from './sante';
import Croissance from './croissance';
import Sectionanim from './sectionanim';
import Search from './searchbar';
import { RiShoppingBasketFill } from "react-icons/ri";
import { GiSheep } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Home from './home';
import { TiHome } from "react-icons/ti";
import Profil from './profil'
import { IoMenuOutline } from "react-icons/io5";
import '../assets/css/App.css';
import { LuWheat } from "react-icons/lu";




const Sidebaranim = ({ data, test }) => {

  const [isOpen, setIsOpen] = useState(true);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log(test)
  const SidebarData = [
    {
      title: 'Accueil',
      path: '/home',
      icon: <TiHome />
    },
    {
      title: 'Production',
      path: '/production',
      icon: <RiShoppingBasketFill />
    },
    {
      title: 'Animal',
      path: '/animal',
      icon: <GiSheep />
    },
    {
      title: 'Santé',
      path: '/sante',
      icon: <GiHealthNormal />
    },
    {
      title: 'Croissance',
      path: '/croissance',
      icon: <GiStumpRegrowth />
    },
    {
      title: 'Agriculture',
      path: '/culture',
      icon: <LuWheat />,
      cName: 'text-[#6ea3d8] text-xl'
    },

  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);

  const takeAnimal = (a) => {
    setAnimal(a)
    navigate('/profil')
  }

  return (
    <div className="flex overflow-hidden shadow-md h-screen">
      <div className={`relative w-max`}>
        <div className="absolute -right-7 shadow-lg top-2 z-10 rounded-lg overflow-clip cursor-pointer w-maw h-max">
          <IoMenuOutline
            className="bg-white w-9 h-7 p-1"
            onClick={toggleSidebar}
          />
        </div>



        {/* sidebaragri */}

        <div
          className={`${isOpen ? "max-w-auto text-gray-500" : "max-w-[65px] text-white"
            }    transition-all overflow-hidden`}
        >

          <div className="">
            <div className=" font-cabin  py-4  flex items-center justify-center space-x-1  transition-colors duration-300" >

              <div className='font-cabin  text-2xl mt-10 '>Elevage</div>


            </div>

            {SidebarData.map((item, index) => (
              <div
                key={index}
                className={` relative my-4 mr-[7px] px-1 py-3 text-[14px]  leading-[20px] text-gray-500 text-center border-[#EDEDED]/[0.3] hover:bg-[rgb(253,224,218)] hover:rounded-r-3xl  transition-colors duration-300 ${location.pathname === item.path ? 'mr-4 bg-[#FBB6A6] rounded-r-3xl text-white ' : ''
                  }`}
              >
                <Link to={item.path} className=' flex px-7 font-cabin text-base -z-50'>


                  <div className='relative mr-4' >
                    <span className={item.cName}>
                      {item.icon}
                    </span>
                  </div>
                  <div>{item.title}</div>
                </Link>
              </div>
            ))}
            <div className='block justify-center items-center mx-[5%]'>

              <div className=' my-6'>
                <button className="Btn">
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text text-lg">se⠀déconnecter</div>
                </button>
              </div>
            </div>
          </div>


        </div>




      </div>
      <div className='w-full  h-screen'>
        <Search />
        <div className="  h-screen bg-gray-100 ">

          {data === 'production' && <Production />}
          {data === 'animal' && <Animal takeAnimal={takeAnimal} />}
          {data === 'sante' && <Sante />}
          {data === 'croissance' && <Croissance />}
          {data === 'profil' && <Profil item={animal} />}

        </div>

      </div>


      <Sectionanim />
    </div>
  );
};

export default Sidebaranim;
