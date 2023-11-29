import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './src/routes';

export default function App() {
  return (
    <AppContainer/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffa',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
