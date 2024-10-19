// const apiKey = '3319251737b815ff9b27c50cdb168122'; // Replace with your API key
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function getweather(){

const city = document.getElementById('city').value;
const apiKey = '3319251737b815ff9b27c50cdb168122'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(Response => Response.json())
.then(data => {
    console.log(data);
    if(data.cod !== 200){
        document.getElementById('result-box').style.display="inline-block";
    document.getElementById("result-box").innerHTML= `Error : ${data.message}`
    return;
    }
    
    const temperature = data.main.temp
    const description = data.weather[0].description
    document.getElementById('result-box').style.display="inline-block";
    document.getElementById("result-box").innerHTML= `Temperature : ${temperature} &deg;C <br>
    Description : ${description}`
    if(description.includes("rain")){
        document.body.style.backgroundImage ='url("Rainy.jpg")'
    }
    else if(description.includes("cloud")){
         document.body.style.backgroundImage ='url("Cloudy.jpg")'
    }
    else if(description.includes("sky")){
        document.body.style.backgroundImage ='url("clearSky.jpg")'
    }
    else if(description.includes("thunder")){
        document.body.style.backgroundImage ='url("Thunderstrom.jpg")'
    }
    else if(description.includes("snow")){
        document.body.style.backgroundImage ='url("Snowy.jpg")'
    }
    else if(description.includes("sun")){
        document.body.style.backgroundImage ='url("sun.jpg")'
    }
    else{
        document.body.style.backgroundImage ='url("default.jpg")'
    }
})
.catch(error => {
     console.error("error",error)
    document.getElementById('result-box').style.display = "inline-block";
        document.getElementById("result-box").innerHTML = "Error: Unable to fetch data. Please check your internet connection or try again later.";
})
}

document.querySelector('.reset').addEventListener('click', () =>{
    document.getElementById('city').value = '';
    document.getElementById('result-box').style.display="none";
}
)