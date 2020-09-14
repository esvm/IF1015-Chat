import dgram from 'dgram';
import { validate } from './validators.js';
import { calculate } from './calculator.js';

const handleMessage = (msg, rinfo) => {
    const calculateObject = JSON.parse(msg.toString());
    try {
        validate(calculateObject);
        socket.send(`Result is: ${calculate(calculateObject)}`, rinfo.port, rinfo.address)
    } catch (e) {
        socket.send(e.message, rinfo.port, rinfo.address);
    }
}

const socket = dgram.createSocket('udp4');
socket.bind(3000);

socket.on('message', handleMessage);