import dgram from 'dgram';
import readline from 'readline';
import { readyToSend } from "./validators.js";

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(`
    Informe as operações no seguinte formato:
    op: <+, -, *, />
    value1: <valor>
    value2: <valor>
`)

const client  = dgram.createSocket('udp4');
client.on("message", (msg, rinfo) => {
    console.log(msg.toString());
});
  
client.on("error", async () => {
    console.log("Algum erro aconteceu");
});

let calculateObject = {};
readlineInterface.on('line', line => {
    // maneira porca de fazer :(
    if (line.includes('op')) {
        calculateObject.op = line.replace('op:', '').trim();
    }
    if (line.includes('value1')) {
        calculateObject.value1 = line.replace('value1:', '').trim();
    }
    if (line.includes('value2')) {
        calculateObject.value2 = line.replace('value2:', '').trim();
    }

    try {
        if (readyToSend(calculateObject)) {
            client.send(JSON.stringify(calculateObject), 3000, '127.0.0.1');
        }
    } catch (e) {
        console.log(e.message);
    }
});