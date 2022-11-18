import React from 'react'

export default function Question() {

    const answeaerUser = (e) => {
        console.log(e.target.value)
    }

  return (
    <div>
        <div>
            <label htmlFor='question'>Ile lat trenujesz piłkę nożną?</label>
            <input placeholder='odp.' type='text' id='question'
            onChange={answeaerUser}/>
        </div>
    </div>
  )
}
 