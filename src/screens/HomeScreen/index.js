import {Button, Center, Text, View} from 'native-base';
import React from 'react';
export const HomePage = ({navigation}) => {
  const goToSettings = () => {
    navigation.navigate('App', {
      screen: 'Settings',
    });
  };
  return (
    <Center flex={1}>
      <Text>Temporary Home Page</Text>
      <Button onPress={goToSettings}>Press to go to settings</Button>
    </Center>
  );
};
