import React, {useEffect, useRef, useState} from 'react';
import {Center, Divider, Input, Text, View} from 'native-base';

export const OTP = ({countdown}) => {
  const inputRefs = useRef([]);
  const [resendTime, setResendTime] = useState(countdown);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    let interval;
    if (resendTime > 0) {
      interval = setInterval(() => {
        setResendTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      setIsResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [resendTime]);

  const handleResend = () => {
    setIsResendEnabled(false);
    setResendTime(countdown);
  };

  const focusNextInput = (index, txt) => {
    if (txt.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (txt != 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View flex={1}>
      <Center flex={1} flexDir={'row'}>
        {Array.from({length: 4}).map((_, index) => (
          <React.Fragment key={index}>
            <Input
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              onChangeText={txt => {
                focusNextInput(index, txt);
              }}
              width={75}
              height={75}
              bg={'common.white'}
              rounded={16}
              textAlign={'center'}
              fontSize={20}
              keyboardType="numeric"
              maxLength={1}
            />
            {index < 3 && <Divider orientation="vertical" opacity={0} w={3} />}
          </React.Fragment>
        ))}
      </Center>
      <Center flexDir={'row'}>
        <Text
          onPress={handleResend}
          disabled={!isResendEnabled}
          color={isResendEnabled ? 'primary.600' : 'common.black'}>
          Resend OTP
        </Text>
        {resendTime > 0 && <Text>({resendTime}s)</Text>}
      </Center>
    </View>
  );
};
