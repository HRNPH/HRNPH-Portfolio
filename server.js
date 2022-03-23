//import requirements

require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

//error_routes
const failure = require('./routes/0failure');
//routes-variable (web_page)
const mainRoute = require('./routes/main');

//basic_website_resource(html,css,etc)
app.set ( "view engine", "ejs" );
app.use(express.static(__dirname + '/public/'));

//website_use_routes
app.use('/', mainRoute);
app.use('/failure', failure);

app.listen(port, () => {
    console.log(`server listening on
       port ${port}!`)
  });
  