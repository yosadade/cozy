import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const RatingDetail = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Kuretakeso Hott</Text>
        <Text style={styles.price}>
          $51 <Text style={styles.month}> / month</Text>
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default RatingDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#5843BE',
  },
  month: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#7A7E86',
  },
});
