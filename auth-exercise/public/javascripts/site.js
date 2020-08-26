// Once Page is Ready We will run our code
$(document).ready(function(){
    console.log("DOCUMENT IS READY 1");

    /* Where to get username - FIRST TIME MAKE API CALL*/
    /* After API Call - Store it in local storage */
    /* Second time onwards use it from localStorage*/

    var lsUser = window.localStorage.getItem('user');
    if(lsUser){
        console.log("FOUND USER IN LS");
        var lUserObj = JSON.parse(lsUser);
        $('#username').text(lUserObj.username);
    }
    else{
        console.log("NOT FOUND USER IN LS - MAKING SERVER CALL");
        getUserNameFromServer();
    }

    function getUserNameFromServer(){
        $.ajax({
            url: '/api/user',
            method: 'GET'
        })
        .then(function(result){
            console.log("RESULT: "+JSON.stringify(result));
            window.localStorage.setItem('user', JSON.stringify(result));
            $('#username').text(result.username);
        })
    }

    $('#btnLogout').click(function(){
        console.log("LOGOUT CALLED");
        localStorage.clear();
        $('#username').text('');
        // Make a Server Call also to logout
        // So that Server Session is also destroyed
    })

})

// SHORTCUT FOR ABOVE SYNTAX
// DEFINING A FUNCTION TO RUN ON PAGE LOAD
$(function(){
    console.log("DOCUMENT IS READY 2");
})