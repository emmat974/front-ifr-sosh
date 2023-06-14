window.addEventListener("load", async () => {
    init();
});


/**
 * 
 * @apiName init
 * 
 * @apiDescription Initialize the different elements of the page
 * 
 * 
 */
async function init() {
    gotElement("layouts/sidenav-profile.html","sidenav-left")
    gotElement("layouts/header.html","navbar")
    // gotElement("layouts/footer.html","footer")
    gotElement("layouts/forfait.html","sidenav-right")
    gotElement("layouts/mode-paiement.html","sidenav-right")
    gotElement("layouts/consommation.html","sidenav-right")
    gotElement("layouts/facturations.html","sidenav-right")
    gotElement("layouts/options.html","sidenav-right")
    gotElement("layouts/service.html","sidenav-right")
    console.log("Elements initialisés");
}

const gotElement = (html, element) => {
    fetch(html)
    .then(response => response.text())
    .then(text => {
      document.querySelector(element).innerHTML += text;
    })
}