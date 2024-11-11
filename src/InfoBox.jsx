//displays the weather information using material ui card presets.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){ //{info} passed as a prop from weatherapp.jsx(contains info parametersof weather)
    
    const img_URL =
    "https://cdn4.vectorstock.com/i/1000x1000/99/63/set-of-weather-icons-flat-design-vector-22369963.jpg";

    const HOT_URL="https://c.tadst.com/gfx/600x337/june-solstice-ten-things.jpg?1"
    const COLD_URL="https://t3.ftcdn.net/jpg/02/44/57/84/360_F_244578412_BGocVBbABy6h2BnV3QrajqXLf7X6uqYw.jpg"
    const RAIN_URL="https://img.freepik.com/premium-photo/monsoon-rainy-season-rainfall-beautiful-nature_1016228-2930.jpg"

    return(
    <div>
        <h4>Weather Info</h4>
    <Card sx={{ maxWidth: 345, borderRadius:"20px" }}>
      <CardMedia
        sx={{ height: 210 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>25 ? HOT_URL : COLD_URL} //ternary if else to get required images, same for icons
        title="weather"
      />
      <CardContent style={{backgroundColor:"beige"}}>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity>80 ? <ThunderstormIcon color='primary'/> : info.temp>25 ? <WbSunnyIcon color='error'/> : <AcUnitIcon color='primary'/>} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
        
        <p className='info-box'> Description: The weather suggests <i>{info.description}</i>, it feels like {info.feelslike}&deg; C</p>
        <p className='info-box'>Temperature: {info.temp} &deg; C</p>
        <p className='info-box'>Min temperature: {info.tempMin} &deg; C</p>
        <p className='info-box'>Max temperature: {info.tempMax} &deg; C</p>
        <p className='info-box'>Humidity: {info.humidity}</p>
        

        </Typography>
      </CardContent>
    </Card>
    </div>
        
        
    )
}
