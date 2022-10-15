import React from 'react';
// import 'leaflet/dist/leaflet.css';

import { useMap, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

const markerIcon=new L.Icon({
  iconUrl:require('./images-removebg-preview.png'),
  iconSize:[35,45],
})
const Mymap = () => {
  const Default_latitude=51.5050;
  const Default_longitude=-0.0900;
  const position = [51.505, -0.09]

  // const mapRef=useRef()
  return (
    <div>
      <h2>Hello here the map will come my brothers </h2>
      
      <MapContainer 
      // dragging={false}
        doubleClickZoom={false}
        // scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
         center={[Default_latitude,Default_longitude]}
        style={{ height: '75vh', width: '100wh' }} 
        zoom={14}
        >

      
      
      <TileLayer 
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           ></TileLayer>
           <Marker icon={markerIcon} position={position}>
      <Popup>
        Welcome I have done this. <br />  Lets find what you need.
      </Popup>
    </Marker>

</MapContainer>
     

    </div>
  );
};

export default Mymap;