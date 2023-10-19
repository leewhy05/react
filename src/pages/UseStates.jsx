import React, {useState} from 'react';

const UseStates = () => {
    // const [clientName, setClientName] = useState('Steve');
    // const [clientState, setClientState] = useState('Anambra');
    // const [clientAge, setClientAge] = useState(56);
    // const [clientGender, setClientGender] = useState('male');
    const [client, setClient] = useState({
        name:'Leewhy',
        age:57,
        gender:'male',
        state:'Anambra'
    })

    // let clientName = 'Steve';
    // let clientState = 'Anambra';
    // let clientGender = 'male';
    // let clientAge = 56;
    function changeDetails(){
        // clientName = "Jannat";
        // clientState = "Kwara";
        // clientGender = "female";
        // clientAge = 37;
        // console.log(clientAge,clientGender,clientState,clientName);
       setClient({...client,name:'Ayomide',age:37,gender:'female'})
        // setClientName('Jannat'),
        // setClientGender('female'),
        // setClientState('Kwara'),
        // setClientAge(37)
    if(client.name === 'Leewhy', client.age === 57, client.gender === 'Male', client.state === 'Anambra'){
        setClient({name:'Ayomide',age:37,gender:'female', state: 'kwara'})
    }else{
        setClient({state:'Anambra',name:'Leewhy',age:57,gender:'Male'})
    }

    }
  return (
    <div className='container text-center my-4'>
        <hr />
        <h1>UseStates</h1>
        <hr />
        <h4> My name is {client.name} I am {client.age} years old, am from {client.state} and a {client.gender}   </h4>
        {/* <h4> My name is {clientName} I am {clientAge} years old, am from {clientState} and a {clientGender}   </h4> */}
        <button onClick={changeDetails} className="btn btn-success btn-lg">
            change details

        </button>


    </div>
  )
}

export default UseStates