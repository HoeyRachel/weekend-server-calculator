//requires
const express = require( 'express' );
const app = express();
//for posts to work
const port = 5000;
const bodyParser = require( 'body-parser' );
// globals


let mathInput = [{
    firstNumber: "",
    secondNumber: "",
    operator: "",
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


app.post( '/mathInput', ( req, res )=>{
    console.log( '/mathInput POST hit:', req.body );
    res.sendStatus( 200 ); // generic "OK", 201 = "CREATED"
    mathInput.push( req.body );
})


