const fs = require('fs');
const util = require('util');



// regular
fs.readFile(__filename, 'utf8', (error, contents) => {
    if(error) {
        console.error(error);
    } else {
        console.log(contents);
    }
})


// Promise
function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
      fs.readFile(path, encoding, (error, contents) => {
          if (error) {
              reject(error);
          } else {
              resolve(contents);
          }
      })
  })
}

readFile('text.txt', 'utf8').then(
    contents => {
        console.log(contents);
    },
    error => {
        console.log(error)
    }
)

// node version: 
const readFile = util.promisify(fs.readFile);

