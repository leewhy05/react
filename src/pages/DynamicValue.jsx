import React from 'react'
import Lambo from '../assets/lambo.webp'

const DynamicValue = () => {
    let countryName = 'Nigera';
    let continent = 'Africa';
    let randonNumber = Math.random()*5;
    let tutors = ['David', 'Joe']
    let fbLink = "htpps://facebook.com"
  return (
    <div>
        <h2>DynamicValue</h2>
        <hr />
        <h3>My country {countryName} is in {continent}</h3>
        <h2>{randonNumber}</h2>
        <h2>{tutors[1]}</h2>
        <a href={fbLink} target='blank'> facebook</a>
        <img className='w-25' src={Lambo} alt="Lambo" />
    </div>
  )
} 

export default DynamicValue