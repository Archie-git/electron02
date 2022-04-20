const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  })
  win.loadURL('https://www.baidu.com').then();
}

app.whenReady().then(() => {
  createWindow()
})
