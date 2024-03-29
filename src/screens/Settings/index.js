import {Button, Center, Image, Text, View} from 'native-base';
import React from 'react';
import {SettingsOption} from './settings_options_component';

export const Settings = ({navigation}) => {
  const gotoPersonalDetails = () => {
    navigation.navigate('App', {
      screen: 'Personal Details',
    });
  };
  const gotoHelp = () => {
    navigation.navigate('App', {
      screen: 'Help & Support',
    });
  };
  const ordersIcon = require('../../assets/images/fi-br-shopping-bag.png');
  const FAQIcon = require('../../assets/images/fi-br-comment.png');
  const addressIcon = require('../../assets/images/fi-br-location-alt.png');
  const refundIcon = require('../../assets/images/fi-br-redo-alt.png');
  const detailsIcon = require('../../assets/images/fi-br-user.png');
  const suggestionIcon = require('../../assets/images/fi-br-bulb.png');
  const notifsIcon = require('../../assets/images/fi-br-bell.png');
  return (
    <>
      <View
        flexDir={'row'}
        height={100}
        alignItems={'center'}
        bg={'common.white'}
        px={5}
        mb={2}
        mt={0.4}>
        <Center bg={'primary.500'} borderRadius={100} h={10} w={10} mr={2}>
          <Image
            source={require('../../assets/images/account_circle.png')}
            alt="avatar"
            borderRadius={100}
            resizeMode="contain"
          />
        </Center>
        <View>
          <Text bold fontSize={'lg'}>
            Salmaan Ahmed
          </Text>
          <Text fontSize={'sm'}>96000 16417</Text>
        </View>
      </View>
      <SettingsOption name="Orders" iconURL={ordersIcon} />
      <SettingsOption
        name="Customer Support and FAQ"
        iconURL={FAQIcon}
        onPress={gotoHelp}
      />
      <SettingsOption name="Addresses" iconURL={addressIcon} />
      <SettingsOption name="Refund" iconURL={refundIcon} />
      <SettingsOption
        name="Profile"
        iconURL={detailsIcon}
        onPress={gotoPersonalDetails}
      />
      <SettingsOption name="Suggest Product" iconURL={suggestionIcon} />
      <SettingsOption name="Notifications" iconURL={notifsIcon} />
      <Button
        variant={'outline'}
        mt={5}
        w={100}
        h={50}
        alignSelf={'center'}
        rounded={16}
        _text={{fontSize: 15, color: 'error.300'}}>
        Log Out
      </Button>
    </>
  );
};
