const express = require('express');  //requires make use of dependencies here express

const app = express(); //app is the central character helps in doing everything 

app.listen(3333,()=>{    //(portNo,callbackFunction)
    console.log("Listening to port 3333 .Server Started")
})