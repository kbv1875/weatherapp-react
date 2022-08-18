import axios from 'axios'
import React,{useState} from 'react'
//import {image} from './assets/image'
import './App.css'
function App() {
  const[data,setData]=useState({})
  const[location,setLocation]=useState('')

  const searchLocation=(e)=>{
    if(e.key==='Enter')
    {axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9b070bbfc5c68621d03aac6fe5fe5f78`).then((response)=>{
      setData(response.data)
      console.log(response.data);
    })
    setLocation('')
  }}
  
  
  return (
    <div className="App">
      <div className='search'>
        <input  value={location} onChange={(e)=>{setLocation(e.target.value)}}   onKeyPress={searchLocation} placeholder='Enter location'  type='text'/>
        
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <h1>
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </h1>
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p>:null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>{data.main?<p>{data.main.feels_like.toFixed()}°F</p>:null}</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            {data.main?<p>{data.main.humidity.toFixed()}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p>{data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}</p>
            <p>Windspeed</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
