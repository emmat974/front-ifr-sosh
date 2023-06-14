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
    gotElement("html/layouts/sidenav-profile.html","sidenav-left")
    gotElement("html/layouts/header.html","navbar")
    // gotElement("html/layouts/footer.html","footer")
    gotElement("html/layouts/forfait.html","sidenav-right")
    gotElement("html/layouts/mode-paiement.html","sidenav-right")
    gotElement("html/layouts/consommation.html","sidenav-right")
    gotElement("html/layouts/facturations.html","sidenav-right")
    gotElement("html/layouts/options.html","sidenav-right")
    gotElement("html/layouts/services.html","sidenav-right")
    console.log("Elements initialisés");
}

const gotElement = (html, element) => {
    fetch(html)
    .then(response => response.text())
    .then(text => {
      document.querySelector(element).innerHTML += text;
    })
}