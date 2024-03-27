import {Button, Center, Input, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

export const PersonalDetails = () => {
  return (
    <View flex={1}>
      <View p={5}>
        <Text mb={2} bold>
          Full Name*
        </Text>
        <Input
          variant={'filled'}
          rounded={15}
          mb={10}
          bg={'accent.200'}
          placeholder={'Enter Here'}
        />
        <Text bold mb={2}>
          Email ID*
        </Text>
        <Input
          variant={'filled'}
          rounded={15}
          mb={10}
          bg={'accent.200'}
          placeholder={'Enter Here'}
          keyboardType='email-address'
        />
        <Text mb={2} bold>
          Secondary Mobile Number(Optional)
        </Text>
        <Input
          InputLeftElement={
            <Text fontSize="sm" marginLeft={5}>
              +91
            </Text>
          }
          variant={'filled'}
          rounded={15}
          bg={'accent.200'}
          placeholder={'Enter Here'}
          fontSize="sm"
          keyboardType='number-pad'
        />
      </View>
      <View flex={1} justifyContent={'flex-end'}>
        <View
          h={100}
          borderTopLeftRadius={14}
          borderTopRightRadius={14}
          bg={'common.white'}
          elevation={5}>
          <Center flex={1} px={5}>
            <Button
              w={'100%'}
              h={50}
              rounded={12}
              bg={'primary.500'}
              _text={{fontSize: 'lg'}}>
              Continue
            </Button>
          </Center>
        </View>
      </View>
    </View>
  );
};
