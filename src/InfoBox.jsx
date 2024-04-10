import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
    let HOT_URL="https://images.unsplash.com/photo-1549389055-008961ff0002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bW1lciUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    

    return(
        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80 
            ? <ThunderstormIcon/>
            :info.temp>15 
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
         <p>Temparature={info.temp}&deg</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}</p>
         <p>Max Temp={info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather} </i>and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
        
    );
}