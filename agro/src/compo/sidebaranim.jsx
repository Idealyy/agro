import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Production from './production';
import Animal from './animal';
import Sante from './sante';
import Croissance from './croissance';
import Sectionanim from './sectionanim';
import Search from './searchbar';
import { LuShoppingBasket } from "react-icons/lu"
import { GiSheep } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import Home from './home';
import { TiHome } from "react-icons/ti";
import  Profil from './profil'

const Sidebaranim = ({ data ,test }) => {

   console.log(test)
  const SidebarData = [
    {
      title: 'Home',
      path: '/home',
      icon: <TiHome />
    },
    {
      title: 'Production',
      path: '/production',
      icon: <LuShoppingBasket />
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
  
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [animal,setAnimal] = useState(null);

  const takeAnimal = (a) => {
    setAnimal(a)
    navigate('/profil')
  }

  return (
    <div className="flex overflow-hidden ">

      <div className="bg-white h-screen w-[18%] justify-center">
        <div className=" font-cabin px-4 py-9  flex items-center justify-center  transition-colors duration-300 mb-10">
          <p className='font-cabin text-gray-500 text-2xl'>ELEVAGE</p>
        </div>
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={`my-4 mr-4 px-2 py-3 text-[14px]  leading-[20px] text-white text-center border-[#EDEDED]/[0.3] hover:bg-[rgb(253,224,218)] hover:rounded-r-3xl  transition-colors duration-300 ${location.pathname === item.path ? 'mr-4 bg-[#FBB6A6] rounded-r-3xl ' : ''
              }`}
          >
            <Link to={item.path} className=' flex px-7 font-cabin text-gray-500 text-base focus:text-white'>


              <div className='mr-2'>{item.icon}</div>
              <div>{item.title}</div>
            </Link>
          </div>
        ))}
        {/* sidebaragri */}
        <div className="bg-red-200 w-[50%] rounded-lg mx-[15%] mt-5  transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
          
          <Link to='/culture' >
          <div className='w-4 h-20'>
          </div>
          </Link>

          

          

        </div>

      </div>
      <div className='w-2/3  h-screen'>
        <Search />
        <div className="  h-screen bg-gray-100 ">

          {data === 'production' && <Production />}
          {data === 'animal' && <Animal takeAnimal={takeAnimal}/>}
          {data === 'sante' && <Sante />}
          {data === 'croissance' && <Croissance />}
          {data === 'profil' && <Profil animal={animal}/>}

        </div>

      </div>


      <Sectionanim />
    </div>
  );
};

export default Sidebaranim;
