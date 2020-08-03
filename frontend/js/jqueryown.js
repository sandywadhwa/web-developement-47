/*
Find an element which has id = 'table-tag'

document.getElementById('table-data').addEventHander('click', function(){

})
*/

/*
$(tagName)

$("#id")

$(".class")
*/


$('#h1Heading').html('New Heading')

$('#btnGetData').click(function(){
    $.ajax({
        url : '/api/students',
        method: 'GET',
        success : function(res){
            // TODO:  Using JQUERY SYNTAX
            // Add this data as a table to your page
            console.log("RES: " + JSON.stringify(res));
        },
        error: function(err){
            console.log("ERR: "+err);
        }
    })    
})

