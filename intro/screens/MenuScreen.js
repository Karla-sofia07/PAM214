import {Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesSreen'
import TextInput from './TextImput';
import FlatListySectionList from './FlatListySectionList';
import Modal from './Modal';
import BottomSheet from './BottomSheet';
import Ejemp from './Ejemp'; 
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen'; 
import Scroll from './Scroll'; 
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
                            <Text style={styles.texto}>Menú Prácticas</Text>
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('contador') } title='Pract:Contador'/> 
                            </View>
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff'onPress={()=>setScreen('botones')} title='Pract:Buttons'/> 
                            </View>
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Texto')} title='Pract:TextInput'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Imagen')} title='Pract:ImageBackground'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Scroll')} title='Pract:Scroll'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('ActivityIndicatorScreen')} title='Pract:ActivityIndicator'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                            </View>  
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Bottom Sheet')} title='Pract:Bottom Sheet'/>
                            </View> 
                             <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Ejemp')} title='Pract:Ejemp'/> 
                            </View>
                            
                    </View> 
                )  
        case 'Texto':
            return <TextInput/>
         case 'Imagen':
            return <ImageBackgroundScreen/>  
          case 'Scroll' :
            return <Scroll/>
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen/>
        case  'FlatList':
            return <FlatListySectionList/>
        case  'Modal':
            return <Modal/>
        case 'Bottom Sheet':
            return <BottomSheet/>  

    }
    
    
}
// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9cbdff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d87daaff',
    marginBottom: 25,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonSquare: {
    width: 180,
    height: 45,
    marginVertical: 6,
    borderRadius: 0, // botones cuadrados
    overflow: 'hidden',
  },
    texto:{
    color:'#000000ff',
    fontSize:50,
    fontFamily:'Montserrat',// tipografía
  },
});
