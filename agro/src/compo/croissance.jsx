import React from 'react'
import GrowthChart from './GrowthChar'

const croissance = () => {
  const animalGrowthData = [
    { age: 1, weight: 2 },
    { age: 2, weight: 4 },
    { age: 3, weight: 7 },
    { age: 4, weight: 10 },
    { age: 5, weight: 14 },
  ];
  return (
    <div>
      <div>
      <h1>Suivi de la croissance de l'animal</h1>
      <GrowthChart data={animalGrowthData} />
    </div>
    </div>
  )
}

export default croissance
