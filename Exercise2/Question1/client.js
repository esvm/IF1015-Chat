import dgram from 'dgram';
import readline from 'readline';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client  = dgram.createSocket('udp4');

client.on("message", (msg, rinfo) => {
    console.log(`Mensagem recebida: ${msg.toString()}`);
});
  
client.on("error", async () => {
    console.log("Algum erro aconteceu");
});

readlineInterface.on('line', line => {
    client.send(line, 3000, '127.0.0.1', (err) => {
        if (err)
            console.log('Algum erro aconteceu: ', err);
    });
});

