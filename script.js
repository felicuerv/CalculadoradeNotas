function ingresarNotas() {
    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    let notas = [];
    
    for (let i = 0; i < 3; i++) {
        let nota = prompt(`Ingrese la nota ${i + 1} para ${nombre} ${apellido}:`);
        nota = parseFloat(nota);

        while (nota < 1 || nota > 10 || isNaN(nota)) { 
            nota = prompt(`Ingrese una nota válida (entre 1 y 10) para ${nombre} ${apellido}:`);
            nota = parseFloat(nota);
        }
    
        notas.push(nota);
    }
    
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    const promedio = sumaNotas / notas.length;

    let mensaje = `Notas ingresadas para ${nombre} ${apellido}: ${notas.join(', ')}\nPromedio: ${promedio.toFixed(2)}`;

    if (promedio >= 6) {
        mensaje += "\n¡Aprobado!";
    } else {
        mensaje += "\nDesaprobado :(";
    }

    alert(mensaje);
}

const form = document.getElementById('studentForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    ingresarNotas();
});
