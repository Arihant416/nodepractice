const fs = require('fs');
// const book = {
//   title:'Ego is the Enemy',
//   author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author)

// fs.writeFileSync('json1.json', bookJSON);
// const dataBuffer = fs.readFileSync('json1.json');
// const dataJSON = dataBuffer.toString();
// // console.log(dataBuffer.toString());
// const data = JSON.parse(dataJSON);
// console.log(data);
// console.log(data.author);

const fetchedString = fs.readFileSync('json1.json').toString();
const parsedData = JSON.parse(fetchedString
);
parsedData.name = "Superman"
parsedData.planet = "Krypton"
parsedData.place = "Metropolis"
fs.writeFileSync('json1.json', JSON.stringify(parsedData));