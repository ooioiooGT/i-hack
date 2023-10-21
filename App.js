import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, processColor } from 'react-native';
import Create from "./src/frontend/create"
// import dotenv from 'dotenv'

export default function App() {

  // if(!process.env.ENV || process.env.ENV === 'local'){
  //   dotenv.config();
  // }

  return (
    <Create/>
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
