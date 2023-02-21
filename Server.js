const http = require('http')
const host = 'http://localhost'
const port = 3000;
const express = require('express');
const os = require('os');
const data = require('./pcRam.js');
const app = express();





app.get('/', (req, res) => {
    let url = req.url;

    if(url === '/data') {
        res.end(JSON.stringify(data, null, 2));
    }else{
        res.end('<h1> Olá <h1>');
    }

    
  
  const usage = Math.round((1 - freeRAM / totalRAM) * 10000) / 100;

       


  res.json(data);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}
)}
