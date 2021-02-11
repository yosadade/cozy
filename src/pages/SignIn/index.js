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
import {useForm, storeData, showMessage} from '../../utils';
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
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      scopes: ['profile', 'email'],
    });
  });

  const onSignIn = () => {
    dispatch({type: 'SET_LOADING', value: true});
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
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err);
      });
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

  const onGoogle = async () => {
    try {
      await GoogleSignin.hasPlaySersvices();
      const userInfo = await GoogleSignin.signIn();
      setForm('userGoogleInfo', userInfo);
      setForm('loaded', true);
    } catch (err) {
      console.log(err.message);
    }
  };

  async function googleLogin({cancel, success}) {
    try {
      GoogleSignin.configure({
        webClientId:
          '927870616403-6v6o93epdaij1lecdka0hk10srmut0cg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        scopes: ['profile', 'email'],
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
            onPress={googleLogin}
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
