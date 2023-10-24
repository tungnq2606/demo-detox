import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Type here" style={styles.input} testID="input" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
  },
});
