const { app, BrowserWindow } = require('electron');
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  })
  // win.loadURL('http://localhost:3000/basic/').then();
  win.loadFile(path.resolve(__dirname, '../window/basic/index.html')).then();
}

app.whenReady().then(() => {
  createWindow()
})
