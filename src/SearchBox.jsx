
import TextField from '@mui/material/TextField'; //to use material ui input fields
import Button from '@mui/material/Button';

import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){
    
    let [city, setCity] = useState(""); //to track state with the input field, every function has access to state varible
    let [error, setError] = useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7a3c850040a67b57f2645193b57c2cf6"; //store in env varible for security

    //error handling done using try and catch block where the error(declared as a state varible) is thrown and then set to true if encountered
    // it is further executed using operators where is error is true something is printed.

    let getWeather = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); //adding the city to complete to the url to send api call,(read docs for more)
        let jsonResponse = await response.json();
        //console.log(jsonResponse);
        let result = {  //getting specfic values from jsonResponse object
            city:jsonResponse.name,
            feelslike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            description:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result; //getting result object from this  fn
        } catch(err){
            throw err;
        }

    }


    let addCity = (event)=>{ 
        setCity(event.target.value);
    }

    let submitHandler = async(event)=>
    {   
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeather(); //getting info here
        updateInfo(info); //calling the function that is passed as prop to execute and set weather info which is further passed to infobox as a prop

        } catch(err){
            setError(true);
        }
        
    }



    return(
        <div>
            <h2>Weather Widget</h2>
           
            <form onSubmit={submitHandler}>
            <TextField id="city" label="City Name" value={city} variant="outlined" onChange={addCity} required />
            <br /> <br />
            <Button variant="contained" type='submit'>Search</Button>

            </form>
            {error && <p style={{color:"red"}}>This City does not exist in the API Directory!!</p>}
        </div>
    )
}