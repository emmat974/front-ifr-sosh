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
    gotElement("layouts/sidenav-profile.html", "sidenav-left")
    gotElement("layouts/header.html", "navbar")
    // gotElement("layouts/footer.html","footer")
    gotElement("layouts/forfait.html", "sidenav-right")
    gotElement("layouts/mode-paiement.html", "sidenav-right")
    gotElement("layouts/consommation.html", "sidenav-right")
    gotElement("layouts/facturations.html", "sidenav-right")
    gotElement("layouts/options.html", "sidenav-right")
    gotElement("layouts/service.html", "sidenav-right")
    console.log("Elements initialisés");
}

const gotElement = (html, element) => {
    fetch(html)
        .then(response => response.text())
        .then(text => {
            document.querySelector(element).innerHTML += text;
        })
}

const modalProfil = () => {
    let html = "layouts/form-profile.html"
    fetch(html)
        .then(response => response.text())
        .then(text => {
            modal_titre = document.querySelector("#suppressionLabel");
            modal_body = document.querySelector("#modal-body-content");
            modal_footer = document.querySelector("#modal-footer-content");

            modal_titre.innerHTML = `Modifier mon profil`;
            modal_body.innerHTML = text;
            modal_footer.innerHTML = `
            <!-- Submit button -->
            <button type="button" class="btn btn-primary btn-block mb-4">Sauvegarder</button>
            <button type="button" class="btn btn-secondary btn-block mb-4" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Annuler</button>`
        })
}