//**** OO da pág 4 ******/

// criando o objeto da classe serviço, a classe servia como uma interface para chamar os métodos
// que propiciarão a criação do comportamento da página
class Servico{
    constructor(){
        this.id = 0;
        this.qntServ = 0;
        this.valor = 0;
        this.arrayServicos = []
    }
    salvar(){
        // pegar oq tem nos campos e mandar pra tabela
        // console.log("estou salvando");

        // pegando as infos contidas nos campos
        let desc = $("#desc").val();

        // pegando ql a pos do servico
        let servicoSelecionado = $("input[name='servico']:checked").val()
        // console.log(this.int2Servico(servicoSelecionado));

        let tamEmpresa = $("input[name='tamanhoEmpresa']:checked").val()
        // console.log(this.int2Tam(tamEmpresa))

        // validando os campos, se tiver tudo ok, add na tabela
        if(!this.validaCampos(desc)){
            alert("O campo descrição deve ser preenchido!");
        }else{
            let id = this.id;
            // console.log("id:" + id)
            // limpar os butoes dps de selecionados

            let preco = this.precificar(servicoSelecionado, tamEmpresa)
            this.valor += preco;

            this.qntServ += 1;

            // console.log("total:" + this.valor);
            // console.log("quantidade serviços" + this.qntServ);

            // criando o obj do servico e add ele no array de servicos
            let servico = {}
            servico.id = id;
            servico.tipo = this.int2Servico(servicoSelecionado);
            servico.tam = this.int2Tam(tamEmpresa);
            servico.preco = preco;
            servico.desc = desc;
            this.arrayServicos.push(servico);
            this.id++;
        }

        // atualizando o valor dos cards
        this.atualizaNota();
        this.listaTabela();
    }

    listaTabela(){
        // criando a variavel que nos permitirá interagir com a tabela
        // let tbody = $("tbody");
        let tbody = document.getElementById("tbody")

        // limpando a tabela
        // $(tbody).prop("text","");
        tbody.innerText = "";

        for(let i=0; i<this.arrayServicos.length; i++){
            // inserindo uma nova linha
            let novaLinha = tbody.insertRow();

            // criando os campos
            let td_id = novaLinha.insertCell();
            let td_tipo = novaLinha.insertCell();
            let td_tam = novaLinha.insertCell();
            let td_preco = novaLinha.insertCell();
            let td_desc = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            // alimentando os campos
            td_id.innerText = this.arrayServicos[i].id;
            td_tipo.innerText = this.arrayServicos[i].tipo;
            td_tam.innerText = this.arrayServicos[i].tam;
            td_preco.innerText = this.arrayServicos[i].preco;
            td_desc.innerText = this.arrayServicos[i].desc;
            
            // add classes para eles ficarem centralizados
            td_id.classList.add("center");
            td_tipo.classList.add("center");
            td_tam.classList.add("center");
            td_preco.classList.add("center");
            td_desc.classList.add("center");
            td_acoes.classList.add("center");

            // add as imagens e o comportamento das acoes (EDIT)

            /*
            // não funfa, n sei pq
            $(td_acoes).append("<img src='assets/img/edit.png' class='img-icon'></img>");
            $(td_acoes).attr("onclick", "servico.mostrarDados(" + this.arrayServicos[i].id + ")");
            $(td_acoes).css({cursor: "pointer"});

            $(td_acoes).append("<img src='assets/img/delete.png' class='img-icon'></img>")
            $(td_acoes).attr("onclick", "servico.deletarDados(" + this.arrayServicos[i].id + ")");
            $(td_acoes).css({cursor: "pointer"});

            $(td_acoes).append("<img src='assets/img/view.svg' class='img-icon'></img>")
            $(td_acoes).attr("onclick", "servico.verDados(" + this.arrayServicos[i].id + ")");
            $(td_acoes).css({cursor: "pointer"});
            */

            


        }//for i
    }//listarTabela

    mostrarDados(id){
        alert("entrei mostrarDados, meuid:" + id)
    }//mostrarDados

    deletarDados(id){
        alert("entrei deletarDados, meuid:" + id)
    }//deletarDados

    verDados(id){
        alert("entrei viewDados, meuid:" + id)
    }//viewDados



    // setar os campos para um estado default, antes de qualquer interação
    cancelar(){
        console.log("estou cancelando")
        $("#desc").val("");
        $("#serv1").prop("checked", true);
        $("#tamanhoEmpresa1").prop("checked", true);
    }//cancela

    // fará a validação dos campos inseridos pelo usuario
    // retorna um booleano informando se estão OK
    validaCampos(texto){
        if(texto.length < 6){
            return false;
        } //false
        return true;
    }//valida campos

    // atualiza o card de preços com os valores contidos no objeto
    atualizaNota(){
        // $("#totalItens").append("<p id='qntServicos'>" + this.qntServ + "</p>");
        $("#qntServicos").text(this.qntServ);
        $("#valorTotal").text(this.valor);
    }

    // dado um id de servico e um id de tamanho de empresa, retorna o valor a ser cobrado pelo ser
    // viço
    // retorna o valor a ser cobrado pelo serviço
    // serv é o id do serviço
    // mult é o id do tam da empresa
    precificar(serv, mult){   
        let vetServico = [15000, 8000, 4000, 3000, 4000];
        let vetMultiplicador = [1,2,7,20]
    
        return vetServico[Number(serv)] * vetMultiplicador[Number(mult)]
    }//precificar

    
    // dado um numero retorna o uma string com o serviço daquela posição
    int2Servico(numero){
        let vetorServicos = ["Desenvolvimento de Solução", "Consultoria Infraestrutura", "Consultoria Solução",
        "Manutenção de Hardware", "Consultoria em Aquisições"]
    
        let opcao = parseInt(numero);
    
        if (opcao > 4){
            return "Error"
        }
        return vetorServicos[opcao];
    } //int2Serviço

    // dada um int retorna o uma string do tamanho da empresa associado aquele numero
    int2Tam(numero){
        let vetTam = ["Pequena", "Média", "Grande", "Multinacional"]
    
        let opcao = parseInt(numero);
    
        if (opcao > 3){
            return "Error"
        }
        return vetTam[opcao];
    }//int2Tam

}

// $("#btnConcluir").on("click", servico.salvar());
// $("#btnCancelar").on("click", servico.cancelar());

var servico = new Servico();