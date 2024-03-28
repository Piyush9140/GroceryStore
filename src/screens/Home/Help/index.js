import {
  Button,
  Center,
  ChevronRightIcon,
  Pressable,
  Text,
  View,
} from 'native-base';
import React from 'react';

export const Help = () => {
  return (
    <View>
      <View
        rounded={13}
        bg={'common.white'}
        h={108}
        m={5}
        p={5}
        justifyContent={'center'}>
        <Text mb={2}>You have 0 Active Refunds</Text>
        <Button
          w={110}
          variant={'outline'}
          borderColor={'primary.500'}
          rounded={8}>
          View Refunds
        </Button>
      </View>
      <View flexDir={'row'} p={4} justifyContent={'space-between'}>
        <Text>Recent Order</Text>
        <Pressable>
          <Text color={'primary.500'}>See All</Text>
        </Pressable>
      </View>
      <View p={4} bg={'common.white'}>
        <View flexDir={'row'}>
          <Text numberOfLines={2} flexShrink={1}>
            Cadbury Bournville Rich Cocoa 70% Dark
          </Text>
          <Text ml={100}>₹87.49</Text>
        </View>
        <View
          borderStyle={'dashed'}
          borderWidth={0.5}
          borderRadius={1}
          borderColor={'accent.100'}
          my={2}
        />
        <View flexDir={'row'} justifyContent={'space-between'}>
          <View>
            <Text fontSize={12} flexShrink={1} color={'accent.400'}>
              Order #897JDHK39392
            </Text>
            <Text fontSize={12} flexShrink={1} color={'accent.400'}>
              25/02/24 at 09:00pm
            </Text>
          </View>
          <Center rounded={8} bg={'secondary.400'} w={'auto'} px={2}>
            <Text color={'common.white'}>Delivered</Text>
          </Center>
        </View>
      </View>
      <View p={4}>
        <Text>FAQs</Text>
      </View>
      <View>
        {Array.from({length: 4}).map((_, index) => (
          <View
            key={index}
            flexDir={'row'}
            bg={'common.white'}
            p={4}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={0.5}>
            <Text>FAQ Category-1</Text>
            <ChevronRightIcon color={'primary.500'}/>
          </View>
        ))}
      </View>
    </View>
  );
};
