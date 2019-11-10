const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido Señor Presidente'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Listen client
    client.on('enviarMensaje', (mensaje, callback) => {

        client.broadcast.emit('enviarMensaje', {
            mensaje: 'Estamos en guerra',
            autor: 'Sebastian Piñera',
            pais: 'Chile'
        });

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien.'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal.'
        //     });
        // }
    });
});