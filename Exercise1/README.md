**Quais as principais dificuldades?**
Foi bem tranquilo, só separei com uma classe não muito bem estruturada pra deixar 
mais fácil a minha leitura do código, pq tava mto bagunçado. Mas não tá no melhor approach possível

**Quais as principais diferenças entre a implementação da questão 1 e da questão 2?**
Só salvar a conexão com um nomezinho pra poder enviar a mensagem que um cliente envia para os outros clientes.

**Como gerenciar as conexões entre clientes na questão 2?**
Então, eu coloquei numa lista em memória mesmo de objetos que possuem o socket e o nome do cliente.
Assim eu consigo identificar as conexões pelo nome (usei como o diferencial, mas não implementei um mapa 
então poderia ter repetidos). E na hora de espalhar a mensagem eu mando pra todos que o nome é diferente da atual.

Quando uma conexão encerra, eu removo ela da lista a partir do nome também.

**Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?**
Eu mandei o servidor repassar a mensagem com o formato `<cliente>: <mensagem>`, onde o `cliente`
é o nome do cliente e a `mensagem` é a mensagem de fato.