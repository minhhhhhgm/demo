import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://blog.logrocket.com/wp-content/uploads/2021/01/installing-react-navigation.png'}}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

