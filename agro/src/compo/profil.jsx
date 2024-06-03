import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const profil = ({animal}) => {
  const data = [
    {
      nom: "Labrador",
      espece: "Chien",
      race: "Labrador Retriever",
      date_naiss: "2020-01-15",
      sexe: "M",
      statut: "Disponible",
      date_entree: "2021-03-12",
      date_vente: "2022-04-10",
      age: 2,
      poids: 30,
    },
  ];
    // const data = [
    //     { id: 1, name: 'Fido', species: 'Dog', age: 5, health: 'Good' },
    //     { id: 2, name: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
    //     { id: 3, name: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
    //     { id: 4, name: 'Nibbles', species: 'Rabbit', age: 2, health: 'Poor' },
    //   ];
    // console.log(animal);
  return (
    <>
    <Link to='/animal'>Retour</Link>
        <div>
          {animal.name}
          {animal.species}
          {animal.age}
          {animal.health}

          <h1>Tableau des Animaux</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Espèce</th>
            <th>Race</th>
            <th>Date de Naissance</th>
            <th>Sexe</th>
            <th>Statut</th>
            <th>Date d'Entrée</th>
            <th>Date de Vente</th>
            <th>Âge</th>
            <th>Poids</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
              <td>{item.espece}</td>
              <td>{item.race}</td>
              <td>{item.date_naiss}</td>
              <td>{item.sexe}</td>
              <td>{item.statut}</td>
              <td>{item.date_entree}</td>
              <td>{item.date_vente}</td>
              <td>{item.age}</td>
              <td>{item.poids}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    </>
  )
}

export default profil
