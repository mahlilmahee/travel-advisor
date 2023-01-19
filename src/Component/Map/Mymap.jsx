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
import "leaflet/dist/leaflet.css";
// import markerIcon from "";
import L from "leaflet";
import Mymarker from "./Mymarker";
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
/>;

const markerIcon = new L.Icon({
  iconUrl: require("./images-removebg-preview.png"),
  iconSize: [35, 45],
});

const Mymap = ({ setBound, setCoordinates, coordinates, placeData }) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  //  console.log(latitude,'asi')
  // const position = [
  //   [51.49, -0.08],
  //   [53.5, -0.02],
  //   [54.5, -0.025],
  //   [53.6, -0.023],
  //   [54.7, -0.097],
  //   [53.8, -0.042],
  //   [54.9, -0.26],
  //   [51.49, -0.03428],
  //   [53.5, -0.0232],
  //   [54.5, -0.034225],
  //   [53.6, -0.03423],
  //   [54.7, -0.09347],
  //   [53.8, -0.04275],
  //   [54.9, -0.26352],
  //   [51.49, -0.05358],
  //   [53.5, -0.023423],
  //   [54.5, -0.025234],
  //   [53.6, -0.0233],
  //   [54.7, -0.01397],
  //   [53.8, -0.01142],
  //   [54.9, -0.126],
  //   [51.49, -0.618],
  //   [53.5, -0.112],
  //   [54.5, -0.225],
  //   [53.6, -0.14323],
  //   [54.7, -0.1297],
  //   [53.8, -0.5342],
  //   [54.9, -0.626],
  // ];
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
              position={[
                Number(mapdata.latitude)|| 40.13, Number(mapdata.longitude) ||-.232
               
              ]}
            >
              {
                console.log(mapdata,'inside from the mapdata ')
                
              }
              <Popup>
                showing you the location of {mapdata.description} <br /> Easily customizable.
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
