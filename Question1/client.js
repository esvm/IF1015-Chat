import net from 'net';
import readline from 'readline';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const client = new net.Socket();
client.connect(3000, '127.0.0.1', () => {
    console.log('conectado.');

    readlineInterface.on('line', line => {
        client.write(line);
    })
});

client.on("data", (data) => {
    console.log(`Mensagem recebida: ${data.toString()}`);
});
  
client.on("error", async () => {
    console.log("Algum erro aconteceu");
});