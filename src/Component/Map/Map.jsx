import React from 'react';
// import 'leaflet/dist/leaflet.css';
import { useMap, MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'
// import MapObject from './MapObject'



const Mymap = () => {
  const Default_latitude=20.3413;
  const Default_longitude=18.51313;

  return (
    <div>
      {/* <h2>Hello here the map will come my brothers </h2> */}
      
      <MapContainer  style={{ height: '400px', width: '100%'}}   center={[Default_latitude,Default_longitude]} zoom={1}>

<TileLayer 
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

</MapContainer>
     

    </div>
  );
};

export default Mymap;