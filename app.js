/* ==========================================
   Banjara Language Engine (BLE) v1.0
   app.js
========================================== */

console.log("BLE v1.0 Loaded");

// ----------------------
// Home Search
// ----------------------

function searchSite() {

    let text = document.getElementById("search");

    if (!text) return;

    let keyword = text.value.trim();

    if (keyword === "") {
        alert("कृपया कोई शब्द लिखें।");
        return;
    }

    window.location.href =
        "dictionary.html?search=" +
        encodeURIComponent(keyword);

}

// ----------------------
// Open Page
// ----------------------

function openPage(page){

    window.location.href = page;

}

// ----------------------
// Coming Soon
// ----------------------

function comingSoon(){

    alert("यह सुविधा अगले संस्करण में उपलब्ध होगी।");

}

// ----------------------
// Copy Text
// ----------------------

function copyText(id){

    let text=document.getElementById(id);

    if(!text) return;

    navigator.clipboard.writeText(text.innerText);

    alert("कॉपी हो गया।");

}

// ----------------------
// Share
// ----------------------

function sharePage(){

    if(navigator.share){

        navigator.share({

            title:"Banjara Language Engine",

            text:"आपणी गोर बोली – आपणी पहचान",

            url:window.location.href

        });

    }else{

        alert("आपका ब्राउज़र Share API को सपोर्ट नहीं करता।");

    }

}

// ----------------------
// Dark Mode
// ----------------------

function toggleDarkMode(){

    document.body.classList.toggle("dark");

}

// ----------------------
// Footer Version
// ----------------------

const version="BLE v1.0 Alpha";

console.log(version);
