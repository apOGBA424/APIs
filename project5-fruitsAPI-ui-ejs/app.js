/* ******************************
=======
Steps:
=======
1. import dependecies
2. set-up server port
3. declare variables
4. set middlewares
*/
// ******************************


// dependencies
const express = require('express');
const app = express();


// variables
const PORT = process.env.PORT || 3000;


// ******* middlewares *******
// static files and folder paths
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));

// set views
app.set('view engine', 'ejs');
// app.set('views', './views');



// ********** routes-and-logics **********
// home page
app.get('/', (req, res)=>{
    console.info('app running OK');
    // res.send('hello world on browser');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title0: 'Home' });
});

// dashboard page
app.get('/dashboard', (req, res)=>{
    console.info(`dashboard page running on port ${PORT}`);
    res.render('dashboard', {title1 : 'Dashboard'});
});

// details page
app.get('/details', (req, res)=>{
    console.info(`details page running on port ${PORT}`);
    res.render('details', {title2 : 'Details'});
});

// sign-in page
app.get('/sign-in', (req, res)=>{
    console.info(`sign-in page running on port ${PORT}`);
    res.render('sign-in', {title3 : 'Sign-in'});
});

// sign-out page
app.get('/sign-up', (req, res)=>{
    console.info(`sign-out page running on port ${PORT}`);
    res.render('sign-up', {title4 : 'Sign-Up'});
});

// 404 page
app.use((req, res)=>{
    console.info(`404 page running on port ${PORT}.`);
    res.render('404', {title5 : '404 page'});
});



app.listen(PORT, ()=>{
    console.log(`app listening on PORT: ${PORT}`);
});

