import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/Loginscreen';
import {OTPScreen} from '../screens/OTPScreen';
import {Splash} from '../screens/SplashScreen';
import {PersonalDetails} from '../screens/PersonalDetails';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Personal Details"
        component={PersonalDetails}
        options={{
          headerStyle: {height: 100},
          headerTitleContainerStyle: {paddingLeft: 10},
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
