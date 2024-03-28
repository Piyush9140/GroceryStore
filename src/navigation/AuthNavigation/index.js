import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/Auth/Login';
import {OTPScreen} from '../../screens/Auth/OTP';
import {Splash} from '../../screens/Auth/Splash';
import {PersonalDetails} from '../../screens/Auth/PersonalDetails';

const Stack = createStackNavigator();

export const AuthStack = () => {
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
