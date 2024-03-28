import {Button, Center, Input, Text, View} from 'native-base';
import React, {useState} from 'react';

export const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isContinueDisabled = (name === '' || email === '');
  return (
    <View flex={1}>
      <View p={5}>
        <Text mb={2} bold>
          Full Name*
        </Text>
        <Input
          value={name}
          onChangeText={txt => setName(txt)}
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
          value={email}
          onChangeText={txt => setEmail(txt)}
          variant={'filled'}
          rounded={15}
          mb={10}
          bg={'accent.200'}
          placeholder={'Enter Here'}
          keyboardType="email-address"
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
          keyboardType="number-pad"
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
              bg={isContinueDisabled ? 'accent.500' : 'primary.500'}
              _text={{fontSize: 'lg'}}
              disabled={isContinueDisabled}>
              Continue
            </Button>
          </Center>
        </View>
      </View>
    </View>
  );
};
