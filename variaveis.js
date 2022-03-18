/*Padrões de linguagem: 

Camel case ex: variavelAmiga,

Saneke Case ex: telefone_amigo, 

Kebab Case ex: tefone-amigo 

var: Sempre irá sobrescrever uma variavel(global).

let: Pertence exclusivamente um bloco de execução(um bloco de execução é o que fica dentro {}).
 
const: tem as mesma caracteristas do let porem não pode ser alterada.

*/

// ctrl+; comentam as linhas selecionadas
var nome = 'Djovani Zardo';
console.log(nome);

let nomeDeusuario='Djovani Zardo';
/*para atribuir novos valores em variaveis do tipo let segue exemplo abaixo, no caso remover o let*/
nomeDeusuario = "Djovani B Zardo";
console.log(nomeDeusuario);

let arredondado = Math.round(20.4999);
console.log(arredondado);