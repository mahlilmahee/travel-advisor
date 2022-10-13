import React from 'react';
import Header from './Component/Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import Map from './Component/Map/Map';
import List from './Component/List/List';

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
    <Map/>
  </Grid>
</Grid>
        
        </>
    )
}
export default App