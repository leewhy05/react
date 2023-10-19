import React, { useState } from 'react'
import { professionals } from '../data'

const Lists = () => {
    const [students, setStudents] = useState(professionals)
    function clearAllStudent() {
        setStudents([])
    }
  return (
    <div className='container text-center'>
        <hr />
        <h1>Lists Page</h1>
        <hr />
        {/* <div>
            <h4>Jannat</h4>
            <h2>front-end Web developer</h2>
            <hr />
            <h4>Steve</h4>
            <h2>back-end web developer</h2>
            <hr />
            <h4> George </h4>
            <h2> fullstack web developer </h2>
            <hr />
            <h4> Halimat </h4>
            <h2> mobile app developer </h2>
        </div> */}

{students.map((student)=>{
            const {id,Name,role} = student
            return(
                <div key={id}>
                    <h4> {Name} </h4>
                    <h2> {role} </h2>
                    <button className="btn btn-danger">remove</button>
                    <hr />
                </div>
            )
        })}
         <button onClick={clearAllStudent} className="btn btn-success btn-lg">clear All</button>

    </div>
  )
}

export default Lists