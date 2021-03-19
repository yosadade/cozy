import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../../assets';

const ItemListMenu = ({label, subTitle, onPress, icon}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.page} onPress={onPress}>
      <View style={styles.content}>
        {icon}
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <ICArrowRight />
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    marginLeft: 16,
    fontFamily: 'Poppins-Light',
    color: '#7D8797',
  },
});
