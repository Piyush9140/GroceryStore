import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/search.png')} />
      <TextInput style={styles.searchInput} {...props} />
      <View style={styles.line} />
      <Image source={require('../assets/images/mic.png')} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: 382,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 1.0)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
  },
  line: {
    width: 1,
    height: 24,
    backgroundColor: 'grey',
  },
  searchInput: {
    width: '80%',
    fontSize: 16,
  },
});
