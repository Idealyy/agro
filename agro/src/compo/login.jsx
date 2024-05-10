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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            

          </h3>
        </div>
      </div>
    </div>
  );
}

export default login;

