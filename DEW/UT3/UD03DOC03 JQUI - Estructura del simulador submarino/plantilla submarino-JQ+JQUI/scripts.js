// Simplified JS + jQuery code for submarine simulator
// Suitable for 2ºDAW student level

$(document).ready(function() {
    // Initialize basic tabs from jQuery UI
    $("#tabs-mandos").tabs();

    // Initialize mission text
    $("#texto-mision").text(
        "Misión 1: Configura el submarino en modo patrulla silenciosa.\n" +
        "- Velocidad moderada.\n" +
        "- Profundidad segura.\n" +
        "- Modo silencio activado.\n" +
        "- Sonar en modo pasivo."
    );

    // Initialize controls
    inicializarControlesNavegacion();
    initProfundidad();
    initSonar();
    initArmas();
    initEventos();

    // Variables to store state
    var velocidad = 15;
    var rumbo = 0;
    var pilotoAuto = false;
    var profundidad = 100;
    var modoSilencio = false;
    var modoSonar = "off";
    var alcanceSonar = 500;
    var torpedosListos = 3;
    var tipoTorpedo = "estandar";
    var objetivoSeleccionado = null;

    function inicializarControlesNavegacion() {
        $("#velocidad-slider").slider({
            min: 0,
            max: 30,
            value: velocidad,
            slide: function(event, ui) {
                velocidad = ui.value;
                $("#velocidad-valor").text(velocidad);
            }
        });
        $("#velocidad-valor").text(velocidad);

        $("#rumbo-spinner").spinner({
            min: 0,
            max: 360,
            spin: function(event, ui) {
                if(ui.value > 360) {
                    $(this).spinner("value", 0);
                    rumbo = 0;
                    return false;
                } else if(ui.value < 0) {
                    $(this).spinner("value", 360);
                    rumbo = 360;
                    return false;
                } else {
                    rumbo = ui.value;
                }
            }
        });
        $("#rumbo-spinner").spinner("value", rumbo);

        // Pilot auto radio buttons
        $("input[name='piloto']").checkboxradio();
        $("input[name='piloto']").change(function() {
            pilotoAuto = $("input[name='piloto']:checked").val() === "on";
        });
        pilotoAuto = $("input[name='piloto']:checked").val() === "on";
    }

    function initProfundidad() {
        $("#profundidad-slider").slider({
            min: 0,
            max: 500,
            value: profundidad,
            slide: function(event, ui) {
                profundidad = ui.value;
                $("#profundidad-valor").text(profundidad);
            }
        });
        $("#profundidad-valor").text(profundidad);

        $("#silencio-check").checkboxradio();
        $("#silencio-check").change(function() {
            modoSilencio = $(this).prop("checked");
        });
        modoSilencio = $("#silencio-check").prop("checked");
    }

    function initSonar() {
        $("#modo-sonar").selectmenu({
            change: function(event, data) {
                modoSonar = data.item.value;
            }
        });
        modoSonar = $("#modo-sonar").val();

        $("#alcance-sonar-slider").slider({
            min: 0,
            max: 1000,
            value: alcanceSonar,
            slide: function(event, ui) {
                alcanceSonar = ui.value;
                $("#alcance-sonar-valor").text(alcanceSonar);
            }
        });
        $("#alcance-sonar-valor").text(alcanceSonar);

        $("#btn-escanear").button();
    }

    function initArmas() {
        $("#torpedos-spinner").spinner({
            min: 0,
            max: 10,
            step: 1
        });
        $("#torpedos-spinner").spinner("value", torpedosListos);

        $("#tipo-torpedo").selectmenu({
            change: function(event, data) {
                tipoTorpedo = data.item.value;
            }
        });
        tipoTorpedo = $("#tipo-torpedo").val();

        $("#btn-fijar-objetivo").button();
        $("#btn-disparar").button();
    }

    function initEventos() {
        $("#btn-escanear").click(function() {
            if(modoSonar === "off") {
                alert("El sonar está apagado. Por favor actívelo para escanear.");
                return;
            }
            alert("Escaneando modo " + modoSonar + " con alcance " + alcanceSonar + " m.");
        });

        $("#sonar").on("click", ".barco", function() {
            $(".barco").removeClass("seleccionado");
            $(this).addClass("seleccionado");
            objetivoSeleccionado = $(this).data("id");
            alert("Barco " + objetivoSeleccionado + " seleccionado.");
        });

        $("#btn-fijar-objetivo").click(function() {
            if(!objetivoSeleccionado) {
                alert("No hay ningún objetivo seleccionado. Seleccione un barco en el sonar.");
                return;
            }
            alert("Objetivo " + objetivoSeleccionado + " fijado.");
        });

        $("#btn-disparar").click(function() {
            if(!objetivoSeleccionado) {
                alert("No hay objetivo fijado. Seleccione y fije un objetivo.");
                return;
            }
            if(torpedosListos <= 0) {
                alert("No hay torpedos disponibles para disparar.");
                return;
            }
            torpedosListos--;
            $("#torpedos-spinner").spinner("value", torpedosListos);
            alert("Disparando torpedo " + tipoTorpedo + " a " + objetivoSeleccionado + ".");
        });

        $("#btn-verificar-mision").button().click(function() {
            var mensaje = "";
            if(
                velocidad >= 10 && velocidad <= 20 &&
                profundidad >= 80 && profundidad <= 120 &&
                modoSilencio === true &&
                modoSonar === "pasivo"
            ) {
                mensaje = "Misión cumplida correctamente. ¡Buen trabajo!";
            } else {
                mensaje = "La configuración no es correcta para la misión. Revise los parámetros.";
            }
            alert(mensaje);
        });

        $("#btn-reiniciar").button().click(function() {
            velocidad = 15;
            rumbo = 0;
            pilotoAuto = false;
            profundidad = 100;
            modoSilencio = true;
            modoSonar = "off";
            alcanceSonar = 500;
            torpedosListos = 3;
            tipoTorpedo = "estandar";
            objetivoSeleccionado = null;

            $("#velocidad-slider").slider("value", velocidad);
            $("#velocidad-valor").text(velocidad);
            $("#rumbo-spinner").spinner("value", rumbo);
            $("input[name='piloto'][value='off']").prop("checked", true).checkboxradio("refresh");
            $("#profundidad-slider").slider("value", profundidad);
            $("#profundidad-valor").text(profundidad);
            $("#silencio-check").prop("checked", true).checkboxradio("refresh");
            $("#modo-sonar").val(modoSonar).selectmenu("refresh");
            $("#alcance-sonar-slider").slider("value", alcanceSonar);
            $("#alcance-sonar-valor").text(alcanceSonar);
            $("#torpedos-spinner").spinner("value", torpedosListos);
            $("#tipo-torpedo").val(tipoTorpedo).selectmenu("refresh");
            $(".barco").removeClass("seleccionado");

            alert("Configuración restablecida a valores predeterminados.");
        });
    }
});
