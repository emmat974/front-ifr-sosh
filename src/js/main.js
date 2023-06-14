const { BrowserWindow, Notification} = require("electron");

let window;

function NewWindow() {
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    window.loadFile("index.html");
}

module.exports = {
    NewWindow,
}