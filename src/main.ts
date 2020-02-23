import { app, BrowserWindow } from 'electron';

let win: BrowserWindow = null;

function createWindow () {
    win = new BrowserWindow({
        width: 1024 + 512,
        height: 740,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL('file://' + __dirname +'/pages/index.html');

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
