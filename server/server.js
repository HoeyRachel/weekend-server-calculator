//requires
let express = require( 'express' );
let app = express();
//for posts to work
let bodyParser = require( 'body-parser' );

app.use( express.static( 'server/public' ) );
// NEEDED for POSTS to work
app.use( bodyParser.urlencoded( { extended: true }))

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on', port );
})

//routes