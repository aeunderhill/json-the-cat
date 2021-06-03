const request = require('request')
breed = process.argv.slice(2)

const page = `https://api.thecatapi.com/v1/breeds/search/${breed}`

request(page, (error, response, body) => {

const data = JSON.parse(body);

if (error) {
  console.log(error)

}

if (data[body] === breed) {
  console.log(data.description)
  

}

else {
  console.log("Couldn't find this breed. Oh No!")
}


});
   


