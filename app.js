//guardar um dado na variável usar comando let.

/*Usamos o alert para exibir uma mensagem passando algumas instruções sobre o programa e usamos o prompt para interagir com a pessoa permitindo inserir um valor e armazenando em uma variável;*/

alert ('Bem vindo(a) ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);
let chute;
let tentativas = 1;

 /*Saber trabalhar com loops de repetição, como o while, é essencial na programação! Os loops permitem automatizar tarefas repetitivas e lidar com grandes quantidades de dados de forma eficiente.
Contudo, é importante usá-los com cuidado para evitar loops infinitos (quando a condição nunca se torna falsa - o que pode travar o programa). 
É recomendado sempre ter uma lógica que faça com que a condição eventualmente se torne falsa para que o loop termine corretamente.*/

//enquanto chute não for igual ao numero secreto:
while (chute!=numeroSecreto){
    chute = prompt('Escolha um numero entre 1 a '+numeroMaximo + ':');
//se chute for igual ao numero secreto
        if (chute == numeroSecreto){ //condicional
            //PARA, não continua!
            break;

        }else{ //se chute for maior que numero secreto
            if(chute > numeroSecreto){
                    alert('O numero secreto é menor que '+ chute)
            }else{ 
                alert ('O numero secreto é maior que '+ chute);
            }
            //tentativas = tentativas + 1;
            tentativas++;
        }
   
}
let palavraTentativa = tentativas > 1? ' tentativas': ' tentativa';
alert('Isso aí! Você descobriu o numero secreto '+ numeroSecreto + ' com ' + tentativas + palavraTentativa);
   /* if (tentativas>1){
        alert('Isso aí!Você descobriu o numero secreto '+ numeroSecreto + ' com ' + tentativas + ' tentativas');
    }else{
        alert('Isso aí!Você descobriu o numero secreto '+ numeroSecreto + ' com ' + tentativas + ' tentativa');
    }*/

