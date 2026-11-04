const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`You used method: ${req.method}
        ${JSON.stringify(req.headers)}`);
}).listen(3000, () => {
    console.log("Hello from Node Server!");
})

import {URL} from 'url';
const urlStr = new URL('http://localhost:3000/users/list?role=admin&active=true#top')
console.log(urlStr.hostname);
console.log(urlStr.pathname);
console.log(urlStr.protocol);
console.log(urlStr.search);
console.log(urlStr.hash);

const url5 = new URL('https://site.com/products?id=15&type=book&lang=en')
console.log(url5.searchParams.get('id'));
console.log(url5.searchParams.get('type'));
console.log(url5.searchParams.get('lang'));

const url6 = new URL('https://app.com/search?query=node&sort=asc')
url6.searchParams.set('sort','desc')
url6.searchParams.append('page','3')
url6.searchParams.delete('query')
console.log(url6);

