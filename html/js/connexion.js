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
    gotElement("layouts/header-connect.html", "navbar")
    // gotElement("layouts/footer.html","footer")
    gotElement("layouts/form-connect.html", "sidenav")
    console.log("Elements initialisés");
    setTimeout(() => {
        initForm()
    }, 100)
}

const gotElement = (html, element) => {
    fetch(html)
        .then(response => response.text())
        .then(text => {
            document.querySelector(element).innerHTML += text;
        })
}

if (localStorage.getItem("token")) {
    window.document.location = "./"
}

function initForm() {
    const form = document.querySelector("#form-connection")
    console.log(form)

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log(e);

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json()
                const token = data.token

                localStorage.setItem("token", token)

                console.log('Connexion réussite : ', token)

                window.document.location = "./"
            } else {
                document.querySelector("#alert").classList.remove("d-none")

                const error = await response.json()
                const errorMessage = error.message

                console.log("Erreur de la connexion ", error)
            }
        } catch (err) {
            console.error(err)
        }
    })
}