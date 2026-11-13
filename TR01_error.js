// Espera a que toT elcontigut de l’HTML s’hagi carregat
document.addEventListener('DOMContentLoaded', () => {
// Seleccionam el botó pel seu ID
const boto = document.getElementById('boto');
const missatge = document.getElementById('missatge');
// Asignam la funció que s’executara al pulsar el botó
boto.addEventListener('click', () => {
missatge.textContent = '¡El archivo script.js se ha ejecutado correctamente!';
missatge.style.color = 'green';


// Aquí poses el codi que vulguis executar
function error1 () {
try {
    throw new Error("error intencional");
} catch (error) {
    console.error("Error del codi:", error);

    alert("se produjo un error, intentalo mas tarde");
}
}
function error2 () {
try {
    let opcions = ["Inicio", "Configuración", "Sortir"];
    let seleccio = "Eliminar";

    if (!opcions.includes(seleccio)) {
        throw new Error("La opcion selecionado no existe");
    }

} 
catch (error) {
    console.error("Error de opcion:", error.message);

    alert("Opcion incorrecta. seleciona otra opcion.");
}
}



console.log('Botón pulsado y script ejecutado.');
});
});
