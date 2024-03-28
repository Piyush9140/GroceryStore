import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import {fonts} from './utils/constants';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return <ProductDetails />;
};

export default App;

const styles = StyleSheet.create({
  App: {
    fontSize: 20,
  },
});
