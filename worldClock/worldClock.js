async function loadTimeZones() 
{
  const response = await fetch('select-data.json');
  const timeZones = await response.json()

  let dropdownMenu = document.getElementById("zone-select")

  timeZones.forEach(element => {

    let zoneOption = document.createElement("option")
    zoneOption.value = element.value
    zoneOption.textContent = element.label

    dropdownMenu.appendChild(zoneOption)



  });
  
}

document.getElementById("zone-select").addEventListener("change", async (event) => {

    const selectedZone = event.target.value

    if(selectedZone)
    {
        fetchTime(selectedZone)
    }
})

async function fetchTime(zone)
{
    
    const timeZone = zone
    const url = `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(timeZone)}`;

    
    const response = await fetch(url)
    const finalData = await response.json()

    console.log(finalData)
    displayTime(finalData)
}

function displayTime(data) 
{
  let timeEl = document.getElementById("time-el");
  timeEl.textContent = `Date: ${data.day}/${data.month}/${data.year}  ||    Time: ${data.hour}:${data.minute}:${data.seconds}`;
}

loadTimeZones()





