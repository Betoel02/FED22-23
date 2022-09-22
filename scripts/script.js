// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header button");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    var headerNav = document.querySelector("header nav:nth-of-type(2)");
    headerNav.classList.toggle("buttonOpen");
}