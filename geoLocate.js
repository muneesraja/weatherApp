const request = require('request')

const geoLoca = (latitude, longitude, callback) => {
    url = `https://api.darksky.net/forecast/b8fe3df2fdfd02c711f6e1e9da198194/${latitude},${longitude}`

    request({url, json:true},(error, {body:reso})=>{
        if(error){
            callback('Could not connect to the weather service !');
        }else if(reso.error){
            callback('Try different location');
        }else{
            callback(undefined, {temp: reso.currently.temperature, 
                                 summary: reso.currently.summary});
        }
    })
}

const locaToAxis = (location, callback)=>{
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoibXVuZWVzcmFqYSIsImEiOiJjank0cXNxdzcwM3RsM25uenA2cDc0anl0In0.A2DfOTaEru5QEmH2Dirzqg'
    request({url, json:true},(error, {body:reso})=>{
        if(error){
            callback('Could not connect to the Location service !');
        }else if(reso.features == 0){
            callback('Try different location');
        }else{
            callback(undefined, {latitude: reso.features[0].center[1], 
                                 longitude: reso.features[0].center[0]});
        }
    })
}

module.exports = {geoLoca,
                  locaToAxis};