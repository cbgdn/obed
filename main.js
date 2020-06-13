const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Erstelle das Browser-Fenster.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // und lade die index.html der App.
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)
