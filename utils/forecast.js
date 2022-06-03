const request = require("request")

const forecast = (latitude,longitude, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=2df986589c77323838d02acebc1fce62&query="+latitude+","+longitude+ "&units=m";
    request({url, json:true}, (error,{body}) => {
        if(error){
            callback("Unable to connect to weatherstack services.")
        }else if(body.error){
            callback("Unable to find location.")
        }else{
            callback(undefined, "Temperature: " + body.current.temperature + " Chance of raining: " + body.current.precip)
        }
    })
}

module.exports = forecast