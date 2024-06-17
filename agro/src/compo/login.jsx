import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import background from '../assets/image/back.png';

const login = () => {
  const urlImg = background; // Assurez-vous que background contient le bon chemin vers votre image

  return (
    <div className=" h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${urlImg})` }}>
      <div className=" flex">
        <NavBar />
      </div>
      <div className='h-[90vh] flex flex-col justify-center'>
        <div className="w-1/3 flex  backdrop-filter backdrop-blur-sm rounded-lg p-5  ">
          <h3 className="intro-title text-3xl font-bold text-center text-white">
          "Optimisez votre exploitation agricole avec simplicité et efficacité <br />
           grâce à notre application de gestion de production agricole." <br /> <br />
           <Link to='/connect' >
           <button className='bg-[#6ea3d8] text-white text-lg font-cabin px-2 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'>
           commencer</button>
           </Link>

          </h3>
        </div>
      </div>
    </div>
  );
}

export default login;

