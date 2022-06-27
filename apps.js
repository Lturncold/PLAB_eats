var arr = [ 
    "Hougang Capeview",
    "Kallang Wave Mall",
    "Macpherson",
    "Soi 19",
    "Ci Yuan CC",
    "Hougang Mall",
    "Hougang Green",
    "Samwich",
    "Breadtalk HQ",
    "Lor Ah Soo",
    "Singpost",
    "PLQ",
    "Mei mei roast at Ubi",
    "Fish Soup at Defu Lane Hawker Centre",
    "MacPherson prawn noodle",
    "Thai Food at Excalibur centre",
    "Wanton Mee at Ubi Avenue 2 Hawker"
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