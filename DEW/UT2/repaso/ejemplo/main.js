import { autos } from "./data.js"

document.addEventListener('DOMContentLoaded', function(){
    console.log(autos)

    const addButton = document.getElementById('addToList');
    const showButton = document.getElementById('showList');
    const PrecioTotal = document.getElementById('precioTotal');
    let list = document.getElementById('txt');
    
    showButton.addEventListener('click',showList());

    function showList (){ 
        autos.map(coche => {
            const newDiv = document.createElement('div');
            newDiv.textContent = ('Marca: ${coche.modelo} Precio: ${coche.precio} ')
            list.appendChild(newDiv);

        });
        
    };

    function precioTotal(){
        precio= 0;

        autos.reduce(coche =>{
            precio += coche.precio;
        })

    };
});