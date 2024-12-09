let numero = parseInt(prompt("digite um numero para ver sua tabuada:"), 10);

if (numero === numero) {
    alert("tabuada de multiplicao do numero " + numero + ":");

  
    for (var i = 1; i <= 10; i++) {
        alert(numero + " x " + i + " = " + (numero * i));
    }

} else {

    alert("por favor, insira um numero valido.");
    
}
