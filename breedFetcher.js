const request = require('request');

//'http://www.example.edu '



const fetchBreedDescription = function (breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(website, (error, response, body) => {
    if (error) {
      callback(error, null); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, "cat not found")
      } else {
        callback(null, data[0].description);
      }

    }


  }


  )
};

module.exports = { fetchBreedDescription }





