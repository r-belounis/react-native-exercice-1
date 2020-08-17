import React from 'react';
import { ActivityIndicator, View, ScrollView, Text, Image, Button, Alert, Vibration } from 'react-native';
import Webview from './components/webview'

export default function App() {

const textOneLiner = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <View>
        <Text style={{marginTop: 80, marginBottom: 80, fontSize: 30}}>Ceci est un texte de taille 30</Text>
        <Text style={{marginTop: 80, marginBottom: 80, textAlign: "center"}}>Ceci est un texte centré</Text>
        <Text style={{marginTop: 80, marginBottom: 80, fontWeight: "bold"}}>Ceci est un texte en gras</Text>
      </View>
      <View>
        <Image style={{width: 124, height: 40}} source={require('./assets/konexio-logo_1.png')}/>
        <Image style={{width: 124, height: 40}} source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}/>
      </View>
      <View>
        {/* <Button title="click me" onPress={() => Alert.alert('Ceci est une alerte !')}/> */}
        <Button
          title="Click me"
          color="#f194ff"
          onPress={() => Alert.alert('Ceci est une alerte')}
        />
      </View>
      <View>
        <Webview style={{marginTop: 20}}/>
      </View>
      <View>
        <ActivityIndicator size="large" />
      </View>
      <View>
        <Button title="le téléphone va vibrer si tu cliques" onPress={() => Vibration.vibrate()} />
      </View>
    </ScrollView>
  );
}