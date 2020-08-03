console.log('LOADED');

/* 
Make Call to API Server to get JSON Data
Create A Table and Add to Page
*/

document.getElementById('btnGetData').addEventListener('click', getServerData);
//document.getElementById('btnGetData').onclick = getServerData;

function getServerData(){
    var httpReq = new XMLHttpRequest();

    // this will be called when ReadyState Changes
    httpReq.onreadystatechange = function(){
        console.log("READY STATE:" + this.readyState);
        if(this.readyState==4){
            console.log(this.status);
            console.log(this.statusText);
            if(this.status==200){
                var jsonData = this.responseText;
                createAndAddTableToPage(this.responseText);
                console.log(jsonData);
                console.log(JSON.stringify(jsonData));
            }
        }
    }
    
    httpReq.open('GET', '/api/students', true);
    httpReq.send();


    /* SYNCHRONOUS REQUEST
    httpReq.open('GET', '/api/students', false);
    httpReq.send();
    console.log(httpReq.responseText);
    */
}


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
    var divEle = document.getElementById('table-data');
    divEle.innerHTML = tableData;
    //divEle.width = '200px';
    //divEle.setAttribute('width', 200);
    //divEle.style.backgroundColor = 'green';
}