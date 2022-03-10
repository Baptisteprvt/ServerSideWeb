const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const newsMiddleware = require('./lib/middleware');


//app.use(cookieParser());
app.use(cookieParser("una is great"));
app.use(express.static('public'));
app.use(newsMiddleware);
app.use(express.urlencoded({ extended: true })) 
const home = require('./routes/home');
app.use('/', home);
const staff = require('./routes/staff');
app.use('/staff', staff);
// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use( (req, res) => {
   
    res.status(404);
    res.render('404');
});

app.use( (req, res) => {
   
  res.status(500);
  res.render('500');
});

// custom 500 page
/*app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});*/


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


