$( document ).ready( onReady );

function onReady(){
    console.log ('in onReady');
    getMathInput();
    $('#submitButton').on('click', mathSender);
}

function getMathInput(){
//Ajax GET request
$.ajax({
    method: 'GET',
    url: '/mathInput'
}).then (function(response){
    console.log ('back from server successfully:', response);
    //target output element
    let el = $( '#result');
    //empty
    el.empty();
    //loop through array
    for(i=0; i<response.length; i++) {
        //append to DOM
        el.append (`<li> ${response[i].firstNumber} ${response[i].operator} ${response[i].secondNumber} ${response[i].equals} ${response[i].answer}`)
    }
}).catch( function( err ){
    // got an error
    alert( 'not calculating' );
    console.log( 'error:', err );
})
}

function mathSender(){
    console.log ('in MathSender');
//get user input and store in an object
let objectToSend = {
    firstNumber: $( '#firstNumberIn').val(),
    secondNumber: $( '#secondNumberIn').val(),
} 
 console.log ('sending:', objectToSend);
    //AJAX POST with the object
    $.ajax({
        method: 'POST',
        url: '/mathInput',
        data: objectToSend
    })
    .then(function(response){
        console.log ('back from post:', response);
        $( '#firstNumberIn').val('')
        $( '#secondNumberIn').val('')
        getMathInput();
    })
    .catch( function( err ){
        // catch any errors
        alert( 'error adding message' );
        console.log( err );
    })
}