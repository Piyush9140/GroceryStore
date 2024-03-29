import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../../screens/HomeScreen';
import {Settings} from '../../screens/Settings';
import {PersonalDetails} from '../../screens/PersonalDetails';
import {Help} from '../../screens/Help';
import {ChevronLeftIcon} from 'native-base';
import {Splash} from '../../screens/Splash';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ChevronLeftIcon
              size={'md'}
              ml={5}
              color={'common.black'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Personal Details"
        component={PersonalDetails}
        options={({navigation}) => ({
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ChevronLeftIcon
              size={'md'}
              ml={5}
              color={'common.black'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Help & Support"
        component={Help}
        options={({navigation}) => ({
          headerStyle: {height: 100},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ChevronLeftIcon
              size={'md'}
              ml={5}
              color={'common.black'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
