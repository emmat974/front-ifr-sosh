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
    gotElement("layouts/header-connect.html","navbar")
    // gotElement("layouts/footer.html","footer")
    gotElement("layouts/form-connect.html","sidenav")
    console.log("Elements initialisés");
}

const gotElement = (html, element) => {
    fetch(html)
    .then(response => response.text())
    .then(text => {
      document.querySelector(element).innerHTML += text;
    })
}