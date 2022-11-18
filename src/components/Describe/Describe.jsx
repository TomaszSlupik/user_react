import React from 'react'

export default function Describe(props) {
  return (
    <div>
        <div>Opis uczelni:</div>
        <div>
            {props.describe.map((el, index) => {
                return (
                    <div key={index}>Uczelnia: {el.describe_school}</div>
                )
            })}
        </div>
    </div>
  )
}
