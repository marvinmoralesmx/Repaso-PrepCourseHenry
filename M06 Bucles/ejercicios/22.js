const doWhile = require("./23");

function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  var diasMes = new Date(2023, mes, 0).getDate();

  do {
    if (mes > 0 && mes <13) return diasMes;
  } while (mes > 0 && mes < 13);
  return 0;
}

module.exports = diasEnMes;
