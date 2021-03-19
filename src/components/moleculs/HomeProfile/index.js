import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILProfile} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [profile, setProfile] = useState(ILProfile);
  useEffect(() => {
    getData('photo').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
      console.log(res);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Explore Now</Text>
        <Text style={styles.subTitle}>Mencari kosan yang cozy</Text>
      </View>
      <Image source={profile} style={styles.image} />
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
