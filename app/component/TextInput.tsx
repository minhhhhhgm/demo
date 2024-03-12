import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');

  const onChangeText = (inputText : string) => {
    setText(inputText);
  };

  const onPressButton = () => {
    console.log('Entered text:', text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter text here..."
      />
      <Button
        title="Submit"
        onPress={onPressButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

