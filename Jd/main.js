function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
}

function redirecionar() {
    window.open("https://www.youtube.com/watch?v=oKOtzIo-uYw&ab_channel=TheFugeesVEVO/");
    //window.location.href = "https://www.youtube.com/watch?v=oKOtzIo-uYw&ab_channel=TheFugeesVEVO";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse";
    //;document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar o texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
//console.log(document.getElementById("agradecimento"));
//alert("Obrigado por clicar");
/*
function soma(n1, n2) {
    return n1 + n2;
}
/*
var validar;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true

    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));



//alert(soma(5, 10));
/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
alert(setReplace("Vai Larissa", "Larissa", "Daniel  "));

/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}*/
/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/
/*var idade = prompt("Qual a sua idade");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/
/*var frutas = [{ nome: "maçã ", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].cor);*/
/*var nome = "Larissa Ruiz";
var n1 = 29;
var n2 = 3;
var frase = "Jorginho é Verde";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Verde", "Verde e Laranja"));
//alert(frase.replace("Verde", "Verde e Laranja"));

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString()[0]);
// console.log(lista.join(" | ")) 
//alert(lista[1]);
*/