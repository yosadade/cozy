import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICStarActive} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.container}>
      <ICStarActive />
      <ICStarActive />
      <ICStarActive />
      <ICStarActive />
      <ICStarActive />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
