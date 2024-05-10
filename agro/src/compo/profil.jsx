import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const profil = ({animal}) => {
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
        </div>
    </>
  )
}

export default profil
