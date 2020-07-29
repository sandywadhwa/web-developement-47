function printHello(){
    console.log("Hello");
}

// Call this function every 1 second - Forever

// while(true){
//     setTimeout(printHello, 1000);
// }


//setInterval(printHello, 1000);

// HackerRank when we submit a code
// We need to poll (check if code passed or not)



var intervalId;
var count = 5;
function stopAfterSometime(){
    if(count==0)
        clearInterval(intervalId);
    else
        console.log("Hello");
    count--;
}


intervalId = setInterval(stopAfterSometime, 1000);
