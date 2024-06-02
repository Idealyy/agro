import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {    
  return (
<div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#FE9B86] to-[#fab3a5]">
    <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center"></h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Elevage</h2>
                    <p className="text-gray-700 mb-4">Gestion de production d'élévage</p>
                    <Link to='/production' className="block w-full bg-[#FE9B86] hover:bg-[#f88872] text-white font-bold py-2 px-4 rounded text-center">Aller à l'élevage</Link>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Agriculture</h2>
                    <p className="text-gray-700 mb-4">Gestion de production agricole</p>
                    <Link to='/meteo' className="block w-full bg-[#FE9B86] hover:bg-[#f88872] text-white font-bold py-2 px-4 rounded text-center">Aller à l'agriculture</Link>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default home
