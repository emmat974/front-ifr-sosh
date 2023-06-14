window.addEventListener("load", async () => {
    init();
});

let horaireData = {};

/**
 * 
 * @apiName init
 * 
 * @apiDescription Initialize the different elements of the page
 * 
 * 
 */
async function init() {
    gotElement("html/sidenav-profile.html","sidenav")

    console.log("Elements initialisés");
}

const gotElement = (html, element) => {
    fetch(html)
    .then(response => response.text())
    .then(text => {
      document.querySelector(element).innerHTML = text;
    })
}