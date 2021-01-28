import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <ICLogo />
      <Text style={styles.title}>Cozy</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#222222',
    fontSize: 36,
    marginLeft: 10,
  },
});
