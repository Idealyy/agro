import React from 'react'

const inscrire = () => {
  return (
    <div>
     <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
                <h1 className="text-2xl font-semibold mb-4 text-center">S' inscrire</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Confirmer mon mot de passe</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-white text-gray-500 font-semibold py-2 px-4 rounded  transition duration-200">
                        Annuler
                    </button>
                    <button type="submit" className="w-full bg-[#FBB6A6] text-white font-semibold py-2 px-4 rounded hover:bg-[#fc876c] transition duration-200">
                        S'inscrire
                    </button>
                </form>
            </div>
    </div>
  )
}

export default inscrire
