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
    setTimeout(() => {
        initElement()
    }, 100)
}

const gotElement = (html, element) => {
    fetch(html)
        .then(response => response.text())
        .then(text => {
            document.querySelector(element).innerHTML += text;
        })
}

if (!localStorage.getItem("token")) {
    window.document.location = "./connexion.html"
}

async function initElement() {
    try {
        const config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        }

        const profilFetch = await fetch("http://localhost:3000/clients", config)
        const forfaitFetch = await fetch("http://localhost:3000/forfaits", config)

        if (profilFetch.ok) {
            const profil = await profilFetch.json()
            document.querySelector("#nameClient").innerHTML = profil.firstname + " " + profil.lastname
            document.querySelector("#address").innerHTML = profil.address
        }

        if (forfaitFetch.ok) {
            const forfait = await forfaitFetch.json()
            const date = new Date(forfait.createdAt)
            document.querySelector("#idForfait").innerHTML = forfait.id
            document.querySelector("#typeForfait").innerHTML = forfait.name
            document.querySelector("#dateForfait").innerHTML = "Soucris le " + `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
            document.querySelector("#forfaitActive").innerHTML = forfait.isActive ? "Activé" : "Désactiver"
        }

    } catch (err) {
        console.error(err)
    }
}