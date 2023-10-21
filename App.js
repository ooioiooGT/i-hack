import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, processColor } from 'react-native';
import Create from "./src/frontend/create"
import Profile from './src/frontend/profile';
import Assesment from './src/frontend/Assesment';
// import AgoraUIKit from 'agora-rn-uikit';
export default function App() {

let rtcProps = {
  appId : "5682a290fd384242a78369cd7a88ebee",
  channelName :"Test"
}
  return (
    <Create />
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
