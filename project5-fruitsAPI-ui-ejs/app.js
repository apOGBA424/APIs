/* ******************************
=======
Steps:
=======
1. import dependecies
2. set-up server port
3. declare variables
4. set middlewares
5. test database connection
*/
// ******************************


// dependencies
const express = require('express');
const app = express();

// variables
const PORT = process.env.PORT || 3000;

// middlewares
// db connection


// routes-and-logics
app.get('/', (req, res)=>{
    console.log('app running OK');
    // res.send('hello world on browser');
    res.sendFile('./views/index.html', {root: __dirname});
});


app.listen(PORT, ()=>{
    console.log(`app listening on PORT: ${PORT}`);
});

