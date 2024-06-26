import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoClose, IoLogIn } from "react-icons/io5";
import url from "./../api/api"
// import axios from 'axios';
import Espece from './espece'
import Swal from 'sweetalert2'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const animal = ({ takeAnimal }) => {

  const speciesData = [10, 5, 8, 2];

  const [showPopup, setShowPopup] = useState(false);

  const [animalData, setAnimalData] = useState({
    nom: "",
    espece: "",
    race: "",
    sexe: "",
    datenaiss: "",
    date_enre: "",
    date_vente: "",
    date_dece: "",
    age: "",
    poids: "",
    statut: ""
  });
  const [animalSante, setAnimalSante] = useState({
    animal_id: "",
    vaccin: false,
    vermifuge: false,
    date_vacc: "",
    date_verm: "",
    maladie: "",
    blessure: "",
    date_trait: "",
    traitement: "",
    etat: "",
    gestation: ""
  })

  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const animals = await url.get('animals')
      setAnimalList(animals.data);
      console.log(animals.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimalData({
      ...animalData,
      [name]: value
    });
  };

  const handleChangeSante = (e) => {
    const { name, value } = e.target;
    setAnimalSante({
      ...animalSante,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAnimalSante(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:8080/api/elevage/animal/add', animalData);

    // console.log(response.animalData);

    const getTodayDate = () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    try {


      console.log(
        {
          nom: animalData.nom,
          espece: animalData.espece,
          race: animalData.race,
          sexe: animalData.sexe,
          date_naiss: animalData.datenaiss,
          date_enregist: getTodayDate(),
          date_vente: animalData.date_vente,
          date_dece: animalData.date_dece,
          age: animalData.age,
          poids: animalData.poids,
          status: animalData.statut,
          vaccin: animalSante.vaccin,
          vermifuge: animalSante.vermifuge,
          date_vacc: animalSante.date_vacc,
          date_verm: animalSante.date_verm,
          maladie: animalSante.maladie,
          blessure: animalSante.blessure,
          traitement: animalSante.traitement,
          date_trait: animalSante.date_trait,
          etat: animalSante.etat,
          gestation: animalSante.gestation
        }
      );

      const sendData = await url.post('addAnimal', {
        nom: animalData.nom,
        espece: animalData.espece,
        race: animalData.race,
        sexe: animalData.sexe,
        date_naiss: animalData.datenaiss,
        date_enregist: getTodayDate(),
        date_vente: animalData.date_vente || null,
        date_dece: animalData.date_dece || null,
        age: animalData.age,
        poids: animalData.poids,
        status: animalData.statut,
        vaccin: animalSante.vaccin ? "Oui" : "Non",
        vermifuge: animalSante.vermifuge,
        date_vacc: animalSante.date_vacc || null,
        date_verm: animalSante.date_verm || null,
        maladie: animalSante.maladie || "Aucune",
        blessure: animalSante.blessure || "Aucune",
        traitement: animalSante.traitement || "",
        date_trait: animalSante.date_trait || null,
        etat: animalSante.etat,
        gestation: animalSante.gestation
      });
    fetchAnimal();
      
      togglePopup();
      Swal.fire({
        title: 'ajout effectué',

        confirmButtonText: 'ok'
      })
      console.log(sendData.data);



    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await url.delete(`deleteAnimal/${id}`);
      console.log('Colonne supprimée avec succès');
      fetchAnimal();
    } catch (error) {
      console.error(error);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA'); // Adjust locale as per your requirement
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="h-screen relative ">

      <div className="w-full flex flex-col px-8 h-10 ">
        {/* tableau */}
        <div className=" font-cabin rounded-lg shadow-md h-40">
          <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-4 w-full">
              <div className="flex max-w-full mb-6">
                <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Liste des animaux</h2>
                <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                  AJOUTER
                </button>

              </div>
              <div className='h-[30vh] overflow-y-scroll '>
                <table className="table-fixed  w-full border-collapse bg-white rounded-lg text-gray-600">
                  <thead>
                    <tr>
                      <th className="w-1/4 px-4 py-2 text-center">Id </th>
                      <th className="w-1/4 px-4 py-2 text-center">Nom</th>

                      <th className="w-1/4 px-4 py-2 text-center">Espece</th>
                      <th className="w-1/4 px-4 py-2 text-center">Date de naissance</th>
                      <th className="w-1/4 px-4 py-2 text-center">Sexe</th>
                      <th className="w-1/4 px-4 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {animalList.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-100 text-center">
                        <td className="w-1/4 px-4 py-2">{item.id_animal}</td>
                        <td className="w-1/4 px-4 py-2">{item.nom}</td>
                        <td className="w-1/4 px-4 py-2">
                          {item.espece}
                        </td>
                        <td className="w-1/4 px-4 py-2 ho ver:"><Link to="/sante"><span>{formatDate(item.date_naiss)}</span></Link></td>
                        <td className="w-1/4 px-4 py-2">{item.sexe}</td>
                        <td className="w-14 px-4 py-2">
                          <div className="flex justify-center">
                            <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                              <MdOutlineModeEdit />
                            </div>
                            <div onClick={() => handleDelete(item.id_animal)} className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
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
        </div>

        {showPopup && (
          <div className="flex justify-center items-center min-h-screen bg-gray-200">

            {showPopup && (
              <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                  <button
                    className="text-gray-600 hover:text-gray-800 float-end mt-0"
                    onClick={togglePopup}
                  >
                    <IoClose />
                  </button>
                  <form className="m-2" onSubmit={handleSubmit} >
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
                          <div className='w-max mx-auto my-10'>
                            <div className="sm:col-span-3 mb-0 w-56">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom
                              </label>
                              <div className="">
                                <input
                                  type="text"
                                  name="nom"
                                  value={animalData.nom}
                                  onChange={handleChange}
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
                                  name="race"
                                  value={animalData.race}
                                  onChange={handleChange}
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
                                  name="espece"
                                  value={animalData.espece}
                                  onChange={handleChange}
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
                                Date de Naissance
                              </label>
                              <div>
                                <input
                                  type="date"
                                  name="datenaiss"
                                  value={animalData.datenaiss}
                                  onChange={handleChange}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <fieldset className="mt-3 w-56">
                              <legend className="text-sm font-semibold leading-6 text-gray-900">Sexe</legend>
                              <div className="flex space-x-3">
                                <div className="flex items-center gap-x-3">
                                  <input
                                    name="sexe"
                                    value={"male"}
                                    onChange={handleChange}
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mâle
                                  </label>
                                </div>
                                <div className="flex items-center gap-x-3 ">
                                  <input
                                    name="sexe"
                                    value={"Femelle"}
                                    onChange={handleChange}
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
                                Poids
                              </label>
                              <div>
                                <input
                                  type="text"
                                  name="poids"
                                  value={animalData.poids}
                                  onChange={handleChange}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3 mb-0 my-2 w-20 flex  ">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 mx-3">
                                Vermifuge
                              </label>
                              <div className="">
                                <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" class="sr-only peer"
                                    name="vermifuge"
                                    value={animalSante.vermifuge}
                                    onChange={handleCheckboxChange}
                                  />
                                  <div class="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-12 h-6  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✕']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-checked:after:content-['✓'] peer-hover:after:scale-85 peer-checked:after:rotate-0">
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div className="sm:col-span-3 my-2 w-56 flex">
                              <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900 mx-2">
                                Vaccination
                              </label>
                              <div className="">
                                <label class="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" class="sr-only peer"
                                    name="vaccin"
                                    value={animalSante.vaccin}
                                    onChange={handleCheckboxChange}
                                  />
                                  <div class="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-12 h-6  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✕']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-checked:after:content-['✓'] peer-hover:after:scale-85 peer-checked:after:rotate-0">
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div className="sm:col-span-3 mb-0 w-60 ">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Etat
                              </label>
                              <div className="">
                                <select
                                  name="etat"
                                  onChange={handleChangeSante}
                                  autoComplete="species-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option value={1}>En bonne santé</option>
                                  <option >En traitement</option>
                                </select>
                              </div>
                            </div>
                            <div className="flex space-x-1  ">
                              <div className="sm:col-span-3 mb-0 w-28  ">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Maladie
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    name="maladie"
                                    value={animalSante.maladie}
                                    onChange={handleChangeSante}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-3 mb-0 w-28  ">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Blessure
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    name="blessure"
                                    value={animalSante.blessure}
                                    onChange={handleChangeSante}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="sm:col-span-3 w-56">
                              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                Statut
                              </label>
                              <div className="mt-2">
                                <select
                                  name="status"
                                  onChange={handleChange}
                                  autoComplete="status-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option value="Acheté">Acheté</option>
                                  <option value="Acquis">Acquis</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={togglePopup}
                      >
                        ANNULER
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        AJOUTER
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* //diagrame */}

      </div>

      <div className="w-full">
        <div className=''>
          <Espece data={speciesData} />
        </div>
      </div>


    </div>
  )
}

export default animal
