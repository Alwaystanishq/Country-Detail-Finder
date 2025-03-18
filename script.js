let searchBtn = document.getElementById("search-btn")
let countryInp = document.getElementById("country-inp")
let result = document.getElementById("result")

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(finalURl).then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `<img src='${data[0].flags.svg}' class='flag-img'/>
<h2>${data[0].name.common}</h2>
<div class='wrapper'> 
        <h4>Capital : ${data[0].capital[0]}</h4>
        <h4>Continent : ${data[0].continents[0]}</h4>
        <h4>Population : ${data[0].population}</h4>
        <h4>Currency : ${data[0].currencies[Object.keys(data[0].currencies)].name} - 
        ${Object.keys(data[0].currencies)[0]}</h4>
        <h4>Common Language : ${Object.values(data[0].languages).toString().split(",").join(', ')}</h4>

    </div>
`
    }).catch(() => {
        if( countryName == 0){
            result.innerHTML = "<h3>Input feild is empty</h3>"
        }
        else {
            result.innerHTML = "<h3>Please enter a valid country name</h3>"
        }
    })
})

