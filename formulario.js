//console.log('funcionando');
$("#formulario").submit(function(event) {
    event.preventDefault(); //almacena los datos sin refrescar el sitio web
    enviar();
});

function enviar() {
    //console.log("ejecutado");
    var datos = $("#formulario").serialize(); //toma los datos del name y los lleva a un arreglo.
    $.ajax({
        type: "post",
        url: "formulario.php",
        data: datos,
        success: function(texto) {
            if (texto == "exito") {
                correcto();
            } else {
                phperror();
            }
        }
    })

}

function correcto() {
    $("#mensajeExito").removeclass("d-none");

}

function phperror() {
    $("#mensajeError").removeclass("d-none");
}