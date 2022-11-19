"use strict";

// Fade

var fadeEl = document.querySelector(".fade");
var hasScrolled = false;
window.addEventListener("scroll", function () {
  if (!hasScrolled) {
    fadeEl.style.opacity = "0.5";
    hasScrolled = true;
    //add argument for opacity to not change after button click also
  }
  ;
});

// Filters
var filtersEl = document.querySelector(".filters");
var project1El = document.querySelector(".project:nth-child(1)");
var project2El = document.querySelector(".project:nth-child(2)");
var project3El = document.querySelector(".project:nth-child(3)");
var project4El = document.querySelector(".project:nth-child(4)");
var project5El = document.querySelector(".project:nth-child(5)");
var project6El = document.querySelector(".project:nth-child(6)");
var htmlEl = document.querySelector("html");
filtersEl.addEventListener("click", function (e) {
  //remove Fade
  fadeEl.style.opacity = "0";

  //make clicked button active
  document.querySelector(".filter-btn--active").classList.remove("filter-btn--active");
  e.target.classList.add("filter-btn--active");

  //change image opacities
  htmlEl.style.setProperty("--default-opacity", "0.4");
  htmlEl.style.setProperty("--hover-opacity", "0.3");

  //Reorganize Grid
  var filterText = e.target.textContent;
  if (filterText === "All") {
    project1El.style.opacity = "1";
    project1El.style.transform = "scale(1)";
    project2El.style.opacity = "1";
    project2El.style.transform = "scale(1)";
    project3El.style.opacity = "1";
    project3El.style.transform = "scale(1)";
    project4El.style.opacity = "1";
    project4El.style.transform = "scale(1)";
    project5El.style.opacity = "1";
    project5El.style.transform = "scale(1)";
    project6El.style.opacity = "1";
    project6El.style.transform = "scale(1)";
  } else if (filterText === "Front end") {
    project1El.style.opacity = "0";
    project1El.style.transform = "scale(0)";
    project2El.style.opacity = "0";
    project2El.style.transform = "scale(0)";
    project5El.style.opacity = "0";
    project5El.style.transform = "scale(0)";
    project6El.style.opacity = "0";
    project6El.style.transform = "scale(0)";
    project3El.style.transform = "translateX(-684px)";
    project3El.style.opacity = "1";
    project4El.style.transform = "translate(340px, -502px)";
    project4El.style.opacity = "1";
  } else if (filterText === "Back end") {
    project1El.style.opacity = "0";
    project1El.style.transform = "scale(0)";
    project2El.style.opacity = "0";
    project2El.style.transform = "scale(0)";
    project3El.style.opacity = "0";
    project3El.style.transform = "scale(0)";
    project4El.style.opacity = "0";
    project4El.style.transform = "scale(0)";
    project5El.style.transform = "translate(-340px, -359px)";
    project5El.style.opacity = "1";
    project6El.style.transform = "translate(-340px, -502px)";
    project6El.style.opacity = "1";
  } else if (filterText === "Full stack") {
    project3El.style.opacity = "0";
    project3El.style.transform = "scale(0)";
    project4El.style.opacity = "0";
    project4El.style.transform = "scale(0)";
    project5El.style.opacity = "0";
    project5El.style.transform = "scale(0)";
    project6El.style.opacity = "0";
    project6El.style.transform = "scale(0)";
    project1El.style.opacity = "1";
    project1El.style.transform = "scale(1)";
    project2El.style.opacity = "1";
    project2El.style.transform = "scale(1)";
  }
});
