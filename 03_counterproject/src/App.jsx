import { useState } from 'react'

import './App.css'

function App() {

 
 const [counter,setCounter]= useState(0);



  //let counter =15;
  const addvalue =()=>{
    console.log("value added", Math.random());
    //counter = counter+1;
    // console.log(counter);
    
    if(counter < 20){
      setCounter(counter + 1)
    }
    
}

function removevalue(){
  if(counter > 0){
    setCounter(counter - 1)
  }
}

  return (
    <>
      <h1>Counterapp</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>
        add value
      </button>
      <br />
      <br />
     
      <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App
