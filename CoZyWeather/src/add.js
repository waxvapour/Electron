const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipc = electron.ipcRenderer

const closebtn = document.getElementById('closebtn')

closebtn.addEventListener('click', function(event){
    var window = remote.getCurrentWindow();
    window.close()
})

const updatebtn = document.getElementById('updatebtn')

updatebtn.addEventListener('click', function(){
    ipc.send('update-notify-value', document.getElementById('notifyval').value)
    console.log(document.getElementById('notifyval').value)
    var window = remote.getCurrentWindow();
    window.close()
})