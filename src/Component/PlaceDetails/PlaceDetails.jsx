import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Box } from '@material-ui/core';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const PlaceDetails = ({data,selected,refProp}) => {
    // const {name}=data

    if(selected) refProp?.current?.scrollIntoView({behavior:'smooth',block:'start'})
    return (
        <Card sx={{ maxWidth: 345,marginBottom:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ data.photo?  data.photo?.images?.large.url  : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          alt="resutant picture"
        />
       
        <CardContent>
        <Typography gutterBottom variant="h6">{data.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Typography gutterBottom variant="h6" component="div">
            Price
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Typography gutterBottom variant="h6" component="div">
            Rating
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.ranking}
          </Typography>
        </Box>
        {data?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt="rank "  />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
             {data?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name}  />
        ))}
       
         {data.address && (
             <Box display="flex" justifyContent="space-between " textAlign="center" my={2}>

              {/* <Typography variant="body2" color="textSecondary" > */}
             <LocationOnIcon/>
              <Typography variant="caption mx-2">{data.address}</Typography>
          {/* </Typography> */}
              </Box>
        )}
       
         {data.address && (
             <Box display="flex" justifyContent="space-between " textAlign="center" my={2}>

              {/* <Typography variant="body2" color="textSecondary" > */}
             <LocationOnIcon/>
              <Typography variant="caption mx-2">{data.latitude}</Typography>
          {/* </Typography> */}
              </Box>
        )}
       
        
         {data.phone && (
                 <Box display="flex" justifyContent="space-between" my={2}>

          {/* <Typography variant="body2" color="textSecondary" > */}
                  <LocalPhoneIcon /> 
                  <Typography>{data.phone}</Typography>
          {/* </Typography> */}
                   </Box>
        )}
         <Button size="small" color="primary" onClick={() => window.open(data.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(data.website, '_blank')}>
          Website
        </Button>
       
                </CardContent>
                 </CardActionArea>
                 </Card>
                               );
                                      };

export default PlaceDetails;