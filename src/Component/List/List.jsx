import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import PlaceDetails from '../../Component/PlaceDetails/PlaceDetails'
const List = ({placeData}) => {

    const [type, setType] = React.useState('');
    const [rate, setRate] = React.useState('');
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const handleChange = (event) => {
      setType(event.target.value);
    };


  //  const places =[
  // {fName:'frace'},
  // {fName:'rog'},
  // {fName:'frdsdfce'},
  // {fName:'fracdgae'},
  // {fName:'rog'},
  // {fName:'frdsdfce'},
  // {fName:'fracdgae'},
  // {fName:'rog'},
  // {fName:'frdsdfce'},
  // {fName:'fracdgae'}
   

  //  ]
    return (
        <div>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Places</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Places"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="resturants">Resturants</MenuItem>
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="attractions">Attractions</MenuItem>
      </Select>
    </FormControl>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Rating</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={rate}
        label="Places"
        onChange={(e)=>{setRate(e.target.value)}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="0">All</MenuItem>
        <MenuItem value="3">Above 3.0 </MenuItem>
        <MenuItem value="4">Above 4.0 </MenuItem>
        <MenuItem value="4.5">Above 4.5 </MenuItem>
        
      </Select>
    </FormControl>

<div>
    
<Grid sx={{marginLeft:'15px',height:'500px',overflow:'scroll'}} container >

{

    placeData && placeData.map((data,index)=>(
        <Grid  Item xs={12} > <PlaceDetails data={data} key={index}></PlaceDetails></Grid>
    ))
}
</Grid>
</div>

        </div>
    );
};

export default List;