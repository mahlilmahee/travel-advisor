import React, { useEffect, useRef, useState } from 'react';
// import 'leaflet/dist/leaflet.css';

import { useMap, MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

const markerIcon=new L.Icon({
  iconUrl:require('./images-removebg-preview.png'),
  iconSize:[35,45],
})

const Mymap = ({setBound,setCoordinates,coordinates}) => {

  const [isInitialRender, setIsInitialRender] = useState(true);

  const position = [51.505, -0.09];
  
  return (
    <div style={{marginTop:'30px'}}>
      {/* <h2>Hello here the map will come my brothers </h2> */}
      
      <MapContainer 
      // dragging={false}
        doubleClickZoom={false}
        // scrollWheelZoom={false}
        // attributionControl={false}
        zoomControl={false}
         center={position}
        style={{ height: '75vh', width: '100wh' }} 
        zoom={14}
        
          
         >

      {/* <MyComponent/> */}
     
     
      <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                                                ></TileLayer>
       <MapConsumer>
        {(map) => {
          // console.log("map center:", map.getCenter());
          

         if(isInitialRender) {
          setCoordinates({lat:map.getCenter().lat,lng:map.getCenter().lng});
          setBound({ls:map.getBounds()._southWest});
          // console.log(map.getBounds()._southWest,'bounds dekaho ')
         }
         setIsInitialRender(false)




          // map.on("click", function (e) {
          //   // const { lat, lng } = e.latlng;
            
          //   // L.marker([lat, lng], { icon }).addTo(map);
          // });
          return null;
        }}
      </MapConsumer>
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

 