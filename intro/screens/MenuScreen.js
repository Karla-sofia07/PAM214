import {Text, StyleSheet, View, Button} from 'react-native'
import React, { cacheSignal, useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesSreen'
import TextImput from './TextImput'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import Scroll from './Scroll' 
import Ejemp from './Ejemp'
import Repaso from './Repaso'
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
                                <Button color='#ff0080ff' onPress={()=>setScreen('ActivityIndicatorScreen')} title='Pract:ActivityIndicator'/>
                             <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Scroll')} title='Pract:Scroll'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                            </View>  
                            </View> 
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Bottom Sheet')} title='Pract:Bottom Sheet'/>
                            </View> 
                             <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Ejemp')} title='Pract:Ejemp'/> 
                            </View>
                            <View style={styles.buttonSquare}>
                                <Button color='#ff0080ff' onPress={()=>setScreen('Repaso')} title='Pract:Repaso'/> 
                            </View>
                    </View> 
                )  
        case 'Texto':
            return <TextImput/>
         case 'Imagen':
            return <ImageBackgroundScreen/>  
          case 'Scroll' :
            return <Scroll/>
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen/>
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
    backgroundColor: '#ff9cbdff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSquare: {
    width: 180,
    height: 45,
    marginVertical: 6,
    borderRadius: 0,
    overflow: 'hidden',
  },
  texto: {
    color: '#000000ff',
    fontSize: 50,
    fontFamily: 'Montserrat',
  },
});
