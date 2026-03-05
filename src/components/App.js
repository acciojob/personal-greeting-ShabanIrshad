
import React, { useState, useTransition } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState('');
  return (
    <div>
       <form>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" id="name" placeholder="Enter Name..." onChange={(e)=>setName(e.target.value)} />
          {name?<p>Hello, {name}! </p>:''}
       </form>
    </div>
  )
}

export default App
