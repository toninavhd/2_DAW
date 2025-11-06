<?php
echo 'ejercicio 1';
echo '<br>';
switch (date('N')) {
    case 1: $dia = 'Lunes';
    break;
    case 2: $dia = 'Martes';
    break;
    case 3: $dia = 'Miercoles';
    break;
    case 4: $dia = 'Jueves';
    break;
    case 5: $dia = 'Viernes';
    break;
    case 6: $dia = 'Sabado';
    break;
    case 7: $dia = 'Domingo';
    break;
}
echo 'Hoy es'. $dia .'<br>';
?>

<?php
echo 'ejercicio 2';
echo '<br>';
$numero = '7';
if($numero % 2== 0){
    echo 'es par <br>';

}else{
    echo 'es impar';
}
echo'<br>';
?>

<?php
echo 'ejercicio 3';
echo '<br>';
function precioConIVA($precio) {
    return $precio * 1.21;
}
echo "Precio con IVA: " . precioConIVA(50) . " €";
echo '<br>';
?>

<?php
echo 'ejercicio 4';
echo '<br>';
$productos = ["Teclado", "Ratón", "Monitor", "Altavoces"];
$cantidad_productos = count($productos);
echo "El array 'productos' contiene " . $cantidad_productos . " elementos.";
echo '<br>';
?>
