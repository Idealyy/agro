import React from 'react'
import { Link} from 'react-router-dom';
import Meteo from './meteo'
import Sectionanim from './sectionagri'
import Search from './searchagri'
import Culture from './culture'
import Cultivation from './cultivation';
import Home from './home'


const sidebaragri = ({data} ) => {
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
    <div className="flex overflow-hidden">

      <div className="bg-white h-screen w-[18%]">
        <div className="font-cabin px-4 py-8  flex items-center justify-center  transition-colors duration-300 mb-10 ">
          <p className='text-bold text-2xl  text-[#FBB6A6] '>Agriculture</p>
        </div>
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={`my-4 mr-4 px-2 py-3 text-[14px]  leading-[20px] text-white text-center border-[#EDEDED]/[0.3] hover:bg-[rgb(253,224,218)] hover:rounded-r-3xl  transition-colors duration-300 ${location.pathname === item.path ? 'mr-4 bg-[#FBB6A6] rounded-r-3xl ' : ''
              }`}
          >
            <Link to={item.path} className=' flex px-7 font-cabin text-gray-500 text-base'>


              {/* <div className='mr-2'>{item.icon}</div> */}
              <div>{item.title}</div>
            </Link>
          </div>
        ))}
        {/* sidebaranim */}
        {/* <div className="bg-red-200 w-[50%] rounded-lg mx-[25%] mt-5 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
          <button>
            . <br />. <br /> .
             <br /> . <br />.

          </button>

        </div> */}

      </div>
      <div className='w-2/3 mb-2  h-screen'>
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
