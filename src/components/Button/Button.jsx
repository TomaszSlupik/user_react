import React from 'react'

export default function Button() {

    let user_learn = 'Tomek'

    const style = {
        newDiv : {fontSize: '2rem', color: 'blue'}
    }

    const display = (name) => {
        const addDiv = document.querySelector('.addDiv')
        const newdiv = document.createElement('div')
        newdiv.setAttribute('className', 'createDiv')
        newdiv.textContent = 'Po kliknięciu pojawi nam się DIV'
        addDiv.append(newdiv)

        console.log('Cześć ' + name)
    }

  return (
    <div>
        <button className='btn btn-success' onClick={()=>{
            display(user_learn)
        }}>Kliknij</button>
        <div className='addDiv' style={style.newDiv}></div>
    </div>
  )
}
