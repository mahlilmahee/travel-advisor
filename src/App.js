import React from 'react';
import Header from './Component/Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
// import Map from './Component/Map/Map';
import List from './Component/List/List';
import Mymap from './Component/Map/Map';
{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" /> */}
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
const App= ()=>{

    return(

        <>
            <CssBaseline/>

            <Header></Header>
            <Grid container spacing={3} style={{width: '100%'}}>
  <Grid item xs={12} md={4}>
  <List></List>
  </Grid>
  <Grid item xs={12} md={4}>
    <Mymap/>
  </Grid>
</Grid>
        
        </>
    )
}
export default App