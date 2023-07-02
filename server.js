const express = require('express');  //requires make use of dependencies here express
const serverConfig = require('./configs/server.config');


const app = express(); //app is the central character helps in doing everything 

app.listen(serverConfig.PORT,()=>{    //(portNo,callbackFunction)
    console.log(`server started on the port number ${serverConfig.PORT}`)
})