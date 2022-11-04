//importing INDIVIDUAL methods from a module
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./first.txt','utf8');
const second = readFileSync('./second.txt','utf8');

//console.log(first,'\n',second);

//Creates a new file and writes to it
// writeFileSync('./result-file.txt',`This is the resulting file with contents from two files read before.\n ${first} \n ${second}`);

//To append to a file
writeFileSync('./result-file.txt','\n***APPENDED CONTENT***', {flag: 'a'})