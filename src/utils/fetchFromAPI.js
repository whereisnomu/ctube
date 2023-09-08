const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
   params: {
      maxResults: '50',
      regionCode:"US"
   },
   headers: {
     'X-RapidAPI-Key': '3f9fb8b669msh0f17bcd44b75e64p1e273ajsn79621524253d',
     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   }
 };

 export const fetchFromAPI = async(url) => {
   try{
   const {data} = await axios.get(`${BASE_URL}/${url}`, options)

   return data
} catch (error) {
      console.error(error);
   }
 }
