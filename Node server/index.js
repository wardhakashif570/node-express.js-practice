const http=require('http');
const fs=require('fs');
const path=require('path');

const hostname="localhost";
const port=3000;


const server=http.createServer((req,res)=>{
    //console.log(req.header);
    console.log('request for ' + req.url +'by method' + req.method);
     if(req.method =='GET'){
          var fileURL;
          if(req.url=='/'){
              fileURL="/index.html"; }
          else{
            fileURL=req.url; }
                         
     var filepath=path.resolve('./public' + fileURL);
     const fileExt =path.extname(filepath);
     if(fileExt=='.html'){
         fs.exists(filepath,(exists)=>{
            if(!exists){
               res.statusCode=404;
               res.setHeader('Content-Type','text/html');
               res.end(`<html><body><h1>Error 404' +fileURL+'does not exists' :</h1></body></html>`);
                       } 
       
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        fs.createReadStream(filepath).pipe(res);
        //res.end(`<html><body><h1>Error 404' +fileURL+'does not exists' :</h1></body></html>`);} })}
                    })
                    }
        else{
            res.statusCode=404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404' +fileURL+'not a HTML file :</h1></body></html>');
          }
        }        
       else{
                res.statusCode=404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404' +fileURL+'not supported :</h1></body></html>');
            }
        })
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});

     