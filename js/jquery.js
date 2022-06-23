$(document).ready(function(){

//  color animation
var state = true;
$( "#button" ).on( "click", function() {
  if ( state ) {
    $( "#effect" ).animate({
      backgroundColor: "#aa0000",
      color: "#fff",
      width: 500
    }, 1000 );
  } else {
    $( "#effect" ).animate({
      backgroundColor: "#fff",
      color: "#000",
      width: 240
    }, 1000 );
  }
  state = !state;
});



// 


var state = true;
$( "#button2" ).on( "click", function() {
  if ( state ) {
    $( "#effect2" ).animate({
      backgroundColor: "#aa0000",
      color: "#fff",
      width: 900
    }, 1000 );
  } else {
    $( "#effect2" ).animate({
      backgroundColor: "#fff",
      color: "#000",
      width: 600
    }, 1000 );
  }
  state = !state;
});


   
});

