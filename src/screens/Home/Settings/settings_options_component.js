import React from 'react';
import {View, Image, Text, ChevronRightIcon                                         } from 'native-base';

export const SettingsOption = ({name, iconURL, onPress}) => {
  return (
    <View
      bg={'common.white'}
      padding={5}
      flexDir={'row'}
      alignItems={'center'}
      mb={0.5}>
      <Image source={iconURL} alt={`${name} icon`} mr={3} />
      <Text>{name}</Text>
      <View flex={1} alignItems={'flex-end'}>
        <ChevronRightIcon color="primary.500" onPress={onPress}/>
      </View>
    </View>
  );
};
