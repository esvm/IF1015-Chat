**Quais as principais diferenças entre TCP e UDP?**

No TCP nós temos o conceito de conexão entre o cliente e o servidor, podemos escolher manter 
a conexão aberta ou não e usá-la para o envio de dados bidirecional. Já no UDP nós temos apenas 
o envio de dados onde é capturado a mensagem e informações do remetente como endereço e porta
para que o destinatário possa enviar dados de volta.

O TCP também garante a integridade dos dados. Nele, nós temos a certeza de que o dado enviado
vai chegar do outro lado da forma correta. Já no UDP, a depender da conexão, pode haver perda
de pacotes que resulta num dado degradado.

**Quais as principais diferenças entre a implementação TCP e UDP (tanto do chat como da calculadora)?**

Em ambos os casos a diferença foi bem pequena, apenas foi alterada a inicialização do client/server
e ao invés de fazer um socket.write foi necessário fazer um client.send informando o endereço e
porta do cliente para o qual queremos enviar o dado.

**Quais as principais dificuldades nas implementações UDP?**

Um ponto que sem dúvidas daria muito trabalho seria implementar a confiabilidade que o dado
iria chegar ao outro lado da conexão, porém como isso não foi um requisito, diria que a 
implementação UDP não trouxe maiores dificuldades.

**Quando faz sentido usar TCP ou UDP?**

O TCP é o recomendado quando queremos garantir a integridade dos dados (como no caso de chats,
envio de arquivos etc), porém ele traz o custo de perda de performance. O UDP por outro lado é
mais rápido (em tese, depende do uso) e por isso atende melhor os casos em que a integridade dos
dados não é uma necessidade (como em caso de  video chamadas, jogos online, lives etc)