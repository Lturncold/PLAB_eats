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
  "805 Hougang Central",
];
// Food data
var foodPlaces = [
  { name: "Hougang Capeview", reco: "Ayam Penyet, Ban Mian" },
  { name: "Kallang Wave Mall", reco: "Astons, Encik Tan, Yu Kee" },
  { name: "Macpherson Lane", reco: "Bak Chor Mee, Rojak, Cai Fan (Cheap!)" },
  { name: "Soi 19 Kovan", reco: "Wanton Mee" },
  { name: "Ci Yuan CC", reco: "Lor Mee" },
  { name: "Hougang Mall", reco: "Kopitiam Ban Mian, Saizeriya" },
  { name: "Hougang Green", reco: "Arnold Chicken, Thai Food" },
  { name: "Samwitch", reco: "Beef Sandwich, Chicken Sandwich" },
  {
    name: "Breadtalk HQ",
    reco: "Fried Porridge, Fried Rice, Fishball Noodle, Fish Soup",
  },
  { name: "Lor Ah Soo Hawker", reco: "Lor Mee, Crispy Pancake" },
  { name: "Singpost Centre", reco: "Lao Wang" },
  { name: "PLQ", reco: "LIKE Yakiniku, Playmade, Auntie Anne's" },
  { name: "Mei Mei Roast at Ubi", reco: "Roast Meat" },
  { name: "4 Defu Lane 10", reco: "Fish Soup" },
  { name: "Excalibur Centre", reco: "Thai Food" },
  { name: "Ubi Avenue 2", reco: "Wanton Mee" },
  { name: "18 Taiseng", reco: "Let's Eat, Tim Ho Wan, Korean Food" },
  { name: "805 Hougang Central", reco: "Tom Yum Ban Mian" },
  { name: "Nakhon Kovan", reco: "Thai Food" },
  { name: "Ikea Tampines", reco: "Meat Balls, Daim Cake" },
  { name: "Hougang Rivercourt", reco: "Thai Food @ Kofu" },
];

// Create Array for just venue name
var foodPlacesName = [];

for (var item in foodPlaces) {
  foodPlacesName.push(foodPlaces[item].name);
}

// Create Array for just venue reco
var foodPlacesReco = [];

for (var item in foodPlaces) {
  foodPlacesReco.push(foodPlaces[item].reco);
}

// Splash Intro
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// Dataset
// document.getElementById("values").value = arr.join("\r\n"); //set the values in textbox to the array
document.getElementById("values").value = foodPlacesName.join("\r\n"); //set the values in textbox to the array

// Create New List button function
function eraseText() {
  if (document.getElementById("values").value != "") {
    document.getElementById("values").value = "";
    return false;
  }
}

// Reset button function
function refreshPage() {
  // location.reload();
  // return false;
  document.getElementById("values").value = foodPlacesName.join("\r\n");
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const textarea = document.getElementById('values');

// const btn = document.getElementById('clearBtn');

// btn.addEventListener('click', function eraseText() {

//   textarea.value = '';
// });

// Generate List for Venues and Reco
var ol = document.createElement("ol");
// var ul = document.createElement("ul");
// for (let i of foodPlacesName) {
//   let li = document.createElement("li");
//   li.innerHTML = i;
//   ol.appendChild(li);

// for (let i of foodPlacesReco) {
//   let li = document.createElement("li");
//   li.innerHTML = i;
//   ul.appendChild(li);
// }
// };
for (i = 0; i < foodPlacesName.length; ++i) {
  // Create an item for each one
  let li = document.createElement("li");

  // Add the item text
  li.innerHTML = foodPlacesName[i];

  // Add listItem to the listElement
  ol.appendChild(li);
  let ul = document.createElement("ul");
  let liTwo = document.createElement("li");
  liTwo.innerHTML = foodPlacesReco[i];
  ul.appendChild(liTwo);
}

//document.getElementById("ulOne").appendChild(ol);
// document.getElementById("venues").appendChild(ol);
// document.getElementById("abcde").appendChild(ul);

//document.getElementById("testABC").innerHTML = arr[0];

let myTable = document.querySelector("#table");
let employees = [
  { name: "James", age: 21, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];
let headers = ["Venue", "Recommendation"];

let table = document.createElement("table");
let headerRow = document.createElement("tr");
headers.forEach((headerText) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);
foodPlaces.forEach((emp) => {
  let row = document.createElement("tr");
  Object.values(emp).forEach((text) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });
  table.appendChild(row);
});
myTable.appendChild(table);
