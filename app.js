const express = require('express');
const http = require('http');


//Creating server
const app = express();
const server = http.createServer(app);

//Running server
const PORT = '3000'; //Change this value if you want server to listen at different port
server.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
});

//Setting express middleware
app.use(express.static('./appDirectory/public')); //You can change path to './appDirectory' if you want to host files from same directory as index.html
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Setting routes
const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);
