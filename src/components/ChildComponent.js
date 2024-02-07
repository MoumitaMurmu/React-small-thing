import React, { useState } from 'react'

const ChildComponent = ({getData}) => {
const[input, setInput] = useState('');
 
function sendData(){
    getData(input);
}

  return (
    <>
     <input  style={{width:'200px', padding:'4px'}} type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
     <button style={{marginLeft:'10px'}} class="btn btn-primary" onClick={sendData}>Send Data</button>
    </>
  )
}

export default ChildComponent;
