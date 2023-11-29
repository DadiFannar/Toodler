import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/views/Board'

export default function App() {
  return (
    <View>
      <Board />
    </View>

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
