// create a server

const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    console.log('I am a server.')
});

const port = 8000;
const hostname = 'localhost';
app.listen(port, hostname, () => {
    console.log(`Server at http://${hostname}:${port}/`);
});