import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, TextInput, Button, Link, Loading} from '../../components';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useForm, storeData} from '../../utils';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirm_password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          uid: success.user.uid,
        };
        database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('MainApp', data);
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(error.message);
      });
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Don't have an account? Sign up now</Text>
        <Gap height={30} />
        <TextInput
          title="Full Name"
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(value) => {
            setForm('fullName', value);
          }}
        />
        <Gap height={15} />
        <TextInput
          title="Email"
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => {
            setForm('email', value);
          }}
        />
        <Gap height={15} />
        <TextInput
          title="Phone Number"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChangeText={(value) => {
            setForm('phoneNumber', value);
          }}
        />
        <Gap height={15} />
        <TextInput
          title="Password"
          placeholder="Password"
          value={form.password}
          onChangeText={(value) => {
            setForm('password', value);
          }}
        />
        <Gap height={15} />
        <TextInput
          title="Confirm Password"
          placeholder="Confirm Password"
          value={form.password}
          onChangeText={(value) => {
            setForm('confirm_password', value);
          }}
        />
        <Gap height={30} />
        <Button title="Sign In" onPress={onContinue} />
        <Gap weight={30} />
        <Link title="Back to" titleBtn="Sign In" onPress={onSignIn} />
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
