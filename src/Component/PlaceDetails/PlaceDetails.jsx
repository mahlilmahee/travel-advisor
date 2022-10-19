import React from 'react';

const PlaceDetails = ({data}) => {
    const {fName}=data
    return (
        <div>
            <h1> {fName}</h1>
        </div>
    );
};

export default PlaceDetails;