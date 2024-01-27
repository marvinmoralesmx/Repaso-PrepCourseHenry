

// codnicionamiento 01
function viajar(destino) {
    if (destino ==="Brasil"){
            console.log("gire a la izquierda");

    } else if (destino === "Argentina"){
            console.log("gire a la derecha");
    } else {
        console.log("Nos perdimo");
    }

}


viajar("Brasil");
viajar("Argentina");
viajar("prueba");


// condicion de manejo

function puedeManejar(edad){
    if (edad >= 18 ){
            console.log(true):
    } else {
        console.log(false);
    }
}

puedeManejar(17);