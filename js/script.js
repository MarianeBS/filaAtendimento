//Cria uma nova instância do Vue:
new Vue({
    //Define o elemento HTML onde a instância do Vue será montada:
    el: '#app',
    
    //Define os dados reativos da instância:
    data: {
        //Inicializa a fila como um array vazio:
        fila: [],
        //Inicializa o número sequencial que será gerado:
        numeroAtual: 1 
    },
    
    //Define os métodos que podem ser utilizados na instância:
    methods: {
        //Método para atualizar a visualização da fila (sem implementação no momento):
        atualizarFila() {
            //Este método pode ser usado para atualizar a exibição da fila
        },
        
        //Método para adicionar um número comum à fila:
        adicionarComum() {
            //Adiciona um novo item à fila com o prefixo 'C:' e o número atual:
            //'C' indica que é um número comum:
            this.fila.push(`C:${this.numeroAtual}`); 
            //Incrementa o número sequencial para o próximo número:
            this.numeroAtual++; 
        },
        
        //Método para adicionar um número especial à fila:
        adicionarEspecial() {
            //Adiciona um novo item à frente da fila com o prefixo 'E:' e o número atual:
            //'E' indica que é um número especial:
            this.fila.unshift(`E:${this.numeroAtual}`); 
            //Incrementa o número sequencial para o próximo número:
            this.numeroAtual++; 
        },
        
        //Método para atender o primeiro número comum da fila:
        atenderComum() {
            //Verifica se há algum número especial na fila:
            const temEspecial = this.fila.some(item => item.startsWith('E:'));
            if (temEspecial) {
                //Se houver números especiais, exibe um alerta:
                alert('Primeiro atenda as senhas especiais!'); 
            } else {
                //Encontra o índice do primeiro número comum na fila:
                const indexComum = this.fila.findIndex(item => item.startsWith('C:'));
                if (indexComum !== -1) {
                    //Se um número comum for encontrado, remove-o da fila:
                    this.fila.splice(indexComum, 1);
                } else {
                    //Se não houver números comuns, exibe um alerta:
                    alert('Não há senhas comuns na fila!'); 
                }
            }
        },
        
        //Método para atender o primeiro número especial da fila:
        atenderEspecial() {
            //Encontra o índice do primeiro número especial na fila:
            const indexEspecial = this.fila.findIndex(item => item.startsWith('E:'));
            if (indexEspecial !== -1) {
                //Se um número especial for encontrado, remove-o da fila:
                this.fila.splice(indexEspecial, 1);
            } else {
                //Se não houver números especiais, exibe um alerta:
                alert('Não há senhas especiais na fila!'); 
            }
        }
    }
});
