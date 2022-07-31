import React,{useRef} from 'react';
import {View, Text, Button} from 'native-base';
import OTPTextInput from "react-native-otp-textinput";
import {Image, TouchableHighlight} from 'react-native';
import styles from './PhoneNumberStyle';

const PhoneNumberScreen = ({navigation}) => {
  const otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

  return (
    <>
      <View style={styles.container}>
        <View>
          <View>
            <View>
              <Text style={styles.headingText}>Verify your phone number</Text>
            </View>
            <View style={styles.otpBox}>
              <OTPTextInput tintColor="#0000ff" textInputStyle={{color: '#0000ff'}} />
            </View>
          </View>

          <View style={styles.nextBtn}>
            <Button style={styles.nextBtnn} onPress={()=> navigation.navigate('Home')}>
              <Text style={styles.nextText}>Next</Text>
            </Button>
          </View>
        </View>
        <View>
          <Text style={styles.msgText}>
            If you want to restore chats history from chatApp, make sure you
            made a backup from your messages, then you can restore it be
            pressing then you can restore it by pressing the button bellow then
            put your number press on verfiy.
          </Text>

          <Button style={styles.copyBtn}>
            <TouchableHighlight>
              <Text style={styles.copyBtnText}>copy chatapp data</Text>
            </TouchableHighlight>
          </Button>
        </View>
      </View>
    </>
  );
};

export default PhoneNumberScreen;
