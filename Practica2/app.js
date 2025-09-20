const persona = {
      nombre: "Karla Sofía",
      edad: 19,
      direccion: {
        ciudad: "Qro" ,
        pais: "MX"
 }
};
// Aplica la destructuración aquí
// Imprime el mensaje 
 const {nombre, edad, direccion:{cuidad} } = persona;
 console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


 
 
 const productos = [
  { nombre: "Laptop", precio: 1500 },
  { nombre: "Mouse", precio: 500 },
  { nombre: "Monitor", precio: 1200 },
  { nombre: "Teclado", precio: 800 }
];


const productosCaros = productos.filter(p => p.precio > 1000);


const nombresCaros = productosCaros.map(p => p.nombre);

console.log(nombresCaros); 


