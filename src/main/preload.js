const { contextBridge, ipcRenderer } = require('electron');

window.ipcRenderer = require('electron').ipcRenderer;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    async talk(msg) {
      return await ipcRenderer.invoke('apollo-talk', msg);
    },
    on(channel, func) {
      const validChannels = ['ipc-example', 'apollo-talk'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
