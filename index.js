



function apiCall()
    {
        var x=document.getElementById("search-box").value;

fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${x}`)
.then(response => response.json())
.then(result => {
    var links='';
    result[3].forEach(element => {
        links+=`<a href="${element}" target="_blank" ><li>${element}</li></a>`;
    });
    document.getElementById("links").innerHTML=links;

})
.catch(error => console.log('error', error));
    }