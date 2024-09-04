const txtMensaje = document.getElementById("txtMensaje");
const btnEliminar = document.getElementById("btnEliminar");
const alertaMensaje = document.getElementById("alertaMensaje");

let nombreUsuario = "";

// Evento cuando carga la pantalla y su contenido
window.addEventListener("load", function(event){
    // Vemos si tenemos guardado algun nombre si lo tenemos damos el mensaje de bienvenida
    if (this.localStorage.getItem("nombre") != null){
        nombreUsuario = this.localStorage.getItem("nombre");
        alertaMensaje.innerText = `Hola ${nombreUsuario} bienvenido/a de nuevo`;
    }else{ // De lo contrario solicitamos que regrese al index a agregar un nombre valido
        alertaMensaje.innerText = `Porfavor ve al index e ingresa tu nombre`;
    }
    alertaMensaje.style.display = "block";
});

// Evento del boton Eliminar
btnEliminar.addEventListener("click", function(event){
    if (localStorage.getItem("nombre") != null){
        localStorage.clear();
        alert("Se ha eliminado el nombre");
    }else{
        alert("No hay un nombre que eliminar");
    }
    
    location.href = "welcome.html";
});