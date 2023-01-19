import React, { useState } from "react";
// import 'leaflet/dist/leaflet.css';

// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
import {
  MapContainer,
  TileLayer,
  MapConsumer,
  Popup,
  Marker,
} from "react-leaflet";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "leaflet/dist/leaflet.css";
// import markerIcon from "";
import L from "leaflet";
import Mymarker from "./Mymarker";
import Rating from '@mui/material/Rating';
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
/>;

const markerIcon = new L.Icon({
  iconUrl: require("./images-removebg-preview.png"),
  iconSize: [35, 45],
});

const Mymap = ({ setBound, setCoordinates, coordinates, placeData ,setClickResturent}) => {
  const [isInitialRender, setIsInitialRender] = useState(true);


  return (
    <div style={{ marginTop: "30px" }}>
      <MapContainer
        // dragging={false}
        doubleClickZoom={false}
        // scrollWheelZoom={false}
        // attributionControl={false}
        zoomControl={false}
        center={[51.507351, -0.127758]}
        style={{ height: "75vh", width: "100wh" }}
        zoom={14}
        children
      >
        map.getBounds()
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>

{placeData?.map((mapdata) => {
          return (
            <Marker
              icon={markerIcon}
              eventHandlers={{
                click: (child , i) => {
                  setClickResturent(child)
                 
                },
              }}
              position={[
                Number(mapdata.latitude)|| 40.13, Number(mapdata.longitude) ||-.232
               
              ]}
            >
              
              <Popup>
              <Rating name="read-only" size="small" value={Number(mapdata.rating)} sx={{marginBottom:'20px'}} readOnly />
              <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={mapdata?.photo?.images?.small?.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mapdata.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {/* {mapdata.description} */}
        </Typography>
      </CardContent>
      
    </Card>            
   </Popup>
            </Marker>
          );
        })}
        <MapConsumer>
          {(map) => {
            if (isInitialRender) {
              setCoordinates({
                lat: map?.getCenter()?.lat,
                lng: map?.getCenter()?.lng,
              });
              setBound({
                sw: map.getBounds()._southWest,
                ne: map?.getBounds()?._northEast,
              });
            }
            setIsInitialRender(false);
            return null;
          }}


          
        </MapConsumer>
       
       
      </MapContainer>
    </div>
  );
};

export default Mymap;

{
  /* {placeData?.map((place,i)=>{

<> 
<Marker icon={markerIcon}   position={[
              Number(place.latitude),Number(place.longitude)
             ]} >
<Popup>
      Welcome I have done this. <br />  Lets find what you need.
     
</Popup>
</Marker>
</>

     })} */
}
