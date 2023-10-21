import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, processColor } from 'react-native';
import Create from "./src/frontend/create"
import Login from "./src/frontend/login"
import Home from "./src/frontend/home"
import Profile from './src/frontend/profile';
import Assesment from './src/frontend/Assesment';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AgoraUIKit from 'agora-rn-uikit';

const Stack = createNativeStackNavigator();

export default function App() {

let rtcProps = {
  appId : "5682a290fd384242a78369cd7a88ebee",
  channelName :"Test"
}
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>          
          <Stack.Screen name="Create" component={Create}/>          
          <Stack.Screen name="Profile" component={Profile}/>          
          <Stack.Screen name="Assesment" component={Assesment}/>          
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
      
    
    //<Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
