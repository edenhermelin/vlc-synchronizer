const {ipcRenderer} = require('electron');
window.addEventListener('DOMContentLoaded', () => {
    const jumpBy = document.getElementById('jumpBy');
    document.getElementById('play').addEventListener('click', () => {
        ipcRenderer.send('play');
    });
    document.getElementById('vlc').addEventListener('click', async () => {
        ipcRenderer.send('vlc');
    });
    document.getElementById('pause').addEventListener('click', () => {
        ipcRenderer.send('pause');
    });
    document.getElementById('jump').addEventListener('click', () => {
        ipcRenderer.send('jump', parseInt(jumpBy.value, 10));
    });
    document.getElementById('sync').addEventListener('click', async () => {
        ipcRenderer.send('sync');
    });
});

