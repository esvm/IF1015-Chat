import net from 'net';
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

const client = new net.Socket();
const initClient = () => {
    client.connect(3000, '127.0.0.1', () => {
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
                    client.write(JSON.stringify(calculateObject));
                }
            } catch (e) {
                console.log(e.message);
            }
            
        })
    });
}

client.on("data", (data) => {
    console.log(`${data.toString()}`);
});
  
client.on("error", async () => {
    console.log("Algum erro aconteceu");
    setTimeout(initClient, 1000);
});

initClient();