import React from 'react'

export default function Candy(props) {
  return (
    <div>
        <h1>Słodycze</h1>
        <div>
            {props.candydescribe.map((el, index) => {

               return (
                    <div key={index}>
                        <div>Nazwa: {el.name_candy}</div>
                        <div>Zdjęcie {el.img}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
