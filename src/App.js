import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const[data,setData] = useState([])
  const[location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5a98450152a2806af37e02322628e120`
  
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
     }
    }

  return (
    
    <div className="app">
        <div className="header">
        <div className="name">
            <h2>WeatherNow</h2>
        </div>
          <div className="search">
            <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter City, Country'
            type="text"/>
          </div>
        
    
    
      </div>
        

        {data.name != undefined && 
        <div className="container">
          <div className="top">
          
            <div className="location">
              {data.sys ? <p>{data.name}, {data.sys.country}</p> : null}
            </div>
            <div className="temperature">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="condition">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        </div>
}
        {data.name != undefined && 
        <div className="container">
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      }
        
    </div>
  
  

  );
}

export default App;
