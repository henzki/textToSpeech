import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, StatusBar, View, Button, TextInput, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text);
  };


  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Write something:</Text>
      <TextInput style={styles.input} 
      textAlign={'center'}
      onChangeText={text => setText(text)}>
      </TextInput>
      <Button title="PRESS TO HEAR TEXT" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 25,
    marginBottom: 25,
    height: 30,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1 
  },
});
