const key = '3SnBw1ezTxWVyaxnPGk4EtRSDWRsOz6b';

// const getCondition = async (id)=>{
//   const base ='http://dataservice.accuweather.com/currentconditions/v1/';
//   const query = `${id}?apikey=${key}`;


//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data[0];
  


// }

const getWeather =async (id)=>{
const base ='http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0];
}

const getcity= async (city)=>{
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
  // const query =`?apikey=${key}&q=${city}`;


  const response = await fetch(base);
  const data = await response.json();
  return data[0];
}
getcity('manchester')
  
  .then(data => getWeather(data.Key)) 
  .then(data => console.log(data))
  .catch(err => console.log(err))


// getWeather("")