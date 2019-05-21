const express = require('express');
const app = express();


app.use(require('./middleware/headers'));

const yelpapi = require('./controllers/yelpapi-controller');

app.use('/yelpapi',yelpapi)


app.listen(3000, function(){
    console.log('App is listening on 3000.')
});