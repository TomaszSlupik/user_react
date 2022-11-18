import React from 'react'
import Pet from '../Pet/Pet'

export default function Animals() {

  const animals = [
    {
      first_name_animals: 'Lucy',
      age: 2, 
      ani: 'cat'
    }, 
    {
      first_name_animals: 'Zoe',
      age: 3, 
      ani: 'dog'
    }
  ]
  return (
    <div>
      <h1>Animals</h1>
      <Pet describeanimals={animals}/>
    </div>
  )
}
