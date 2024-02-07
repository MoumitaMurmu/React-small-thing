import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const Parent = () => {

  const[data, setData] = useState('');
  const[value, setValue] = useState('');
     function showData(x){
      setData(x);
     }

     function myValue(){
      setValue(data);
     }

  return (
     <div class="row" style={{margin:'3rem', display:'flex', justifyContent:'center'}}>
    <div style={{textAlign:'center', margin:'10px'}}> <h1 style={{color:'White'}}>PASSING DATA FROM CHILD TO PARENT.</h1></div>
  <div class="col-sm-4">
  
    <div class="card" style={{background:'gold'}}>
      <div class="card-body">
        <h5 class="card-title">Child Component.</h5>
        <p class="card-text">Sending Data To The Parent.</p>
        <ChildComponent getData={showData} data={data}/>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" style={{background:'tomato'}}>
      <div class="card-body">
        <h5 class="card-title">Parent Component.</h5>
        <label class="card-text">Receiving Data From Child :
        <input style={{
          marginLeft:'5px',
          width:'150px',
          border:'1px solid gold',
          color: 'white',
          fontSize:'18px',
          background:'black',
          padding:'5px'
        }} value={value} readOnly/>
        </label>
       

        <button class="btn btn-primary" onClick={myValue}>Receive Data</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Parent;
