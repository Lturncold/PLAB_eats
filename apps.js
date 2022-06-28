var arr = [ 
    "Hougang Capeview",
    "Kallang Wave Mall",
    "Macpherson Stretch",
    "Soi 19",
    "Ci Yuan CC",
    "Hougang Mall",
    "Hougang Green",
    "Samwich",
    "Breadtalk HQ",
    "Lor Ah Soo",
    "Singpost",
    "PLQ",
    "Mei Mei Roast at Ubi",
    "4 Defu Lane 10 (Fish Soup)",
    "Excalibur Centre (Thai Food)",
    "Ubi Avenue 2 (Wanton Mee)",
    "18 Taiseng"
];

document.getElementById("values").value = arr.join('\r\n');

function eraseText() {
    if (document.getElementById("values").value != "") {
        document.getElementById("values").value = "";
        return false;
    }
}

function refreshPage() {
    location.reload();
    return false;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const textarea = document.getElementById('values');

// const btn = document.getElementById('clearBtn');

// btn.addEventListener('click', function eraseText() {

//   textarea.value = '';
// });