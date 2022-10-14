import React from 'react';
// import 'leaflet/dist/leaflet.css';
import { Map, MapContainer, TileLayer } from 'react-leaflet';

// import MapObject from './MapObject'



const Mymap = () => {
  const Default_latitude=0;
  const Default_longitude=0;

  return (
    <div>
      <h2>Hello here the map will come my brothers </h2>
      <div class="abulbhai" > 
      <MapContainer  scrollWheelZoom={false}  style={{ height: "50vh", width: "100%" }} center={[Default_latitude,Default_longitude]} zoom={12}>

<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

</MapContainer>
      </div>

    </div>
  );
};

export default Mymap;