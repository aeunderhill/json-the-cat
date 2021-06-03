const request = require('request')

const fetchBreedDescription = (breedName, callback) => {

  const breedName = breedName.subString(0, 3);
  
  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(page, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    }

    if (data[0]) {
      callback(data[0].description, null);
    } else {
      callback('No breed for you', null);
    }
  });
};


module.exports = fetchBreedDescription;


  
  


