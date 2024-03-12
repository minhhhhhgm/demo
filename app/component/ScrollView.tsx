import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollViewComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

