//function statement

/*function greet() {
    console.log(`hi`);
}
greet();
*/

let greet = () => {
    console.log(`Hi`);
}
greet();

// function are first-class

function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//ALT GR LLAVE PARA CERRAR backtick

//Can not find module app1.js, es un error de directorio