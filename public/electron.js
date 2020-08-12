const { app, BrowserWindow , ipcMain ,screen } = require('electron')
const path = require('path');
const isDev = require('electron-is-dev');
const keytar = require('keytar')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    show:false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),

    }
  })
  win.maximize();
  win.show();
  // and load the index.html of the app.
  win.loadURL(
      isDev ? "http://localhost:3000" :`file://${path.join(__dirname , "../build/index.html")}` 
      )

  // Open the DevTools.
//   win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


/// setToken ///

ipcMain.on('settoken',async (e,item)=>{
  const token = item;
  const sttoken = await keytar.setPassword('token', 'user', token);
  const gettoken = await keytar.getPassword('token', 'user');
  e.sender.send('settoken', gettoken)
})


/// Get Token 

ipcMain.on('getToken', async (e,item) =>{
 
  const gettoken = await keytar.getPassword('token', 'user');

  e.sender.send('getToken', gettoken);
})
/// Delete Token 

ipcMain.on('deleteToken', async (e,item) =>{
  await keytar.deletePassword('token', 'user');
  e.sender.send('deleteToken', false);
})


/// get window

ipcMain.on('connect',function(e,item){
  e.sender.send('connect', screen.getPrimaryDisplay().workAreaSize)
})