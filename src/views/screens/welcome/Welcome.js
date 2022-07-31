import React from 'react';
import {Flex, Button, Center, NativeBaseProvider} from 'native-base';
import styles from './WelcomeStyle';
import {View, Text} from 'native-base';
import {Image, TouchableHighlight} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Flex direction="column" style={styles.container}>
        <View>
          <Text style={styles.headingText}>Welcome to ChatApp</Text>
        </View>
        <View style={styles.bgLogo}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/img/bg.jpg')}
            style={styles.bgLogoImg}
          />
        </View>
        <View>
          <View>
            <Text style={styles.termText}>
              Tap 'Agree and continue' to accept the ChatApp Terms of Service
              and privacy Policy{' '}
            </Text>
          </View>
          <Button style={styles.restore}>
            <Text style={styles.restoreText}>Restore</Text>
          </Button>
          <TouchableHighlight>
            <Button style={styles.agree} onPress={() => navigation.navigate('PhoneNumber')}>
              <Text style={styles.agreeText}>Agree and continue</Text>
            </Button>
          </TouchableHighlight>
        </View>
      </Flex>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
