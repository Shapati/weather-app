const cityForm = document.querySelector('form');
const card =document.querySelector('.card');
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')



const updateUI = (data) =>{
console.log(data);
const cityDets = data.cityDets;
const weather = data.weather;

// update details template 


details.innerHTML=`
<h5 class="my-3">${cityDets.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4">
  <span>${weather.Temperature.Metric.Value}</span>
  <span>&deg;C</span>

`

const iconsrc = `icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconsrc);

let timesrc = null;

if(weather.IsDayTime){
  timesrc='./day.svg'
}else{
  timesrc='./night.svg'
}

time.setAttribute('src',timesrc);


if(card.classList.contains('d-none')){
  card.classList.remove('d-none')
}

}




const update = async (city)=>{
const cityDets = await getcity(city);
const weather = await getWeather(cityDets.Key);
return {cityDets,weather};
};
cityForm.addEventListener('submit',e=>{
  e.preventDefault();
  
  //get city value 
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city 
  update(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err))

  
})

