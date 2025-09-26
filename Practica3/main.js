import { resta } from "./utils.js";


function verificarUsuario (usuario) {
    return new Promise ((resolve, reject)=> {
        if (usuario === "admin") {
            resolve ("Acceso concedido");
        } else {
            reject ("Acceso denegado");
        }
    });
}
verificarUsuario("admin")
.then(res => console.log(res))
.catch(err  => console.error(err));


verificarUsuario ("soff")
.then(res => console.log (res))
.catch(err => console.error(err));

function SimularPeticionAPI(){
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        } , 5000);
    });
}
async function obtenerDatos() {
    console.log("Solicitando datos...");
    const resultado = await SimularPeticionAPI();
    console.log(resultado);
}
obtenerDatos();

console.log ("Resultado de prueba 1")
console.log(resta (19,8));
console.log ("Resultado de prueba 2")
console.log(resta (9,7));



