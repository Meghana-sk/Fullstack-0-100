// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('node:fs');

const content = '//Example content';

fs.writeFile('./2-counter.js',content,err => {
    if(err){
        console.log('error writing content into file');
    }
    console.log('writing content successful').
})