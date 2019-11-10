var socket = io();

// on: Escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// emit: Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Patipelado'
}, function(resp) {
    console.log('Respuesta Server ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})