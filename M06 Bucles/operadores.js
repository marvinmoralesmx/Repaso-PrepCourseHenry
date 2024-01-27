

// AND

function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(8);

//OR 

function operadorOr(str){
    if (str ==="Henry" || str.length < 2 ) console.log(true);
    else console.log(false);
}

operadorOr("Henry");
peradorOr("Javascript");
peradorOr("H");


// NOT

function negacion(permiso){
    if (permiso) console.log("Tiene permiso");
}

negacion(true);
negacion(false);


//veracidad



Boolean(1);
Boolean(0);
Boolean(-1);
Boolean(true);
Boolean(false);
Boolean("string");
Boolean(null);
Boolean(undefined);
Boolean()