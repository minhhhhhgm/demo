import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextComponent = () => {
  return (
    <View style={styles.container}>
      <Text 
      numberOfLines={3}
      ellipsizeMode='tail'
      style={styles.text}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

