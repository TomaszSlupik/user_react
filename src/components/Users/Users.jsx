import React from 'react'
import Study from '../Study/Study'
import Describe from '../Describe/Describe'

export default function Users() {
    
  let userName = 'Tomek'
  let job = 'FullStack'
  let age = 22
  let hobby = 'Gym'


  const UserTwo = {
    userName: 'Ola',
    job: 'Backend',
    age: 19,
    hobby: 'Dance'
  } 

 
  const study = {
    userOne: 'PW',
    userTwo: 'ALK' 
  }

  const describeTwoSchool = [
    {
        describe_school: 'Publiczna politechnika założona w 1915 w Warszawie '
    }, 
    {
        describe_school: 'Polska niepubliczna uczelnia akademicka'
    }
  ]

  return (
    <div>
         <h2>User One</h2>
          <div>Username: <span>{userName}</span></div>
          <div>Job: <span>{job}</span></div>
          <div>Age: <span>{age}</span></div>
          <div>Hobby: <span>{hobby}</span></div>
          <Study school={study.userOne}/>
          
          <br />
          <h2>User Two</h2>
          <div>Username: <span>{UserTwo.userName}</span></div>
          <div>Job: <span>{UserTwo.job}</span></div>
          <div>Age: <span>{UserTwo.age}</span></div>
          <div>Hobby: <span>{UserTwo.hobby}</span></div>
          <Study school={study.userTwo}/>
          <br />

          <Describe describe={describeTwoSchool}/>
    </div>
  )
}
