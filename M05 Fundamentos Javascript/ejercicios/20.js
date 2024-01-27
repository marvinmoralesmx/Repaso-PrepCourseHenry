function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:


    if (letra.length > 1 ){
      return "Dato incorrecto"
    } else if ("a" === letra){
      return "Es vocal";
    } else if ("e" === letra){
      return "Es vocal";
    } else if ("i" === letra){
      return "Es vocal";
    } else if ("o" === letra){
      return "Es vocal";
    } else if ("u" === letra){
      return "Es vocal";
    } else return "Dato incorrecto";


}

module.exports = esVocal;


