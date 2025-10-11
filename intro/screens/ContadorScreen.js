//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2.Main: Zona de componentes 
export default function ContadorScreen() {
  const[contador,setContador]=useState(0);

  return (

    <View style={styles.container}>
      <Text style={styles.texto}> Contador: </Text>
       <Text style={styles.texto2}> {contador}  </Text>


      <View style={styles.contenedorBotones}>
      <Button color= "#00ff00ff" title="Incrementar" onPress={() => setContador(contador + 1)}/>
      <Button  color= "#ff0000ff"title="Decremento" onPress={() => setContador(contador - 1)}/>
      <Button color= "#70ffffff" title="Reiniciar" onPress={() => setContador(contador - contador)}/>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb5e8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#000000ff',
    fontSize:30,
    fontFamily:'Times New Roman',// tipografía
    fontWeight: 'bold', // 
    fontStyle: 'italic',// 
    textDecorationLine: 'line-through', //
  },
  texto2:{
    color:'#ffffffff',
    fontSize: 40,
    fontFamily:'Courtier',// tipografía
    fontWeight: '900', // 
    textDecorationLine: 'line-through', //

  },
  contenedorBotones:{
    marginTop: 15,// margen para poner botones alineados
    flexDirection: 'row-reverse', // para acomodar en columna o en fila
    gap: 20, // separación entre botones 


  },
});