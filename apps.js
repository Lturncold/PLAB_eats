var arr = [ 
    "Hougang Capeview",
    "Kallang Wave Mall",
    "Macpherson Lane",
    "Soi 19 Kovan",
    "Ci Yuan CC",
    "Hougang Mall",
    "Hougang Green",
    "Samwitch",
    "Breadtalk HQ",
    "Lor Ah Soo Hawker",
    "Singpost Centre",
    "PLQ",
    "Mei Mei Roast at Ubi",
    "4 Defu Lane 10 (Fish Soup)",
    "Excalibur Centre (Thai Food)",
    "Ubi Avenue 2 (Wanton Mee)",
    "18 Taiseng",
    "805 Hougang Central"
];
// Splash Intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(() => {
       
        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
               span.classList.add('active'); 
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
           logoSpan.forEach((span,idx)=>{
           
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
           }) 
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);

    })
})

// const {values} = require('script.js');
document.getElementById("values").value = arr.join('\r\n');
// document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q=" + "670171" + "&t=&z=17&ie=UTF8&iwloc=&output=embed";
// document.getElementById("testh3").innerHTML = values[0];

function eraseText() {
    if (document.getElementById("values").value != "") {
        document.getElementById("values").value = "";
        return false;
    }
}

function refreshPage() {
    // location.reload();
    // return false;
    document.getElementById("values").value = arr.join('\r\n');
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const textarea = document.getElementById('values');

// const btn = document.getElementById('clearBtn');

// btn.addEventListener('click', function eraseText() {

//   textarea.value = '';
// });


