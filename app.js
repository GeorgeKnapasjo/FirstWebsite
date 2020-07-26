//imported express module
const express = require('express');
//created an instance of an app by invoking the express function
const app = express();
const bodyParser = require('body-parser')
const User = require('./public/data/user')
const userRepo = require('./public/data/userRepo')



//allow for static files e.g. html, css, js to be requested and returned in a response
app.use(express.static('public'))
//public will just be the name of the folder that contains all docs i.e. index.js/css/html 
//only reason im not using it is because of referencing

//these are used so that we can use bodyparser to be able to read data from the body of the request
app.use(bodyParser.urlencoded({extended: false}))  //tells express to extract any data (if there is any) from the body of post requests
//these are used so that we can load templates
//REMEMBER to always check the file route (second part)
app.set('views', './public/views')
app.set('view engine', 'hbs')

//regustered a route/url, get registers the route, the first argument is the name of the route
//the second one is the function that will handle any requests for the route
//the response being motorworld
//usually if the page is just app.get('/') this will be the homapge
app.get('/message', function (request, response) {
    response.send('<h1> my name a jeff <h1>')
})
//this is used to get dynamic requests, that is, there is no folder in the website server called http:localhost3000/message,
// instead we are generating this dynamically
app.get('/', function (request, response) {
    response.send('<h1> home page <h1>')
})

//starting up the server
const port = 3000



app.post("/user/confirm-details", function (req, res) {
    let user1 = new User(
        req.body.fname,
        req.body.lname,
        req.body.user,
        req.body.email
    )
    userRepo.createUsers(user1)

    res.render('confirm-details', {
        user: user1
    })
})

// userRepo.createUsers(new User())
//cntrl c will stop the server
app.listen(port, function () {
    console.log(`the express server is listening: http://localhost:${port}`)
})