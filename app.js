const express = require('express');
const articalRouters = require('./routers/articalRoutes')
// make app here //
const app = express();
// gatting data from request 
app.use(express.json())

// make entry poient route or (/) route //
app.get('/', (req, res) => {
    res.send("Hello world")
});

// There is use middleware for artical router 
app.use('/artical', articalRouters)

// port listener //
app.listen('4000', () => {
    console.log(`This application is running in port : 4000`)
})