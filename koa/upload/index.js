const koa = require('koa');

const logger = require('koa-logger');
const serve = require('koa-static');
const koaBody = require('koa-body');

const fs = require('fs');
const os = require('os');
const path = require('path');

const app = new koa();

//const Router = require('koa-router');

app.use(logger());

app.use(koaBody({ multipart: true })); 
// multipart indicates it will be a form
app.use(async (ctx, next) => {
    await next();
    if (ctx.body || !ctx.idempotent) return // post get delete are idempotent
    ctx.redirect('/404.html');
});

app.use(serve(path.join(__dirname, '/views')));

app.use(async (ctx, next) => {
    if ('POST' !== ctx.method) return
    const file = ctx.request.files.file;
    //console.log(ctx.request.files.file);
    const reader = fs.createReadStream(file.path)
    const writer = fs.createWriteStream(path.join(__dirname, '/files', Math.random().toString() ) )   
        // hashes for security 
        
    reader.pipe(writer);

    //stream format - for security and validation
    console.log(
        'Uploading %s -> %s', 
        file.name, 
        writer.path
    );
    ctx.redirect('/');
});

app.listen(8000);

// Amagi server sample
/* set file size limit
file tpe
mime type
if it has an id
create write stream - pipe it on error  */


// sql, swagger, postgre sql, json web token