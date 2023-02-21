const os = require('os');


const {arch, platform, totalmem, freemem} = os


setInterval(() => {
    const totalRAM = totalmem()/1024/1024;
const freeRAM = freemem()/1024/1024; 

const data = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: parseInt(totalRAM),
    FreeRAM: parseInt(freeRAM),
    Usage: usage + '%',
  };

exports.data = data











}, 1000)