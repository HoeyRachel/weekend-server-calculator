$( document ).ready( onReady );

function onReady(){
    console.log ('in onReady');
    getMathInput();
}

function getMathInput(){
//Ajax GET request
$.ajax({
    method: 'GET',
    url: '/mathInput'
});
// .then (function(response){
//     console.log ('back from server with:', response);

// }).catch(function(err){
//     alert ('Not Working');
//     console.log (err);
// })
}