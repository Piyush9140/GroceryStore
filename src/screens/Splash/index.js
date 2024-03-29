import {StatusBar} from 'native-base';
import React, {useEffect, useState} from 'react';
import { ImageBackground} from 'react-native';

export const Splash = ({navigation, isSignedIn}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSignedIn) {
        navigation.replace('App', {screen: 'Home'});
      } else {
        navigation.replace('Auth', {screen: 'Login'});
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ImageBackground
        source={require('../../assets/images/Onboarding.png')}
        style={{flex: 1}}></ImageBackground>
    </>
  );
};
