import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import {fonts} from './utils/constants';

const App = () => {
  return (
    <View>
      <Text style={styles.App}>Praveen</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  App: {
    fontSize: 20,
    fontFamily: fonts.regular,
  },
});
