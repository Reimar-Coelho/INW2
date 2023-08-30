const http = require('http');
const server = http.createServer(function(request, response){
    response.writeHead (200, {"Content-Type":"text/html"})
    if (request.url == "/") {
        response.write ("<h1>Main Page / Root</h1>")
    }
    else if(request.url == "/login") {
        response.write("<meta charset='UTF-8'><h1>Página de login</h1>")
    }
    else {
        response.write("<meta charset='UTF-8'><h1>A página que você está procurando não existe</h1>")
    }
    response.end();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})