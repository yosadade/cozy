import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Label} from '../../atoms';
import {ICBar, ICBedRoom, ICLemari} from '../../../assets';

const FasilitiesDetail = () => {
  return (
    <View>
      <Label title="Main Fasilities" />
      <View style={styles.container}>
        <View style={styles.content}>
          <ICBar />
          <Text style={styles.total}>
            2 <Text style={styles.fasilities}>Kitchen</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <ICBedRoom />
          <Text style={styles.total}>
            2 <Text style={styles.fasilities}>Bedroom</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <ICLemari />
          <Text style={styles.total}>
            3 <Text style={styles.fasilities}>Big Lemari</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FasilitiesDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 12,
  },
  total: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 8,
    color: '#5843BE',
  },
  fasilities: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#7A7E86',
  },
});
