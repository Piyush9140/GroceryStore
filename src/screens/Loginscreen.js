import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Input, Text, useTheme} from 'native-base';

export const Login = ({navigation}) => {
  return (
    <View flex={1} bg="primary.50">
      <View style={styles.imageBackground}>
        <Image
          source={require('../assets/images/20450388_Vitamins.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.inputSection}>
        <Text bold fontSize="2xl">
          Fresh Picks Just a Tap Away!
        </Text>
        <Text fontSize="xs" color="accent.400">
          Enter your phone number to receive an OTP.
        </Text>
        <Input
          InputLeftElement={
            <Text fontSize="lg" marginLeft={5}>
              +91
            </Text>
          }
          bg="common.white"
          marginTop={5}
          rounded={13}
          fontSize="lg"
          keyboardType="number-pad"
          maxLength={10}
          blurOnSubmit
        />
        <Button
          size="md"
          w="100%"
          marginTop={2}
          rounded={13}
          bg="primary.500"
          onPress={() => {
            navigation.navigate('Auth', {
              screen: 'OTP',
            });
          }}>
          Continue
        </Button>
        <View style={styles.footer}>
          <Text fontSize={10} color="accent.400">
            By proceeding, you agree to our{' '}
          </Text>
          <Text fontSize={10} color="accent.500" underline>
            Terms & Conditions and Privacy policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF7ED',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  inputSection: {
    flex: 0.3,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF7ED',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
