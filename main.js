// let total = prompt("Cuantas personas asistiran a la boda?");

// let a = 5;
// let b = 6;
// let c = 3;

// if (a > b  && a > c)

// let numeroMayor = (a > b && a > c ) ? "A" : (b > c) ? "B" : (c > a) ? "C";

let seleccion = ["piedra", "papel", "tijeras", "lagarto", "spok","piedra", "papel", "tijeras", "lagarto", "spok", "piedra"];
let usuario = prompt("Elige: piedra, papel, tijeras, lagarto o spok");
let computador = seleccion[(Math.floor(Math.random()*10))]
// console.log(seleccion[(Math.floor(Math.random()*10))])

if ( usuario == "tijeras" && computador == "papel"){
  console.log("tijeras cortan papel: gana usuario");
} else if ( usuario == "papel" && computador == "tijeras"){
    console.log("tijeras cortan papel: gana ususario");   
} else if(usuario == "papel" && computador == "piedra"){
    console.log("papel tapa a piedra: gana usuario");
} else if(usuario == "piedra" && computador == "papel"){
    console.log("papel tapa a piedra: pierdes");
} else if(usuario == "piedra" && computador == "lagarto"){
    console.log("piedra aplasta a lagarto: gana usuario");
} else if (usuario == "lagarto" && computador == "piedra"){
    console.log("piedra aplasta a lagarto: pierdes");
} else if(usuario == "lagarto" && computador == "spok"){
    console.log("lagarto envenena a spok: gana usuario");
} else if (usuario == "spok" && computador == "lagarto"){
    console.log("lagarto envenena a spok: pierdes");
} else if(usuario == "spok" && computador == "tijeras"){
    console.log("spok rompe tijeras: gana usuario");
} else if (usuario == "tijeras" && computador == "spok"){
    console.log("spok rompe tijeras: pierdes");
  } else if(usuario == "tijeras" && computador == "lagarto"){
    console.log("tijeras decapitan lagarto: gana usuario");
} else if (usuario == "lagarto" && computador == "tijeras"){
    console.log("tijeras decapitan lagarto: pierdes");
} else if(usuario == "lagarto" && computador == "papel"){
    console.log("lagarto devora papel: gana usuario");
} else if (usuario == "papel" && computador == "lagarto"){
    console.log("lagarto devora papel: pierdes");
} else if(usuario == "papel" && computador == "spok"){
    console.log("papel desautoriza spok: gana usuario");
} else if (usuario == "spok" && computador == "papel"){
    console.log("papel desautoriza spok: pierdes");
  } else if(usuario == "spok" && computador == "piedra"){
    console.log("spok vaporiza piedra: gana usuario");
} else if (usuario == "piedra" && computador == "spok"){
    console.log("spok vaporiza piedra: pierdes");
} else if(usuario == "piedra" && computador == "tijeras"){
    console.log("piedra aplasta a tijeras: gana usuario");
} else if (usuario == "tijeras" && computador == "piedra"){
    console.log("piedra aplasta a tijeras: pierdes");
} else {
  console.log("empate, intenta denuevo");
}


