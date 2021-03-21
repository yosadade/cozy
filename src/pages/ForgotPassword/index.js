import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';
import {TextInput, Button, Gap, Link} from '../../components';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <ICLogo />
        <Text style={styles.titleLogo}>Cozy</Text>
      </View>
      <View>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subTitle}>
          Enter your registered email below to receive password reset instuction
        </Text>
        <TextInput placeholder="Email Address" />
        <Gap height={15} />
        <Button title="Proceed" />
      </View>
      <Link
        title="Back to login"
        titleBtn="Click Here"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 48,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLogo: {
    fontFamily: 'Poppins-SemiBold',
    color: '#222222',
    fontSize: 36,
    marginLeft: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,

    color: '#000000',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginTop: 15,
    color: '#82868E',
    textAlign: 'center',
  },
});
