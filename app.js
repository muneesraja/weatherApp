

// const sumOfArg = (num1,num2,sum) => {
//     setTimeout(()=>{
//         sum(num1,num2);
//     },2000)
// };

// sumOfArg(4,1,(num1, num2)=>{
//     console.log(num1+num2);
// })

const request = require('request');
const geoLoca = require('./geoLocate');
const yargs = require('yargs');
// https://api.darksky.net/forecast/b8fe3df2fdfd02c711f6e1e9da198194/37.8267,-122.4233

// yargs.command({
//     command:'location',
//     describe:'Enter the location to see the weather',
//     builder:{
//         location:{
//             describe:'location',
//             demandOption:true,
//             type:String
//         }
//     },
//     handler(argv){
        
            
//     }
// })

// yargs.parse();


//Without Yargs
const usrInp = process.argv[2];


if(usrInp == null){
    console.log('Enter a valid location')
}
else{
geoLoca.locaToAxis(usrInp, (error, data)=>{
    if(error){
        console.log(error)
    }else{
        geoLoca.geoLoca(data.latitude, data.longitude, (error, data)=>{
            if(error){
                console.log(error);
            }else{
                console.log(`The temperature is ${data.temp} and the weather is ${data.summary}`);
            }
            
        })
    }
});
}