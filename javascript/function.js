    document.getElementById("enviar").onclick = function validar_contacto(){
    var apellido = document.getElementById("apellido").value;
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    if (apellido == "") {
        alert("El apellido es obligatorio");
        document.getElementById("apellido").focus();
    } else if (nombre==""){
        alert("El nombre es obligatorio");
        document.getElementById("nombre").focus();
    } else if (email==""){
        alert("El email es obligatorio");
        document.getElementById("email").focus();
    } else if (telefono == "") {
        alert("El número de teléfono es obligatorio");
        document.getElementById("telefono").focus();
    } else {
        alert("Datos cargados!! Gracias");
    }
}


