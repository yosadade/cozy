import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILProfile} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Explore Now</Text>
        <Text style={styles.subTitle}>Mencari kosan yang cozy</Text>
      </View>
      <Image source={ILProfile} style={styles.image} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 24,
  },
});
