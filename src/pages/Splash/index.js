import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {ICLogo} from '../../assets';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          // user lagi login
          dispatch({type: 'SET_LOADING', value: false});
          navigation.replace('MainApp');
        } else {
          // user logout
          dispatch({type: 'SET_LOADING', value: false});
          navigation.replace('OnBoarding');
        }
      }, 2000);
    });

    return () => unsubscribe();
  }, [dispatch, navigation]);
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
