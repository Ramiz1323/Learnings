import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from '../components/Card.jsx'

const App = () => {

  const [allData, setallData] = useState([])
  const getData = async () =>{
    const res = await axios.get("https://picsum.photos/v2/list?page=1&limit=20")
    setallData(res.data)
    console.log(res.data);
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <div className="container">
      {allData.map(function(elem,idx){
        return <div key={idx}>
          <Card elem = {elem}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default App
