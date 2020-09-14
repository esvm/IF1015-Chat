import net from 'net';
import readline from 'readline';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const handleConnection = socket => {
    console.log('Alguém está conectado.');
    socket.on('end', () => {
        console.log('Alguém se desconectou');
    })

    readlineInterface.on('line', line => {
        socket.write(line);
    })

    socket.on("data", (data) => {
        console.log(`Mensagem recebida: ${data.toString()}`);
      });
}

const server = net.createServer(handleConnection);
server.listen(3000, '127.0.0.1');
