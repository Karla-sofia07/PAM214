import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

export default function Ejemplo() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  return (
    <ImageBackground
    source={require('./assets/intro/assets/nacimientovenus.jpg')} // Imagen local
    style={styles.background}
  >
      <View style={styles.content}>
        <Text style={styles.title}>Explora nuestros cursos</Text>
        <Button title="Comenzar" onPress={() => alert('¡Bienvenido!')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#4682B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});
