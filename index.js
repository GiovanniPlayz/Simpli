const API = {
  findAPI: function() {
    console.warn("API is still in beta testing, so please, expect bugs.");
    var startDate = Date();
    console.log("Start setup date: " + startDate);

    const express = require('express');
    const app = express();
    const path = require('path');

    app.get('/', (req, res) => {
      const filePath = path.join(__dirname, 'api', 'web', 'index.html');
      res.sendFile(filePath);
    });

    const server = app.listen(3000, () => {
      console.log('API has been found and a live server has started on port 3000.');
    });

    return server;
  },

  endServer: function(server) {
    server.close(() => {
      console.log('Server is now closed');
    });
  },

  importSocketIO: function() {
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);
  },

  checkforClientJoins: function() {

    io.on('connect', () => {
      console.log("A client has connected! 😀😀")
    })

    io.on('disconnect', () => {
      console.log("A client has disconnected! 😭😭")
    })
  }
};
