import React, { useState } from 'react'

const ClickEvent = () => {

const [name, setName] = useState('Leewhy')
 function handleClick(){
    console.log('you clicked me');
 }
 let handleClaickAgain = (duration)=>{
    console.log(`you clicked me ${duration}`);
 }
 let changeName = function(){
     setName('Ayomide')
 }
  return (
    <div className='container text-center'>
        <hr />
        <h2>ClickEvent</h2>
        <hr />
        <button onClick={handleClick} className="btn btn-primary btn-lg">Click Moi</button>
        {/* below function is meant to explain how to write a function that has a parameter and argument */}
      <button onClick={()=>handleClaickAgain('2x')} className="btn btn-danger btn-lg">click me again</button>
      {/* one more function*/}
      <h2>{name}</h2>
      <button onClick={changeName} className="btn btn-success btn-lg">click to change name</button>

        </div>
  )
}

export default ClickEvent