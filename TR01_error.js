// Espera a que toT elcontigut de l’HTML s’hagi carregat
document.addEventListener('DOMContentLoaded', () => {

const boto = document.getElementById('boto');
    const boto2 = document.getElementById('boto2');
    const missatge = document.getElementById('missatge');



boto.addEventListener('click', () => {
        error1();
    });

    boto2.addEventListener('click', () => {
        error2();
    });

console.log('Botón pulsado y script ejecutado.');
});
});
function error1() {
        try {
            throw new Error("Error intencional");

        } catch (error) {
            console.error("Error del código:", error);

            alert("Se ha producido un error, inténtalo más tarde.");
        }
    }
function error2() {
        try {
            let opciones = ["Inicio", "Configuración", "Salir"];

            let seleccion = document.getElementById('opcion').value;

            if (!opciones.includes(seleccion)) {
                throw new Error("La opción seleccionada no existe");
            }

            missatge.textContent = "Opción correcta.";
            missatge.style.color = "green";

        } catch (error) {
            console.error("Error de opción:", error.message);

            alert("Opción incorrecta, selecciona otra opción.");
        }
    }

}

