document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos el botón y el mensaje
    const boto = document.getElementById('boto');
    const missatge = document.getElementById('missatge');
    boto.addEventListener('click', () => {
        calcular();
    });


    // Función principal de la calculadora
    function calcular() {
        try {

            let operacion = prompt("Introduce una operación:");

            // Comprobamos si el usuario ha cancelado
            if (operacion === null) {
                throw new Error("Has cancel·lat l'operació");
            }

            // Expresión regular para comprobar la operación
            let regex = /^\s*([+-]?\d+(?:[.,]\d+)?)\s*([+\-*/%])\s*([+-]?\d+(?:[.,]\d+)?)\s*$/;

            let resultado = operacion.match(regex);

            if (!resultado) {
                throw new Error("L'expressió no és vàlida...");
            }

            let a = parseFloat(resultado[1].replace(",", "."));
            let operador = resultado[2];
            let b = parseFloat(resultado[3].replace(",", "."));

            let total;

            // Comprobamos las operaciones
            if (operador == "+") {
                total = a + b;
            }
            else if (operador == "-") {
                total = a - b;
            }
            else if (operador == "*") {
                total = a * b;
            }
            else if (operador == "/") {

                if (b == 0) {
                    throw new Error("No es pot dividir entre zero");
                }

                total = a / b;
            }
            else if (operador == "%") {

                if (b == 0) {
                    throw new Error("No es pot calcular el mòdul entre zero");
                }

                total = a % b;
            }

            // Mostramos el resultado
            missatge.textContent = "Resultat: " + total;
            missatge.style.color = "green";

        } catch (error) {

            missatge.textContent = "Error: " + error.message;
            missatge.style.color = "red";

            console.error("Error:", error.message);
        }
    }

});
