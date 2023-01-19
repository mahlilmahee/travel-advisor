import React from 'react';
import {  Marker, Popup} from 'react-leaflet';
const Mymarker = ({marker,markerIcon}) => {
    const {latitude,longitude}=marker;

    const position={lat:parseFloat(latitude),lng:parseFloat(longitude)}
    console.log(position,'bhai dekah ei hedake')
    return (
        <div>
            {/* console.log(latitude,'dekahbo ni') */}
            <Marker icon={markerIcon}   center={position} >
<Popup>
      done this. <br />  Lets find.
     
</Popup>
</Marker>
        </div>
    );
};

export default Mymarker;