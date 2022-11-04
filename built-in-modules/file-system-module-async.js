const { readFile, writeFile } = require('fs');


// 3rd Argument is the callback function needed for every ASYNC readfile and writefile ASYNC functions
readFile('./first.txt','utf8',(err, result) =>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./seconds.txt','utf8',(err,result) =>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./result-file-async.txt',`Here is the result for ASYNC FS Methods:\n ${first},\n ${second}`,(err, result) =>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})

// This will run before the callback function runs in the above code
// Since this is a async call
console.log("Text after async call");