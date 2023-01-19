import React, { useEffect, useState } from 'react';
import Header from './Component/Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';

import List from './Component/List/List';
import Mymap from './Component/Map/Mymap';
import { getPlaceData } from './Api/placeApi';


<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
const App= ()=>{

const [placeData,setPlaceData]=useState([]);
const [coordinates,setCoordinates]=useState({lat:52.520007,lng:13.404954});
const [bound,setBound]=useState({ });
const [type, setType] = React.useState("hotels");
const [rate, setRate] = React.useState("");
const [clickResturent,setClickResturent]=useState(null)
const [filteredPlace,setFilteredPlace] = useState('')
useEffect(()=>{
 const filterplaces=placeData?.filter((place)=> 
 Number(place?.rating) >rate
 )
setFilteredPlace(filterplaces)
console.log(filterplaces, 'finter ')

}, [placeData,rate])

useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    
    setCoordinates({lat:latitude,lng:longitude})
  })
},[])

useEffect(()=>{


  getPlaceData(bound?.sw,bound?.ne,type)
  .then(data=>{
    setPlaceData(data)
    // console.log(data)
    // console.log(bound?.sw, 'map matters')
  })
},[coordinates , type,bound])
  






    return(

        <>
            <CssBaseline/>

            <Header></Header>
            <Grid container spacing={3} style={{width: '100%'}}>
  <Grid item xs={12} md={4}>
  <List type={type} setType={setType} rate={rate} setRate={setRate} placeData={ filteredPlace?.length? filteredPlace: placeData} clickResturent={clickResturent}></List>
  </Grid>
  <Grid item xs={12} md={8}>
    <Mymap setClickResturent={setClickResturent} coordinates={coordinates} setCoordinates={setCoordinates}  placeData={ filteredPlace?.length? filteredPlace: placeData} setBound={setBound} />
  </Grid>
</Grid>
        
        </>
    )
}
export default App