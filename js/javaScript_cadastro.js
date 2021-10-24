$( document ).ready(function(){

    //Validação do campo data de nascimento
    //Idade permitida até 130 anos
    //Não permitido idades menores que zero

    $("#btn_teste").click(function(){
        validarCpf();
    });

    $("#btn_enviar").click(function(){
        validarDataNasc();
        validarCpf();
    });

    //Validação do campo data de nascimento, não é permitido data superior a 16/03/2021
    function validarDataNasc(){
        //Constante que irá receber a data parâmetro.
        //Pessoas nascidas após esta data serão classificadas como idade zero.
        const dataParam = new Date();
        let dataForm = new Date();
        //Setando o valor de 16/03/2021 na constante dataParam
        dataParam.setFullYear(2021, 2, 16);
       
        //Cria novo objeto data
        let dataNascimento = new Date($("#idDataNasc").val());
   
        let dia = dataNascimento.getDate()+1;
        let mes = dataNascimento.getMonth();
        let ano = dataNascimento.getUTCFullYear();

        console.log("Dia: "+dia);
        console.log("Mês: "+mes);
        console.log("Ano: "+ano);
        dataForm.setFullYear(ano,mes,dia);

        //Formata data parâmetro (16/03/2021) para timezone UTC
        let dtParam = dataParam.toLocaleDateString("pt-BR", {timeZone: "UTC"});
        let dtForm = dataForm.toLocaleDateString("pt-BR", {timeZone: "UTC"});
    
       //Permite apenas data ne nasc maior que 16/03/2021
        if (dataForm >= dataParam){
            alert("'Data de nascimento não pode ser maior que 16/03/2021'");
            $("#idDataNasc").val("");
            $("#idDataNasc").focus();
        }        
    }

    function validarCpf(){
        var cpf = $("#idCpf").val();
        if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || 
            cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || 
            cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || 
            cpf == "88888888888" || cpf == "99999999999")
            //return false;
            return alert("CPF Inválido.")

        

            
    }
})