const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=2df986589c77323838d02acebc1fce62&query=New%20York&units=m";

request({url:url, json:true}, (error,response)=>{
    const data = response.body
    if(error){  
        console.log("Unable to connect to weather service!")

      
    }else{
        console.log("temperatura: " + data.current.temperature + " Chance de chuver: " + data.current.precip)
    }
    
})


const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlvZ29iYXJyb3MwMyIsImEiOiJjbDNnajJ2MHYxMnEwM2twOGZzeGdpOXR0In0.CUEQDHCkjtwVysl8VDgI0A&limit=1";

request({url:url2, json:true}, (error,response)=>{
    const data = response.body
    if(error){  
        console.log("Unable to connect to mapbox service!")
    }else if(data.features.length === 0){  
        console.log("Unable to find location. Try another search.")
    }else{
        console.log(data.features[0].geometry.coordinates[0], data.features[0].geometry.coordinates[1])
    }
    
})