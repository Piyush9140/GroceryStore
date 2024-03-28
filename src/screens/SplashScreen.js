import {StatusBar} from 'native-base';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';

export const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth', {
        screen: 'Login'
      });
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ImageBackground
        source={require('../assets/images/Onboarding.png')}
        style={styles.imageBackground}></ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
