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
 console.log (saludo);