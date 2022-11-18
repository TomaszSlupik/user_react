import React from 'react'
import Candy from '../Candy/Candy'

export default function Food() {

    const candy = [
        {
            name_candy: 'pączek', 
            img: '🍩' 
        }, 
        {
            name_candy: 'czekolada', 
            img: '🍫'
        }, 
        {
            name_candy: 'tort', 
            img: '🍰'
        }
    ]

  return (
    <div>
        <Candy candydescribe={candy}/>
    </div>
  )
}
