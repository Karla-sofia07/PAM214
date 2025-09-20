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

const personas = [
    {nombre: "Luis", edad: 25},
    {nombre: "Ana", edad: 30},
    {nombree: "Carlos", edad: 28}
];
// buscamos a Luis
const luis = personas.find(p => p.nombre === "Luis");
console.log(luis);
// imprimimos nombre y edad de la persona
personas.forEach (p => {
    console.log (`${p.nombre} tiene ${p.edad} años`);
});
// sumamos todas las edades
const totalEdad = personas.reduce((acc, p) => acc + p.edad, 0);
console.log(`Edad total: ${totalEdad}`);

