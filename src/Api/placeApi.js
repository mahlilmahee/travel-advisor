import { CatchingPokemon } from '@mui/icons-material';
import axios from 'axios';


const placeUrl='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// this has been copid from rapid api and this is javascript axios 
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '24f4f87e16msh1e0eeaa01dfb4e8p1b24a1jsnf0eb4fba03d6',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export  const  getPlaceData=async ()=>{
    try{
        const {data:{data}} =await axios.get(placeUrl,options);
        return data;
    }
    catch(error){
        console.log(error)
    }
} ;