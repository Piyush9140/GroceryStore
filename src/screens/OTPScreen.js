import {View, Text, Center} from 'native-base';
import React from 'react';
import {OTP} from '../components/OTP';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const OTPScreen = ({navigation}) => {
  const handleOtpComplete = () => {
    navigation.replace('Personal Details')
  }
  return (
    <ImageBackground
      source={require('../assets/images/20450388_Vitamins.png')}
      style={styles.imageBackground}
      imageStyle={{opacity: 0.5}}>
      <View h={300} w={'100%'} position={'absolute'} top={40}>
        <LinearGradient
          colors={['rgba(255,247,237,0.7)', 'rgba(255,247,237,0.7)']}
          style={styles.gradient}>
          <Center>
            <Text bold fontSize="lg">
              We've sent you a Verification Code
            </Text>
            <Text bold fontSize="lg" marginBottom={5}>
              +91 96865 29842
            </Text>
          </Center>
          <OTP countdown={60} onOtpComplete={handleOtpComplete}/>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: '#FFF7ED',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingVertical: 40,
  },
});
