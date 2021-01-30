import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, TextInput, Button, Link} from '../../components';
import {ICFacebook, ICGoogle} from '../../assets';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>
          Find your cozy house to stay and happy
        </Text>
        <Gap height={30} />
        <TextInput placeholder="Your Email Address" />
        <Gap height={15} />
        <TextInput placeholder="Your Password" />
        <Gap height={30} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
        <Link
          title="Can't Login?"
          titleBtn="Click Here"
          onPress={() => navigation.replace('SignUp')}
        />
      </View>
      <View style={styles.footer}>
        <Link title="- Or sign in With -" />
        <Gap height={15} />
        <View styles={styles.button}>
          <Button type="login" icon={<ICFacebook />} title="Facebook" />
          <Button type="login" icon={<ICGoogle />} title="Google" />
        </View>
        <Gap weight={30} />
        <Link
          title="already have an account?"
          titleBtn="Sign Up"
          onPress={() => navigation.replace('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    padding: 24,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#82868E',
  },
  footer: {
    // justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
  },
});
