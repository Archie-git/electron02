const { app, BrowserWindow } = require('electron');
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });
  // win.loadURL('http://localhost:3002/basic/').then();
  win.loadFile(path.resolve(__dirname, 'window/basic/index.html')).then();
  win.webContents.toggleDevTools();
};

app.whenReady().then(() => {
  createWindow();
});
