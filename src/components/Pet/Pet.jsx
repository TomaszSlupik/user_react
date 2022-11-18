import React from 'react'

export default function Pet(props) {
  return (
    <div>
        <div>
        {props.describeanimals.map((el, index) =>{
            return (
                <div key={index}>
                    <div>Imię: {el.first_name_animals}</div>
                    <div>Wiek: {el.age}</div>
                    <div>Zwierzę: {el.ani}</div>
                    <br></br>
                </div>
            )
        })}
        </div>
        
    </div>
  )
}
