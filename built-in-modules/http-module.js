const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url ==='/'){
        res.end('Welcome to my HOME PAGE!!')
    }
    else if (req.url === '/about'){
        res.end('This is our ABOUT US PAGE!!')
    }
    else
    {
        res.end(`
    <h1>Oops </h1>
    <p>We can't seem to find you are looking for</p>
    <a href="/">Back Home</a>
    `)
}
})

server.listen(5001)
