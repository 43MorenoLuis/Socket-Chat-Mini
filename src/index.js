const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
    // console.log('[{ Usuario se ha conectado }]');
    // socket.on('disconnect', () => {
    //     console.log('[{ Un usuario se ha desconectado }]')
    // })

    // socket.on('chat', (msg) => {
    //     console.log('[{ Mensaje: }]', msg)
    // })

    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, res) => {
    //console.log('[{ MSG }]', __dirname)
    res.sendFile(`${__dirname}/client/index.html`);
});

server.listen(3000, () => {
    console.log('[{ Server running on port 3000 }]');
})
