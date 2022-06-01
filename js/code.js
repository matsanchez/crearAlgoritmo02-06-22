alert("Bienvenidos al Primer Desafio 'MiniCalculadora'")
alert("Vamos a realizar las 4 Operaciones Basicas de Matematicas")

for (let operation = 0; operation < 5; operation++) {
    
    if(operation == 1){
        let num1 = prompt("Primero vamos a sumar: Ingrese el primer numero");
        let num2 = prompt("Ingrese el segundo numero para sumar");
        let result = (parseInt(num1) + parseInt(num2));
        alert("El resultado de la Suma es: " + result);
    }
    else if(operation == 2){
        let num1 = prompt("Ahora vamos a Restar: Ingrese el primer numero");
        let num2 = prompt("Ingrese el segundo numero para restar");
        let result = (parseInt(num1) - parseInt(num2));
        alert("El resultado de la Resta es: " + result);
    }
    else if(operation == 3){
        let num1 = prompt("Ahora toca Multiplicar: Ingrese el primer numero");
        let num2 = prompt("Ingrese el segundo numero para Multiplicar");
        let result = (parseInt(num1) * parseInt(num2));
        alert("El resultado de la Multiplicacion es: " + result);
    }
    else if(operation == 4){
        let num1 = prompt("Y por ultimo vamos a Dividir: Ingrese el primer numero");
        let num2 = prompt("Ingrese el segundo numero para Dividir");
        let result = (parseInt(num1) / parseInt(num2));
        alert("El resultado de la Division es: " + result);
    }
}
alert("Gracias por usar la calculadora, si necesitas volver a usarla oprimi F5, hasta la proxima!")  


