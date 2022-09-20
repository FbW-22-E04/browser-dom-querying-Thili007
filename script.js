"use strict";

// changing body fonts

document.querySelector("body").style.fontFamily = "Garamond";
document.querySelector("body").style.fontSize = "1.5rem";
document.querySelector("body").style.margin = "1.7rem";

//title Center

document.querySelector(".title").style.textAlign = "center";

// Changing main food-Category bgColor and font-styles

// Main class styles

const mainFlex = document.querySelector("main");

mainFlex.style.gap = "1rem";

// functions for media queries

const sizeChanger = (val) => {
  if (val.matches) {
    mainFlex.style.display = "flex";
    mainFlex.style.flexDirection = "column";
  } else {
    mainFlex.style.display = "grid";
    mainFlex.style.gridTemplateColumns = "auto auto auto";
  }
};

const obj = window.matchMedia("(max-width:600px)");

sizeChanger(obj);

obj.addListener(sizeChanger);

// Changing Background Colors

// const foodCategory1 = (document.querySelector(
//   ".main"
// ).childNodes[1].style.backgroundColor = "rgb(220, 180, 226)");
//
// const foodCategory2 = (document.querySelector(
//   ".main"
// ).childNodes[3].style.backgroundColor = "rgb(220, 150,126)");
//
// const foodCategory3 = (document.querySelector(
//   ".main"
// ).childNodes[5].style.backgroundColor = "rgb(120, 200,226)");

// Label class Styles

const foodLabelItems = document.querySelectorAll("label");
foodLabelItems.forEach((el) => {
  el.style.textDecoration = "underline wavy darkCyan 2px";
  el.style.textShadow = "4px 4px 5px red";
});

// ul class Styles

const foodItems = document.querySelectorAll(".food-category");
foodItems.forEach((element) => {
  element.style.color = "darkGreen";
  element.style.fontStyle = "italic";
  element.style.lineHeight = "2.8rem";
});

// allergy warnings

const warningId = document.getElementById("warning");

warningId.style.textAlign = "center";
warningId.style.fontStyle = "italic";
warningId.style.fontSize = "3rem";

// allergies list style

const allergyList = document.querySelector(".allergy-warning");

allergyList.style.display = "grid";
allergyList.style.justifyContent = "center";
allergyList.style.color = "red";

const allergyUl = document.querySelector(".allergies");

allergyUl.style.display = "flex";
allergyUl.style.flexDirection = "column";
allergyUl.style.lineHeight = "2rem";
allergyUl.style.textAlign = "left";
allergyUl.style.listStyle = "none";

const evenSelector = document.querySelectorAll(".allergies :nth-child(even)");

evenSelector.forEach((element) => {
  element.style.backgroundColor = "lightblue";
});

// footer Styles

const footer = document.querySelector("footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "10rem";
footer.style.flexFlow = "row wrap";

const footerDesc = document
  .querySelectorAll(".food-desc")
  .forEach((element) => {
    element.style.width = "150px";
    element.style.height = "150px";
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.border = "5px solid orange";
    element.style.borderRadius = "50%";
    element.style.margin = "20px ";
  });

const bgGenerator = () => {
  const c1 = Math.ceil(Math.random() * 255);
  const c2 = Math.ceil(Math.random() * 255);
  const c3 = Math.ceil(Math.random() * 255);
  const c4 = Math.random().toFixed(1);

  return `rgba(${c1}, ${c2}, ${c3}, ${c4})`;
};

const foodCategory = document.querySelectorAll(".food-category");

foodCategory.forEach((el) => {
  el.style.backgroundColor = bgGenerator();
});
