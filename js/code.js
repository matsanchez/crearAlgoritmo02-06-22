alert("Bienvenidos al Primer Desafio 'MiniCalculadora'")
alert("¿Que operacion quieres realizar?")
for (let operation = 0; operation <=4; operation=0) {
    let operation = prompt("( 1 ) SUMA - ( 2 ) RESTA - ( 3 ) MULTIPLICACION - ( 4 ) DIVISION");
    if(operation == 1){
        let num1 = prompt("Ingrese el primer numero para sumar");
        let num2 = prompt("Ingrese el segundo numero para sumar");
        let result = (parseInt(num1) + parseInt(num2));
        alert("El resultado de la Suma es: " + result);
    }
    else if(operation == 2){
        let num1 = prompt("Ingrese el primer numero para restar");
        let num2 = prompt("Ingrese el segundo numero para restar");
        let result = (parseInt(num1) - parseInt(num2));
        alert("El resultado de la Resta es: " + result);
    }
    else if(operation == 3){
        let num1 = prompt("Ingrese el primer numero para Multiplicar");
        let num2 = prompt("Ingrese el segundo numero para Multiplicar");
        let result = (parseInt(num1) * parseInt(num2));
        alert("El resultado de la Multiplicacion es: " + result);
    }
    else if(operation == 4){
        let num1 = prompt("Ingrese el primer numero para Dividir");
        let num2 = prompt("Ingrese el segundo numero para Dividir");
        let result = (parseInt(num1) / parseInt(num2));
        alert("El resultado de la Division es: " + result);
    }
    else{
        alert("No existe ninguna operacion con ese numero");
    }
}  


