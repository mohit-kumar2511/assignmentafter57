import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main';

const App = () => {

  const savedData = localStorage.getItem('data') || "[]";
  const savedData2 = JSON.parse(savedData);
  const [data, setData] = useState(savedData2);
  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  return (
    <div>
      <Navbar/>
      <Main data={data} updateData={updateData}/>
    </div>
  )
}

export default App