import net from 'net';
import readline from 'readline';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const client = new net.Socket();
const initClient = () => {
    client.connect(3000, '127.0.0.1', () => {    
        readlineInterface.on('line', line => {
            client.write(line);
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