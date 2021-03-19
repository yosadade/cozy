import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import {Gap, TextInput, Button, Link} from '../../components';
import {ICFacebook, ICGoogle} from '../../assets';
import {useForm, storeData, showMessage, showError} from '../../utils';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
    loaded: false,
    userGoogleInfo: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '927870616403-6v6o93epdaij1lecdka0hk10srmut0cg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  });

  const onSignIn = () => {
    dispatch({type: 'SET_LOADING', value: true});
    if (form.email.length === 0 && form.password.length === 0) {
      dispatch({type: 'SET_LOADING', value: false});
      showError('Please enter your email and password');
    } else if (form.email.length === 0) {
      dispatch({type: 'SET_LOADING', value: false});
      showError('Please enter your email');
    } else if (form.password.length === 0) {
      dispatch({type: 'SET_LOADING', value: false});
      showError('Please enter your password');
    } else {
      auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then((res) => {
          dispatch({type: 'SET_LOADING', value: false});
          database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then((resDB) => {
              if (resDB.val()) {
                storeData('user', resDB.val());
                navigation.replace('MainApp');
              }
            });
        })
        .catch((error) => {
          dispatch({type: 'SET_LOADING', value: true});
          if (error.message === 'auth/user-not-found') {
            dispatch({type: 'SET_LOADING', value: false});
            showError('That email address is invalid!');
          } else if (error.code === 'auth/email-already-in-use') {
            dispatch({type: 'SET_LOADING', value: false});
            showError('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            dispatch({type: 'SET_LOADING', value: false});

            showError('That email address is invalid!');
          }
          console.error(error.message);
        });
    }
  };

  const onFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  async function googleLogin({cancel, success}) {
    try {
      GoogleSignin.configure({
        webClientId:
          '927870616403-6v6o93epdaij1lecdka0hk10srmut0cg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      });
      const data = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken,
      );
      const firebaseUserCredential = await auth().signInWithCredential(
        credential,
      );
      if (firebaseUserCredential) {
        // setLoggedInGoogle(true);
        console.log('success');
      }
      if (typeof success === 'function') {
        success();
      }
    } catch (e) {
      console.warn('GOOGLE ERROR', e);
      if (typeof cancel === 'function') {
        cancel();
      }
    }
  }

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert(JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('error');
      }
    }
  }
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>
          Find your cozy house to stay and happy
        </Text>
        <Gap height={30} />
        <TextInput
          title="Email"
          placeholder="Your Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={15} />
        <TextInput
          title="Password"
          placeholder="Your Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={30} />
        <Button title="Sign In" onPress={onSignIn} />
        <Link
          title="Can't Login?"
          titleBtn="Click Here"
          onPress={() => navigation.replace('SignUp')}
        />
      </View>
      <View style={styles.footer}>
        <Link title="- Or sign in With -" />
        <Gap height={15} />
        <View style={styles.button}>
          <Button
            type="login"
            icon={<ICFacebook />}
            title="Facebook"
            onPress={onFacebook}
          />
          <Button
            type="login"
            icon={<ICGoogle />}
            title="Google"
            onPress={signIn}
          />
        </View>
        <Gap height={60} />
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
    justifyContent: 'space-between',
  },
});
