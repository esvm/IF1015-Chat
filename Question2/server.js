import net from 'net';

class Connection {
    name = '';

    setupSocket = socket => {
        this.socket = socket;
        this.socket.on('end', () => {
            removeConnection(this.name);
        })
    
        this.socket.on("data", (data) => {
            const dataReceived = data.toString();
            if (dataReceived.includes('nome')) {
                const name = dataReceived.replace('nome:', '').trim();
                this.name = name;
            } else {
                if (this.name === '') {
                    this.sayHello();
                    return;
                }
                broadcastMessage(this.name, data.toString());
            }
        });

        
    }

    sayHello = () => {
        this.socket.write(`
Olá, por favor informe o seu nome no seguinte formato: 
nome: Seu Nome`);
    }
}

let connections = [];

const handleConnection = socket => {
    const connection = new Connection();
    connection.setupSocket(socket);

    connection.sayHello();
    connections.push(connection);
}

const broadcastMessage = (connectionName, message) => {
    connections.forEach(conn => {
        if (conn.name !== connectionName)
            conn.socket.write(`${connectionName}: ${message}`);
    });
}

const removeConnection = connectionName => {
    connections = connections.filter(c => c.name !== connectionName);
}

const server = net.createServer(handleConnection);
server.listen(3000, '127.0.0.1');
