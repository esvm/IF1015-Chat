import dgram from 'dgram';
import readline from 'readline';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ports = [];

const handleMessage = (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} disse: ${msg}`);
    ports.push(rinfo.port);
}

const socket = dgram.createSocket('udp4');
socket.bind(3000);

socket.on('message', handleMessage);

readlineInterface.on('line', line => {
    ports.forEach(p => socket.send(line, p, '127.0.0.1'));
});