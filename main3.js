document.getElementById("submit").addEventListener("click", evaluarExamen);

function evaluarExamen(){
    const respCorrectas = {
        trabajo: "joule",
        leyes: "inercia", 
        velocidad: "d-t",
        peso: "fuerza-gravitacional",
        flotacion: "principio-arquimedes"
    };
    
    let puntaje = 0;
    let preguntasRespondidas = 0;

    // Iterar sobre las preguntas
    for (const pregunta in respCorrectas) {
        const opciones = document.getElementsByName(pregunta);
        let respondida = false;  // Inicializamos la variable aquí

        // Iterar sobre las opciones de cada pregunta
        for (const opcion of opciones) {
            if (opcion.checked) {
                respondida = true;
                if (opcion.value === respCorrectas[pregunta]) {
                    puntaje++;
                }
                break; // Salir del loop una vez que se selecciona una respuesta
            }
        }

        if (respondida) preguntasRespondidas++;
    }

    // Verificar si todas las preguntas fueron respondidas
    const totalPreguntas = Object.keys(respCorrectas).length;
    if (preguntasRespondidas < totalPreguntas) {
        alert("Por favor, responde todas las preguntas antes de enviar.");
        return;        
    }

    // Calcular si aprobó
    const notaAprobatoria = totalPreguntas * 0.6;
    const mensaje = puntaje >= notaAprobatoria
        ? `¡Felicidades! Aprobaste con ${puntaje} de ${totalPreguntas}.`
        : `Lo siento, no aprobaste. Tu puntaje es ${puntaje} de ${totalPreguntas}.`;
    
    alert(mensaje);
}
