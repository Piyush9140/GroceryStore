import 'react-native-gesture-handler';
import React from 'react';
import {Login} from './screens/Loginscreen';
import {NativeBaseProvider} from 'native-base';
import {theme} from './utils/constants';
import {OTPScreen} from './screens/OTPScreen';
import {Splash} from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MyStack} from './navigation/StackNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <MyStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
