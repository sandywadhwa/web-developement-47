console.log('LOADED');

/* 
Make Call to API Server to get JSON Data
Create A Table and Add to Page
*/

var httpReq = new XMLHttpRequest();

// this will be called when ReadyState Changes
httpReq.onreadystatechange = function(){
    console.log("READY STATE:" + this.readyState);
    if(this.readyState==4){
        var jsonData = this.responseText;
        createAndAddTableToPage(this.responseText);
        console.log(jsonData);
        console.log(JSON.stringify(jsonData));
    }
}

httpReq.open('GET', '/api/students');
httpReq.send();

function createAndAddTableToPage(jsonArray){
    /* Create A Table*/
    jsonArray = JSON.parse(jsonArray);
    //console.log(jsonArray);
    var tableData = "";
    tableData += "<table>";
    tableData += "<tr><th>Name</th><th>Email</th></tr>"
    for(var i=0; i<jsonArray.length;i++){
        tableData += "<tr>";
        tableData += "<td>"+jsonArray[i].name+"</td>"+"<td>"+jsonArray[i].email+"</td>";
        tableData += "</tr>";
    }

    tableData += "</table>";

    /* Add Table to HTML Page - DOM Manipulation*/
    document.getElementById('table-data').innerHTML = tableData;
}