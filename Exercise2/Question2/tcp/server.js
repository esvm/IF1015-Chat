import net from 'net';
import { validate } from './validators.js';
import { calculate } from './calculator.js';

const handleConnection = socket => {
    console.log('Alguém está conectado.');

    socket.on("data", (data) => {
        const calculateObject = JSON.parse(data.toString());
        try {
            validate(calculateObject);
            socket.write(`Result is: ${calculate(calculateObject)}`)
        } catch (e) {
            socket.write(e.message);
        }
    });
}

const server = net.createServer(handleConnection);
server.listen(3000, '127.0.0.1');
