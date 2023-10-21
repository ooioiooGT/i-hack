import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, processColor } from 'react-native';
import Create from "./src/frontend/create"
import AgoraUIKit from 'agora-rn-uikit';
// import dotenv from 'dotenv'

export default function App() {

let rtcProps = {
  appId : "5682a290fd384242a78369cd7a88ebee",
  channelName :"Test"
}
  return (
    <AgoraUIKit rtcProps = {rtcProps} />
    // <Create/>
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
