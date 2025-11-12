import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState (true);
  const [nombre, setNombre]= useState('');
  const [profesion, setProfesion]= useState('');
  const [Correo, setCorreo]= useState ('');
  const [numero, setNumero]= useState ('');
  const [refreshing, setRefreshing] = useState(false);

   const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const mostrarAlerta= () => {
    if([nombre.trim(), profesion.trim(), Correo.trim(), numero.trim()].includes ('')) {
     Alert.alert('Error,Por favor ingrese todos los datos');
     alert ('Error, ingrese todos los datos');

    } else{
      Alert.alert('¡Hola, ${nombre}! tus datos han sido registrados correctamente');
      alert ('¡Hola, ${nombre}! tus datos han sido registrados correctamente');
      setNombre('')
    }

  };
  
  
  useEffect (() => {

      const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);

  }, []);
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}> Bienvenido a mi perfil personal </Text>
      </View>
    );
  }
  return (
     <SafeAreaView style={{ flex: 1 }}>
      
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }} 
        style={styles.background} 
      >
        <View style={styles.overlay}>
         <View style={styles.container}>
          <Text style= {styles.label}>Ingrese su nombre:</Text>

            <TextInput
            style={styles.input}
            placeholder="Sof Alvarez"
            value={nombre}
            onChangeText={setNombre}
            keyboardType='default'
            autoCapitalize='words'
            />

          <TextInput
            style={styles.input}
            placeholder="Ingeniería"
            value={profesion}
            onChangeText={setProfesion}
            keyboardType='default'
            autoCapitalize='words'
            />

            <TextInput 
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            />

            <TextInput
            style={styles.input}
            placeholder="Correo"
            value={Correo}
            onChangeText={setCorreo}
            keyboardType='default'
            autoCapitalize='words'
            />

            <TextInput
            style={styles.input}
            placeholder="numero de telefono"
            value={numero}
            onChangeText={setNumero}
            keyboardType='numeric'
            />
          <Button title="Editar Perfil" onPress={mostrarAlerta} color= '#df2db9ff' />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


// Estilos
const styles = StyleSheet.create({


  splashContainer: {
    flex: 1,
    backgroundColor: '#ff07d6ff',
    justifyContent: 'center',
    alignItems: 'center',
  },


  splashText: {
    fontSize: 24,
    color: '#fff',
  },


  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'none',
    
  },


  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});