import React from 'react'
import { useEffect, useState } from'react'
import './App.css'
import axios from 'axios';




export default function Weather() {

  const [data, setData] = useState([])
  // const [location, setlocation] = useState([])




  // const searchLocation = async (event) => {
  //   if (event.key === 'Enter') {
  //   const {data} = await fetch(
  //       `http://api.weatherapi.com/v1/current.json?key=c7b3eb0802b14664b15163532231601&q=${location}&aqi=no
  //       `
  //     ).then((response) => response.json());
  //     console.log(data);

  //     setData(data);
  //   }


  // }
  async function searchLocation (e) {
    let { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0be379ede56e411f80d134952231701&q=${e.target.value}&aqi=no
    `);
  
    setData (data)
  }

  useEffect(() => {
    searchLocation();
  },[])

console.log(data);



  return (
    <div className='app'>
      <div className='search'>
        <input
        onInput={searchLocation}

          placeholder='Enter your location'
          type="text" />
      </div>

         {/* <div className='search'>
        <input
          onChange={event => setlocation(event.target.value)}
          value={location}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div> */}
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p> { 'Alex' ||  data.location.name} </p>
          </div>
          <div className='temp'>
            <h1>{data.current.temp_c} ْc</h1>
          </div>

          <div className='discription'>
            {/* <p> {data.current.condition.text} </p> */}
      
          
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {/* <p> {data.current.feelslike_c}  ْC</p> */}
            <p> real feel </p>
          </div>
          <div className='humidit'>
            {/* <p> {data.current.humidity} </p> */}
            <p> Humidity </p>
          </div>
          <div className='windy'>
            {/* <p> {data.current.wind_kph} </p> */}
            <p> Km/h</p>
          </div>
        </div>
      </div>
      <div />
    </div>

  )
}




