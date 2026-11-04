const http=require("http")
http.createServer((req, res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
        console.log("JSON accepted");
        res.end("JSON accepted");
    } else {
        console.log("Unsupported request");
        res.end("Unsupported request");
    }

    if(req.method==='GET'&&req.url==='/hello'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello from GET");
    } 
    else if (req.url === '/hello' && req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello from POST");
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not supported");
    }

}).listen(3000,()=>{
    console.log("the server run")
})