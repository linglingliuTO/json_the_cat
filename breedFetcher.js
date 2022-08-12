const request = require('request');

const catType = process.argv.slice(2)[0];

//'http://www.example.edu '

const website = `https://api.thecatapi.com/v1/breeds/search?q=${catType}`



request(website, (error, response, body) => {

 if (error) {
    console.log('error:', error); // Print the error if one occurred
 }
    const data = JSON.parse(body);

 if (data[0]=== undefined) {
    console.log("Error: Cat Type not found ")


  } else {
    console.log(data[0].description);
  }
 
}
  




)





