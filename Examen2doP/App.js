import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState (true);
  const[nombre, setNombre]= useState('');
  const [profesion, setProfesion]= useState('');
  const [biografia, setBiografia]= useState('');
  const [Correo, setCorreo]= useState ('');
  const [numero, setNumero]= useState ('');
  
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
            placeholder="Biografía"
            value={biografia}
            onChangeText={setBiografia}
            keyboardType='default'
            autoCapitalize='words'
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
            value={nombre}
            onChangeText={setNombre}
            keyboardType='default'
            autoCapitalize='words'
            />
            <TextInput 
            style={styles.input}
            placeholder="Password"
            keyboardType="numeric" 
            secureTextEntry={true}
            />
                
            <TextInput 
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            />

          <Button title="Saludar" onPress={mostrarAlerta} color= '#df2db9ff' />
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
});