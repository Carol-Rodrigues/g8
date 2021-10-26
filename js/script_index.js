// Função para que o nome da empresa que fica sobre o banner seja escrito ao carregar a página
let j = 0;
let txt = "G8 Tech!"
function escrever() {
    if (j < txt.length) {
        document.getElementById("nome").innerHTML += txt.charAt(j);
        j++;
        setTimeout(escrever, 100);
    }
}

// Função para imagens rotativas na área de "Nossos Trabalhos"
$(document).ready(function () {
    let vtBanner = ["imagens/banner1.png", "imagens/banner2.png", "imagens/banner3.png", "imagens/banner4.png", "imagens/banner5.png"];
    let max = vtBanner.length - 1;
    let i = 0;

    $("#divNT2").css("backgroundImage", "url(" + vtBanner[0] + ")");

    setInterval(() => troca(1), 3000)

    function troca(opr) {
        $("#divNT2").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeOut(1000, function () {
            i += opr;
            if (i > max) {
                i = 0;
            } else if (i < 0) {
                i = max;
            }
            $("#divNT2").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeIn(1000);
        });
    }

    $("#acess1").on("click", () => {
        $(".descricaoSN").toggleClass("aumentardescricaoSN");
        $("h1").toggleClass("aumentarH1");
        $("h2").toggleClass("aumentarH2");
        $("h3").toggleClass("aumentarH3");
        $(".descricao").toggleClass("aumentarDescricao");
        $("p").toggleClass("aumentarP");
        $("a").toggleClass("aumentarA");
        $("#acess1").toggleClass("aumentarTexto");
        $(".menu").toggleClass("aumentarMenu");
        $(".footer").toggleClass("aumentarFooter")
    });
})
