import {Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesSreen'
import ImageBackground from './ImageBackground';
import TextInput from './TextImput';
import scrollView from './scrollView';
import ActivityIndicator from './ActivityIndicator';
import FlatListySectionList from './FlatListySectionList';
import Modal from './Modal';
import BottomSheet from './BottomSheet';
import Ejemp from './Ejemp'; 
export default function MenuScreen () {
    const [screen,setScreen]=useState('menu');
    switch (screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'menu':
            default:
                return (
                   <View style={styles.container}>
                            <Text style={styles.texto}>Menu Practicas</Text>
                            <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                            <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/> 
                            <Button onPress={()=>setScreen('Imagen')} title='Pract:ImageBackground'/>
                            <Button onPress={()=>setScreen('Texto')} title='Pract:TextInput'/> 
                            <Button onPress={()=>setScreen('Scroll')} title='Pract:Scroll'/>
                            <Button onPress={()=>setScreen('ActivityIndicator')} title='Pract:ActivityIndicator'/>
                            <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                            <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                            <Button onPress={()=>setScreen('Bottom Sheet')} title='Pract:Bottom Sheet'/> 
                            <Button onPress={()=>setScreen('Ejemp')} title='Pract:Ejemp'/> 
                            <Button onPress={()=>setScreen('Repaso 1')} title='Repaso 1'/> 
                    </View> 
                )
        case 'Imagen':
            return <ImageBackground/>   
        case 'Texto':
            return <TextInput/>
        case 'Scroll':
            return <scrollView/>   
        case 'ActivityIndicator':
            return <ActivityIndicator/>
        case  'FlatList':
            return <FlatListySectionList/>
        case  'Modal':
            return <Modal/>
        case 'Bottom Sheet':
            return <BottomSheet/>  
        case 'Ejemp':
            return <Ejemp/>
        case 'Repaso':
            return <Repaso/>
    }
    
    
}
// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#addeffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#2b00ffff',
    fontSize:30,
    fontFamily:'Times New Roman',// tipografía
    fontWeight: 'bold', // 
    fontStyle: 'italic',// 
    
  },
  contenedorBotones:{
    marginTop: 15,// margen para poner botones alineados
    flexDirection: 'row-reverse', // para acomodar en columna o en fila
    gap: 30, // separación entre botones 


  },
});

