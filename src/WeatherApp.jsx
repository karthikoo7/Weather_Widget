/* WeatherApp.jsx acts as a parent component for searchbox and info box, to connect the two component we pass props to these components
. Specifically here-- weatherinfo state variable is created that is passed as a prop{info}={weatherInfo} to infobox , it stores the information regarding weather
data that is to be displayed. For getting the SearchBox data we pass a function called updateInfo that sets the weatherinfo to the newInfo obtained 
from searchbox.jsx provided by the api, this fn is passed as prop and executed with the value (result) in searchbox.jsx */ 








import SearchBox from "./SearchBox" 
import InfoBox from "./InfoBox" 
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({

        city:"",
        description:"",
        feelslike:0,
        tempMin:0,
        tempMax:0,
        temp:0,
        humidity:0,

    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}