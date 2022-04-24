import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
// import * as electron from 'electron';
const electron = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);
let win: BrowserWindow | null

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(
        url.format({
          pathname: path.join(__dirname, `/../../dist/electron-app/index.html`),
          protocol: 'file:',
          slashes: true,
        })
      )
    
      win.webContents.openDevTools()
    
      win.on('closed', () => {
        win = null
      })
  }