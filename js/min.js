
var bookmarkname = document.getElementById('bookName');
var url = document.getElementById('webUrl');
var tBody = document.getElementById('tbody');

if (localStorage.getItem('sites') == null) {
    var Booklist = [];
}
else{
    
    var Booklist = JSON.parse(localStorage.getItem('sites'));
    displayLinks();

}



// add
function Add() {

    var Weblink = {
        bName: bookmarkname.value,
        wUrl: url.value
    }

    Booklist.push(Weblink);
    var S = JSON.stringify(Booklist);
    localStorage.setItem('sites', S);

    displayLinks();

    clearInputs();
}

// cleaar
function clearInputs() {
    bookmarkname.value = '';
    url.value = '';
}

// display
function displayLinks() {

    var trs = '';
    for (var i = 0; i < Booklist.length; i++) {

        trs += ` <tr>
        <td>${Booklist[i].bName}</td>
        <td>
            <button class="btn btn-primary"><a href="${Booklist[i].wUrl}" target="_blank">Visit</a></button>
        </td>
        <td>
            <button onclick="deleteB(${i})" class="btn btn-primary delete">Delete</button>
        </td>
        </tr>`

    }
    tBody.innerHTML = trs;
}
//  delete
function deleteB(indexofbookmark) {

    Booklist.splice(indexofbookmark, 1);
    localStorage.setItem('sites' ,JSON.stringify(Booklist));
    displayLinks();
}