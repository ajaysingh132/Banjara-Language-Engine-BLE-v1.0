/* =====================================
   Banjara Language Engine (BLE)
   reader.js v1.0
===================================== */

let books = [];

// पुस्तकें लोड करें
fetch("book.json")
.then(response => response.json())
.then(data => {

    books = data;

    loadBooks();

})
.catch(error => {

    console.log("Book Database Error", error);

});

// पुस्तकों की सूची दिखाएँ
function loadBooks(){

    let output = "";

    books.forEach((book,index)=>{

        output += `

        <div class="card">

            <h2>📚 ${book.title}</h2>

            <p><b>लेखक :</b> ${book.author}</p>

            <p>${book.description}</p>

            <button onclick="openBook(${index})">

                📖 पढ़ें

            </button>

        </div>

        `;

    });

    document.getElementById("library").innerHTML = output;

}

// पुस्तक खोलें

function openBook(id){

    let book = books[id];

    document.getElementById("bookTitle").innerHTML = book.title;

    document.getElementById("bookContent").innerHTML =

    "<h3>"+book.title+"</h3>" +

    "<p>"+book.description+"</p>" +

    "<hr>" +

    "<p>यहाँ पूरी पुस्तक प्रदर्शित होगी।</p>";

}

// फ़ॉन्ट बड़ा

function fontPlus(){

    let book=document.getElementById("bookContent");

    let size=parseInt(window.getComputedStyle(book).fontSize);

    book.style.fontSize=(size+2)+"px";

}

// फ़ॉन्ट छोटा

function fontMinus(){

    let book=document.getElementById("bookContent");

    let size=parseInt(window.getComputedStyle(book).fontSize);

    if(size>14){

        book.style.fontSize=(size-2)+"px";

    }

}

// प्रिंट

function printBook(){

    window.print();

}

// होम

function goHome(){

    window.location="index.html";

}
