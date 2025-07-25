let finalData = document.getElementById("data")

function getCity()
{
    let inputel = document.getElementById("input-city")
    const city = inputel.value

    getWeatherData(city)
}

async function getWeatherData(city)
{
    const apiKey = '874e789daf1a43628f5122645252407'
    const cityName = city
    let cityFound = true

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    
    const response = await fetch(url);

    if(!response.ok)
    {
        cityFound = false
    }

    if (cityFound)
    {  
        const weatherData = await response.json();

        //console.log(weatherData);

        displayData(weatherData)
    }
    else
    {
        finalData.textContent = "Error/City not Found."
    }

}

function displayData(data)
{
    

    const country = data.location.country
    const city = data.location.name
    const region = data.location.region
    const time = data.location.localtime
    const weather = data.current.condition.text
    const temperature = data.current.temp_c + "°C"
    const iconUrl = "https:" + data.current.condition.icon


    console.log(country)
    console.log(region)
    console.log(weather)
    console.log(temperature)

    finalData.innerHTML = `
    <h3 id="location"> ${city}, ${region}, ${country}</h3>
    <p id="local-time"><strong>Local time:</strong> ${time}</p>

    <div id="weather-row">
        
        <p id="temperature"><strong></strong> ${temperature}</p>
        <img id="icon" src="${iconUrl}" alt="${weather}">
    </div>
    <p id="condition"><strong>Condition:</strong> ${weather} </p> 
`


}

