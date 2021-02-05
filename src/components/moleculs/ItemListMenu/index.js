import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../../assets';

const ItemListMenu = ({label, subTitle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.page} onPress={onPress}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <ICArrowRight />
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#7D8797',
  },
});
