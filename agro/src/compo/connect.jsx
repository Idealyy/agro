import React from 'react'
import { Link } from 'react-router-dom';


const connect = () => {
  return (
    <div>
      <div className="p-8 m-auto mt-32 max-w-sm w-full">
                <h1 className="text-2xl font-semibold mb-4 text-center">Connectez-vous </h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className='w-full flex justify-center'>
                    <Link to="/home" className="w-full text-center bg-[#FBB6A6] text-white font-semibold py-2 px-4 rounded hover:bg-[#fc876c] transition duration-200">Se Connecter</Link>
                    </div>
                </form>
                <p className="mt-4 text-center text-gray-600">Vous n'avez pas de compte ? <Link to="/home" className="text-[#FBB6A6]">Inscrivez-vous ici</Link></p>
            </div>
    </div>
  )
}

export default connect
