import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';
import {TextInput, Button, Gap, Link, Modal} from '../../components';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useForm, showError} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [form, setForm] = useForm({email: ''});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const onProceed = () => {
    dispatch({type: 'SET_LOADING', value: true});
    auth()
      .sendPasswordResetEmail(form.email)
      .then((res) => {
        console.log(res);
        dispatch({type: 'SET_LOADING', value: false});
        setIsModalVisible(true);
        setForm('reset');
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };

  const onToggleModal = () => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 500);
  };

  return (
    <>
      <View style={styles.page}>
        <View style={styles.logo}>
          <ICLogo />
          <Text style={styles.titleLogo}>Cozy</Text>
        </View>
        <View>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subTitle}>
            Enter your registered email below to receive password reset
            instuction
          </Text>
          <TextInput
            placeholder="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={15} />
          <Button title="Proceed" onPress={onProceed} />
        </View>
        <Link
          title="Back to"
          titleBtn="Login"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
      {isModalVisible && (
        <Modal
          type="forgot-password"
          title="We're sending the link for verify your account. Please check your mailbox"
          onPressRight={onToggleModal}
        />
      )}
    </>
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
