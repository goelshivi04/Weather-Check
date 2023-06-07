
let input=document.querySelector('.city-input');

let btn=document.querySelector('.btn-search');
btn.addEventListener('click', ()=>{
    displayWeather();
    
})

document.addEventListener('keypress',(event)=>{
    if(event.keyCode===13){
        displayWeather();
    }
})

function displayWeather(){
    let place = input.value;
    console.log(place);

    let api = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid=24c864550fcb3ed5e1c8f08381c4c8a8";
    console.log('api',api);

    fetch(api)
    .then(response=>{
        data=response.json();
        return data;
})
    .then(data=>{
        console.log(data);
     //access data from the fetched objects
        let temp=(data.main.feels_like-273.15).toFixed(2);
        let weather=data.weather[0].description;
        let windSpeed=data.wind.speed;
        let maxTemp=(data.main.temp_max-273.15).toFixed(2);
        let minTemp=(data.main.temp_min-273.15).toFixed(2);
        let humidity=data.main.humidity;
        let pressure=data.main.pressure;

     //display weather
        document.querySelector('.temp').textContent=temp + "°C";
        document.querySelector('.weather').textContent=weather;       
        document.querySelector('.wind-speed').textContent=windSpeed + " kph";
        document.querySelector('.max-temp').textContent=maxTemp + "°C";
        document.querySelector('.min-temp').textContent=minTemp + "°C";
        document.querySelector('.humidity').textContent=humidity + " %";
        document.querySelector('.pressure').textContent=pressure + " Pa";
        document.querySelector('.place').textContent=place;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + place + "')"
        
     //change icon for different weathers
        if( weather=='moderate rain')
        weatherIcon.setAttribute('src','icons/moderate.png');
        else if(weather=='haze')
        weatherIcon.setAttribute('src','icons/haze.png');
        else if(weather=='scattered clouds')
        weatherIcon.setAttribute('src','icons/scattered.png');
        else if(weather=='light rain')
        weatherIcon.setAttribute('src','icons/light.png');
        else if(weather=='overcast clouds')
        weatherIcon.setAttribute('src','icons/overcast.png');


    })
    .catch(error=>{
        console.log(error);
        alert('Please enter a valid place.');
})
}
let weatherIcon=document.querySelector('.weather-icon');

//add today's date
let date=document.querySelector('.date');
let today=new Date();
const options={year: 'numeric', month: 'long', day: 'numeric' }
date.textContent=today.toLocaleDateString('en-US',options);


