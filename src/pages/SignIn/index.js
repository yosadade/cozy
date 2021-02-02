import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {Gap, TextInput, Button, Link} from '../../components';
import {ICFacebook, ICGoogle} from '../../assets';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
    loaded: false,
    userGoogleInfo: '',
  });

  useEffect(() => {
    // onGoogle();
    GoogleSignin.configure({
      webClientId:
        '927870616403-2s1g1sj90d45arjesid8taua5kabko5m.apps.googleusercontent.com',
      offlineAccess: true,
    });
  });

  const onSignIn = () => {
    console.log('email', form.email);
    console.log('password', form.password);
  };

  const onGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setForm('userGoogleInfo', userInfo);
      setForm('loaded', true);
    } catch (err) {
      console.log(err.message);
    }
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('========================');
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then((res) => console.log('berhasil'))
      .catch((err) => console.log('error catch'));
  }
  return (
    <View style={styles.page}>
      <View>
        {/* <Text style={styles.title}>Sign In</Text> */}
        {form.loaded ? (
          <Text style={styles.title}>{form.userGoogleInfo.user.name}</Text>
        ) : (
          <Text style={styles.title}>Sign In</Text>
        )}
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
          <Button type="login" icon={<ICFacebook />} title="Facebook" />
          <Button
            type="login"
            icon={<ICGoogle />}
            title="Google"
            onPress={onGoogle}
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
