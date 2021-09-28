//requires
const express = require( 'express' );
const app = express();
//for posts to work
const bodyParser = require( 'body-parser' );
// globals
const port = 5000;
let mathInput = [{
    firstNumber: 9,
    secondNumber: 1,
    operator: " + ",
    equals: "=",
    answer: ""
}];

app.use( express.static( 'server/public' ) );
// NEEDED for POSTS to work
app.use( bodyParser.urlencoded( { extended: true }))




// spin up server
app.listen( port, ()=>{
    console.log( 'server up on', port );
})

//routes

app.get( '/mathInput', ( req, res )=>{
    console.log( '/mathInput GET hit' );
    res.send( mathInput );
})
