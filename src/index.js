
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const route = require('./routes');
const app = express()
const port = 3000

// HTTP logger
// app.use(morgan('combined'));

// static file
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json())
// app.use(express.());


// teamplate engine
        app.engine('hbs', exphbs.engine({extname: '.hbs'}));
        app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourse/views'));

// console.log("PATH",path.join(__dirname, 'resourse/views'));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})