document.querySelector("#mudaLayout").addEventListener("click", function() {
    var mural = document.querySelector(".mural");
    mural.classList.toggle("mural--linhas");

    if (mural.classList.contains("mural--linhas")) {
        this.textContent = "Blocos";
    } else {
        this.textContent = "Linhas";
    }
});

// REMOVER CARTAO CLOSURE
function removeCartaoClosure(x) {
    console.log('1 - ' + x);
    return function() {
        console.log('2 - ' + x);
        var cartao = document.querySelector("#"+this.dataset.ref);
        cartao.classList.add("cartao--some");
        // DESAFIO: Exercicio 5.4
        // var botao = $(this);
        // var cartao = botao.closest("div.cartao");
        // cartao.addClass("cartao--some");
        setTimeout(function() {
            cartao.remove();
        }, 400);
    };
}
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
for (var i=0; i<botoes.length; i++) {
    botoes[i].addEventListener("click", removeCartaoClosure(i));
}

// REMOVER CARTAO IIFE - Self Executing Funtion
// var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
// for (var i=0; i<botoes.length; i++) {
//     botoes[i].addEventListener("click", (function(x) {
//         console.log('1 - ' + x);
//         return function() {
//             console.log('2 - ' + x);
//             var cartao = document.querySelector("#"+this.dataset.ref);
//             cartao.classList.add("cartao--some");
//             setTimeout(function() {
//                 cartao.remove();
//             }, 400);
//         };
//     })(i));
// }