import React from 'react'
import { useState } from 'react'

export default function Question() {

    const answeaerUser = (e) => {
        console.log(e.target.value)
    }

    const [input, setInput] = useState('')

    const answearUserTwo = (e) => {
      setInput(e.target.value)
      console.log(input)

    }

    const [questionthree, setquestionthree] = useState('')

    const answearThree = (e) => {
      setquestionthree(e.target.value)
      console.log(questionthree)
    }

  return (
    <div>
        <div>
            <label htmlFor='question'>Ile lat trenujesz piłkę nożną?</label>
            <input placeholder='odp.' type='text' id='question'
            onChange={answeaerUser}/>

            <label htmlFor='questionTwo'>Czy studiujesz?</label>
            <input placeholder='odp.' type='text' id='questionTwo' 
            onChange={answearUserTwo}/>

            <hr />
            <label htmlFor="questionThree">Twoja ulubiona potrawa?</label>
            <input type='text' placeholder="odp."  id='questionThree' onChange={answearThree}/> 
            <div>Odpowiedź: {questionthree}</div>

        </div>
    </div>
  )
}
 