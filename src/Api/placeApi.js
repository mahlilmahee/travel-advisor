import { CatchingPokemon } from '@mui/icons-material';
import axios from 'axios';
const placeUrl='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
export  const  getPlaceData=async (sw,ne)=>{
    try{
        const {data:{data}} =await axios.get(placeUrl, {
          params: {
            bl_latitude:sw?.lat,
            tr_latitude: ne?.lat,
            bl_longitude: sw?.lng,
            tr_longitude: ne?.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'cdf25a2fe0msh676d81c36c728d9p14f411jsn55f585ed065a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
        ); 
        return data;   }
    catch(error){
    console.log(error)
    }
} ;