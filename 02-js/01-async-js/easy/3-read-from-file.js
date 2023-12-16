//  Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('node:fs');

//1
fs.readFile('./1-counter.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('fetching counter 1',data);
});

//2
try {
    const data = fs.readFileSync('./2-counter.js', 'utf8');
    console.log(data,"fethcing success")
} catch(error){
    console.log(error);
}