const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let isValid = true

// Evento al presionar el boton Guardar
btnGuardar.addEventListener("click", function(event){
    txtNombre.style.border  = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";   
    isValid = true;
    // Validamos que el nombre no sea un nombre con almenos 3 caracteres
    if (txtNombre.value.length < 3){
        txtNombre.style.border  = "solid red medium";
        alertValidacionesTexto.innerHTML = `El <strong>Nombre</strong> no es correcto.<br/>`;
        alertValidaciones.style.display = "block";
        isValid = false;
    }
    // Si el nombre es valido guardamos el nombre en localStorage
    if (isValid){
        localStorage.setItem("nombre", txtNombre.value);
        txtNombre.value = "";
    }
});

