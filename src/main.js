"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1024 + 512,
        height: 740,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./pages/index.html');
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
