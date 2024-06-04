import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  { id: 1, name: 'Fido', species: 'Dog', age: 5, health: 'Good' },
  { id: 2, name: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
  { id: 3, name: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
  { id: 4, name: 'Nibbles', species: 'Rabbit', age: 2, health: 'Poor' },
];

const animal = ({ takeAnimal }) => {

  const [activeProfil, setactiveProfil] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };



  return (
    <div className="flex h-screen">
      <div className="w-full p-8 h-screen ">
        {/* tableau */}
        <div className=" font-cabin overflow-x-auto rounded-lg shadow-md">
          <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-4 w-full">
              <div className="flex max-w-full mb-6">
                <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Liste des animaux</h2>
                <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                  AJOUTER
                </button>

              </div>
              <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2 text-center">ID</th>
                    <th className="w-1/4 px-4 py-2 text-center">Profile</th>
                    <th className="w-1/4 px-4 py-2 text-center">Nom</th>
                    <th className="w-1/4 px-4 py-2 text-center">Âge</th>
                    <th className="w-1/4 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                      <td className="w-1/4 px-4 py-2">{item.id}</td>
                      <td className="w-1/4 px-4 py-2">
                        <div className='flex justify-center cursor-pointer hover:text-yellow-400 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110' onClick={() => takeAnimal(item)} >
                          <MdOutlineEmojiEmotions />
                        </div>
                      </td>
                      <td className="w-1/4 px-4 py-2"><span>{item.name}</span></td>
                      <td className="w-1/4 px-4 py-2">{item.species}</td>
                      <td className="w-14 px-4 py-2">
                        <div className="flex justify-center">
                          <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                            <MdOutlineModeEdit />
                          </div>
                          <div className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                            <RiDeleteBinLine />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
              onClick={togglePopup}
            >
              Open Popup
            </button>
            {showPopup && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                  <button
                    className="text-gray-600 hover:text-gray-800 float-end mt-0"
                    onClick={togglePopup}
                  >
                    <IoClose />
                  </button>
                  <form className="m-2">
                    <div className=''>
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                      >
                        <SwiperSlide>

                          <div className=' w-max mx-auto mb-3'>
                            <div className="sm:col-span-3 mb-0 w-56">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3 mb-0 w-56 ">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Race
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3 w-56 mb-0 mt-2">
                              <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900">
                                Espèce
                              </label>
                              <div className="">
                                <select
                                  id="species"
                                  name="species"
                                  autoComplete="species-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option>Bovin</option>
                                  <option>Porcin</option>
                                  <option>Volaille</option>
                                  <option>Caprin</option>
                                  <option>Ovin</option>

                                </select>
                              </div>
                            </div>

                            
                            <div className="sm:col-span-3 mt-2 mb-0 w-56">
                              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Date
                              </label>
                              <div>
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <fieldset className="mt-3 w-56">
                              <legend className="text-sm font-semibold leading-6 text-gray-900">Sexe</legend>
                              <div className="flex space-x-3">
                                <div className="flex items-center gap-x-3">
                                  <input
                                    id="male"
                                    name="sex"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mâle
                                  </label>
                                </div>
                                <div className="flex items-center gap-x-3 ">
                                  <input
                                    id="female"
                                    name="sex"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                                    Femelle
                                  </label>
                                </div>
                              </div>
                            </fieldset>


                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className=' w-max mx-auto'>
                            <div className="sm:col-span-3 mb-0 w-56">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Date d'enregistrement
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3 mb-0 w-56 ">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Date de vente
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3 mb-0 w-56 ">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Maladie, blessure, date et état de santé
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3 w-56">
                              <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900">
                                Vaccination et date
                              </label>
                              <div className="mt-2">
                                <select
                                  id="species"
                                  name="species"
                                  autoComplete="species-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option>Bovin</option>
                                  <option>Porcin</option>
                                  <option>??????</option>
                                  <option>??????</option>
                                </select>
                              </div>
                            </div>

                            <fieldset className="mt-3 w-56">
                              <legend className="text-sm font-semibold leading-6 text-gray-900">Vermifuge</legend>
                              <div className="flex space-x-3">
                                <div className="flex items-center gap-x-3">
                                  <input
                                    id="male"
                                    name="sex"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mâle
                                  </label>
                                </div>
                                <div className="flex items-center gap-x-3 ">
                                  <input
                                    id="female"
                                    name="sex"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                                    Femelle
                                  </label>
                                </div>
                              </div>
                            </fieldset>

                            <div className="sm:col-span-3 w-56">
                              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                Statut
                              </label>
                              <div className="mt-2">
                                <select
                                  id="status"
                                  name="status"
                                  autoComplete="status-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option>Acheté</option>
                                  <option>Acquis</option>
                                </select>
                              </div>
                            </div>

                          </div>
                        </SwiperSlide>
                        ⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀

                      </Swiper>



                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={togglePopup}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            )}
          </div>
        )}

        {/* //diagrame */}
        <div className="flex mt-8">
          <div className="bg-[(#483D31] w-1/2 rounded-lg shadow-md mr-4 hover:scale-105 transition duration-300 ease-out">
            <div className="p-4">
              <h2 className="text-xl font-cabin mb-2">Diagramme 2</h2>
              <p className="text-gray-700 font-cabin">Contenu de la diagrame 1 ici...</p>
            </div>
          </div>
          <div className="bg-[#AFDED3] w-1/2 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-out">
            <div className="p-4">
              <h2 className="text-xl font-cabin mb-2">Diagrame1</h2>
              <p className="text-gray-700 font-cabin">Contenu de la diagrame 2 ici...</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default animal
