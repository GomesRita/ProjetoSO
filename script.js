var ArrayPrioridade = []
var ArrayTempo  = []
var anterior = 0
var TimeInicial = [];
var TimeResultado = [];
var Tw = 0;
var Tt = 0
//Inserindo nova tarefa
function inserir() {
    var Tempo = prompt("Tempo para a tarefa ser executada: ")
    var Prioridade = prompt("Informe a prioridade: ")
    ArrayPrioridade.push(Prioridade)
    
    ArrayTempo.push(Tempo)
    var inicio = new Date()
    TimeInicial.push(inicio)
    
    //Impreme arrays
    for(x = 0; x <= ArrayPrioridade.length; x++){     
       console.log(ArrayTempo[x] + " " + ArrayPrioridade[x])
  
    }
    
    //Chama função que verifica qual a maior prioridade
    verificar()
}

function verificar(){
   //Verifica qual o maior valor na fila de prioridade
    var max = ArrayPrioridade.reduce(function(a, b) { 
    return Math.max(a, b); }, );
   
   //Verifica se o processo adicionado é mais prioritário que o anterior
    if (anterior < max){
        executar(max)
    } 
    else{
           console.log("Em espera")
           anterio = 0
           executar()
    }

    //Atualiza o valor de processo prioritário anterior para o processo de maior prioridade 
    anterior = max  
}

//Realiza o processo
function executar(max){

//Percorre o array de prioridades
    for(i = 0; i <= ArrayPrioridade.length; i++){
        if (ArrayPrioridade[i] == max){
        
        //Armazena os valos para poder excluir dos arrays quando foram finalizados
            Maior = ArrayPrioridade[i]
            Time = ArrayTempo[i]
            Inicio = TimeInicial[i]
            //Executa o cronômetro em milissegundos 
            var processo = ArrayTempo[i]
            
            const TempoExecucao = setTimeout(finalizar, processo*1000);
             console.log(processo*1000)
             
     
            //Acionada quando o processo é completo
            function finalizar(){
            console.log("Tamanho: " + ArrayPrioridade.length)
            //Localiza a prioridade
                var indice1 = ArrayPrioridade.indexOf(Maior);
                var indice2 = ArrayTempo.indexOf(Time);
                
                 //Determina o horário em que o processo foi finalizada 
                var fim = new Date()
                
                //Adiciona ao Array que Armazena o tempo de espera
                var prioridades = ArrayPrioridade.length
                // Tw = Tempo de espera e Tt = Tempo total                
                for(x = 0; x < ArrayPrioridade.length; x++){
                var Final = fim.getMilliseconds();
                var Init = Inicio.getMilliseconds();
                resultado = Final - Init
                TimeResultado.push(resultado)
                    var TempoEspera = 0
                    
                    var TempodeExecucao = 0
                    TempoEspera = TempoEspera + resultado
                    console.log("TE: " + TempoEspera)
                    console.log("TR: " + resultado)
                    var Tw = TempoEspera/prioridades   
                                                      
                    TempodeExecucao = TempodeExecucao + ArrayTempo[x]
                    var Tt = TempodeExecucao/prioridades
                    document.getElementById("result").innerHTML = "Tempo de espera (milissegundos): " + Tw + "  | Tempo de Execução (segundos): " + Tt
                      executar()
                }
                 
                 //Exclui os itens localizados 
                ArrayPrioridade.splice(indice1, 1);
                ArrayTempo.splice(indice2, 1);
                console.log("finalizado")               
                                 
                 for(x = 0; x <= ArrayPrioridade.length; x++){     
                   console.log(ArrayTempo[x] + " " + ArrayPrioridade[x] +" " + TimeResultado[x])
                }
            
            }
        }
    }
}

