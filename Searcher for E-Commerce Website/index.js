"use strict";

// Mobile Phones & Their Models Objects..
var a = {
  mobiles: {
    samsung: {
      a30: {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
      },
      note10: {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
      },
      s10: {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
      },
    },
    iphone: {
      iphone4: {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      iphone4s: {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
      },
      iphone5: {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
      },
      iphone6: {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
      },
    },
    xiomi: {
      redminote10: {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      redminote11: {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      redmi10: {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      redmi10pro: {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
    },
  },
};

// Seracher for e commerce web

let mobs = document.querySelector("#mobiles");
let models = document.querySelector("#models");
let propList = document.querySelector(".propList");
let valueList = document.querySelector(".valueList");
let error = document.querySelector(".error");

for (const value in a.mobiles) {
  mobiles.innerHTML = mobiles.innerHTML + `<option>${value}</option>`;
}

let SelectedMobModels = () => {
  models.innerHTML = "";
  error.innerHTML = "";
  for (const key in a.mobiles[mobs.value]) {
    models.innerHTML = models.innerHTML + `<option>${key}</option>`;
  }
};

let submit = () => {
  if (mobs.value === "Select Mobile") {
    console.log("You have not selected any mobile phone !");
    error.innerHTML = `<p>You have not selected any mobile phone !</p>`;
  } else {
    let z = a.mobiles[mobs.value][models.value];
    console.log(z);
    let k = Object.keys(z);
    let v = Object.values(z);
    propList.innerHTML = "";
    valueList.innerHTML = "";
    k.forEach((key) => {
      propList.innerHTML = propList.innerHTML + `<li>${key + ":"}</li> `;
    });
    v.forEach((value) => {
      valueList.innerHTML =
        valueList.innerHTML + `<li class="fw-bold">${value}</li> `;
    });
  }
};
