import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, TextInput, Button, Link} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Don't have an account? Sign up now</Text>
        <Gap height={30} />
        <TextInput title="Full Name" placeholder="Full Name" />
        <Gap height={15} />
        <TextInput title="Email" placeholder="Email" />
        <Gap height={15} />
        <TextInput title="No. Hp" placeholder="No. Hp" />
        <Gap height={15} />
        <TextInput title="Password" placeholder="Password" />
        <Gap height={15} />
        <TextInput title="Re Password" placeholder="Re Password" />
        <Gap height={30} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
        <Gap weight={30} />
        <Link
          title="Back to"
          titleBtn="Sign In"
          onPress={() => navigation.replace('SignIn')}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
