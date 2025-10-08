//Laboratorio de Drones Autónomos

let drones = [
{ id: 1, modelo: 'Golf', bateria:90 },
{ id: 2, modelo: 'Futbol', bateria:80 },
{ id: 3, modelo: 'Smurf', bateria:70 },
]

function addDrones() {
    drones.push(dron)
}

function listDrones(){
    drones.forEach(dron=>{
        console.log(dron.modelo)
    });
}

function UpdateBateria(id, nuevaBateria){
    drones[id].bateria = nuevaBateria
};

function RemoveDron(){
    drones.pop(dron)
};