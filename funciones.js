function imcFcn(){
    peso =  document.getElementById("peso").value;
    altura =  document.getElementById("altura").value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    altura = Math.pow(altura,2);
    imc = peso / altura;
    simc = "";
    var conDecimal = imc.toFixed(2);
    switch(true){
        case imc < 16:
            simc = "Desnutricion severa";
            document.querySelector(".imcResult").style.backgroundColor = '#FF0000';
        break;

        case imc >= 16 && imc < 18.5:
            simc = "Desnutricion moderada";
            document.querySelector(".imcResult").style.backgroundColor = '#FF6633'; 
        break;

        case imc >= 18.5 && imc < 22:
            simc = "Bajo peso";
            document.querySelector(".imcResult").style.backgroundColor = '#FFCC33';
        break;

        case imc >= 22 && imc < 25:
            simc = "Peso normal";
            document.querySelector(".imcResult").style.backgroundColor = '#00FF00';
        break;

        case imc >= 25 && imc < 30:
            simc = "Sobrepeso";
            document.querySelector(".imcResult").style.backgroundColor = '#FFCC33';
        break;

        case imc >= 30 && imc < 35:
            simc = "Obesidad tipo I";
            document.querySelector(".imcResult").style.backgroundColor = '#FF6633';
        break;

        case imc >= 35 && imc < 40:
            simc = "Obesidad tipo II";
            document.querySelector(".imcResult").style.backgroundColor = '#FF3300';
        break;

        case imc >= 40 && imc < 50:
            simc = "Obesidad tipo III";
            document.querySelector(".imcResult").style.backgroundColor = '#FF0000';
        break;
        case imc > 50:
            simc = "Obesidad tipo IV";
            document.querySelector(".imcResult").style.backgroundColor = '#FF0000';
        break;
    }
    document.getElementById("imc").innerHTML = simc;
    document.getElementById("imcres").innerHTML = conDecimal;
}